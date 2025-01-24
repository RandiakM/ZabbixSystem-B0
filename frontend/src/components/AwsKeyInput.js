// frontend/src/components/AwsKeyInput.js
import React, { useState } from 'react';
import axios from 'axios';

const AwsKeyInput = ({ userId }) => {
    const [accessKey, setAccessKey] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [message, setMessage] = useState('');

    const handleSave = async () => {
        try {
            await axios.post('http://localhost:5001/api/aws/keys', { userId, accessKey, secretKey });
            setMessage('AWS keys saved successfully');
        } catch (error) {
            setMessage('Failed to save AWS keys');
        }
    };

    const handleValidate = async () => {
        try {
            const response = await axios.post('http://localhost:5001/api/aws/validate', { accessKey, secretKey });
            setMessage(`AWS keys are valid: ${response.data.identity.Arn}`);
        } catch (error) {
            setMessage('Invalid AWS keys');
        }
    };

    return (
        <div>
            <h2>AWS Key Input</h2>
            <input type="text" placeholder="Access Key" value={accessKey} onChange={(e) => setAccessKey(e.target.value)} />
            <input type="text" placeholder="Secret Key" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
            <button onClick={handleSave}>Save Keys</button>
            <button onClick={handleValidate}>Validate Keys</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AwsKeyInput;