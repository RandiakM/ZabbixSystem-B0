// aws-service/src/controllers/awsController.js
const AwsKey = require('../models/AwsKey');

exports.saveKeys = async (req, res) => {
    const { userId, accessKey, secretKey } = req.body;
    try {
        const awsKey = new AwsKey({ userId, accessKey, secretKey });
        await awsKey.save();
        res.status(201).json({ message: 'AWS keys saved successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.validateKeys = async (req, res) => {
    const { accessKey, secretKey } = req.body;
    try {
        // Use AWS SDK to validate keys
        const AWS = require('aws-sdk');
        AWS.config.update({ accessKeyId: accessKey, secretAccessKey: secretKey });

        const sts = new AWS.STS();
        const identity = await sts.getCallerIdentity({}).promise();
        res.status(200).json({ message: 'AWS keys are valid', identity });
    } catch (error) {
        res.status(400).json({ error: 'Invalid AWS keys' });
    }
};