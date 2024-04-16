import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import WithCommonButtons from '../components/WithCommonButtons';
function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://your-backend-endpoint/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include other headers as required, for instance, authorization headers
                },
                body: JSON.stringify({ password }),
            });

            if (response.ok) {
                alert('Password successfully changed!');
                navigate('/profile'); // Or any other route you want to redirect to
            } else {
                alert('Password change failed!');
            }
        } catch (error) {
            console.error('Change password error:', error);
            alert('An error occurred during the password change process');
        }
    };

    return (
        <div>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <div>
                    <label>Confirm New Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <div>
                    <button type="submit">Save Change</button>
                </div>
            </form>
        </div>
    );
}

export default WithCommonButtons(ChangePassword);