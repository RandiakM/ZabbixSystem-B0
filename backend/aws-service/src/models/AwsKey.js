// aws-service/src/models/AwsKey.js
const mongoose = require('mongoose');

const awsKeySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    accessKey: { type: String, required: true },
    secretKey: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AwsKey', awsKeySchema);