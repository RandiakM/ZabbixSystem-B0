// frontend/src/pages/Settings.js
import React, { useState } from 'react';
import axios from 'axios';
import AwsKeyInput from '../components/AwsKeyInput';

const Settings = () => {
    const userId = localStorage.getItem('userId'); // Read userId from localStorage
    const [awsKeysSaved, setAwsKeysSaved] = useState(false);

    const handleSaveKeys = async (accessKey, secretKey) => {
        try {
            await axios.post('http://localhost:5001/api/aws/keys', { userId, accessKey, secretKey });
            setAwsKeysSaved(true);
            alert('AWS keys saved successfully!');
        } catch (error) {
            alert('Failed to save AWS keys. Please try again.');
        }
    };

    const handleValidateKeys = async (accessKey, secretKey) => {
        try {
            const response = await axios.post('http://localhost:5001/api/aws/validate', { accessKey, secretKey });
            alert(`AWS keys are valid: ${response.data.identity.Arn}`);
        } catch (error) {
            alert('Invalid AWS keys. Please check your keys and try again.');
        }
    };

    return (
        <div>
            <h1>User Settings</h1>
            <p>Manage your AWS account integration here.</p>

            {/* AWS Key Input Section */}
            <h2>AWS Account Integration</h2>
            <AwsKeyInput
                onSave={handleSaveKeys}
                onValidate={handleValidateKeys}
            />

            {/* Next Steps (Architecture Selection) */}
            {awsKeysSaved && (
                <div>
                    <h2>Next Steps</h2>
                    <p>Proceed to select your Zabbix architecture:</p>
                    <button onClick={() => alert('Redirect to architecture selection page')}>
                        Select Architecture
                    </button>
                </div>
            )}
        </div>
    );
};

export default Settings;