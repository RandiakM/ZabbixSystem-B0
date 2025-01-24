// frontend/src/components/AwsKeyInput.js
import React, { useState } from 'react';

const AwsKeyInput = ({ onSave, onValidate }) => {
    const [accessKey, setAccessKey] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const handleSave = () => {
        onSave(accessKey, secretKey);
    };

    const handleValidate = () => {
        onValidate(accessKey, secretKey);
    };

    return (
        <div>
            <h3>Enter Your AWS Keys</h3>
            <input
                type="text"
                placeholder="AWS Access Key"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
            />
            <input
                type="text"
                placeholder="AWS Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
            />
            <button onClick={handleSave}>Save Keys</button>
            <button onClick={handleValidate}>Validate Keys</button>
        </div>
    );
};

export default AwsKeyInput;