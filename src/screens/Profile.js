import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {evaluatePasswordStrength, isPasswordStrongEnough, getPasswordRules} from '../components/helper.js';
import WithCommonButtons from '../components/WithCommonButtons';

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [strengthColor, setStrengthColor] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const passwordRules = getPasswordRules(); // Retrieve password rules

  const navigate = useNavigate();
  const apiBaseUrl = process.env.REACT_APP_API_URL;
  const user = localStorage.getItem('user');
  console.log("user:", user);

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    const {passwordStrength, strengthColor} = evaluatePasswordStrength(newPassword);
    setPasswordStrength(passwordStrength);
    setStrengthColor(strengthColor);
    setErrorMessage(''); // Clear error message when user changes input
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }
    if (!isPasswordStrongEnough(password)) {
      setErrorMessage('Please use a medium or strong password.');
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: user, password: password}),
        credentials: 'include', // Include credentials in the request
      });

      console.log("change password response", response)

      if (response.ok) {
        alert('Password successfully changed!');
        navigate('/profile'); // Redirect as needed
      } else {
        alert('Password change failed!');
      }
    } catch (error) {
      console.error('Change password error:', error);
      alert('An error occurred during the password change process');
    }
  };

  return (
    <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center items-center'>
      <div className='bg-white p-10 rounded-lg shadow-md' style={{width: '25%'}}>
        <h1 className='text-2xl font-bold text-[#5f6bcb] mb-4'>Change Password</h1>
        <form onSubmit={handleSubmit}>
          {errorMessage && <div className='text-red-500 text-sm mb-2'>{errorMessage}</div>}
          <div className='flex flex-col mb-4'>
            <label className='font-semibold text-lg mb-2'>New Password</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-full h-10 p-2'
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer'
              />
            </div>
            <div className='text-xs mt-1 text-gray-600'>{passwordRules}</div>

            <div
              style={{width: '100%', backgroundColor: '#e7e9f9', height: '5px', borderRadius: '5px', marginTop: '5px'}}>
              <div style={{
                width: `${passwordStrength === 'Weak' ? '33%' : passwordStrength === 'Medium' ? '66%' : passwordStrength === 'Strong' ? '100%' : '0%'}`,
                backgroundColor: strengthColor,
                height: '5px',
                borderRadius: '5px'
              }}></div>
            </div>
            <div className='text-sm mt-2' style={{color: strengthColor}}>
              {passwordStrength}
            </div>
          </div>
          <div className='flex flex-col mb-6'>
            <label className='font-semibold text-lg mb-2'>Confirm New Password</label>
            <div className='relative flex items-center'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-full h-10 pl-2 pr-10'
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute inset-y-0 right-0 pr-3 text-gray-600 cursor-pointer'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className='text-white bg-[#4e60ff] h-10 rounded-lg px-4 shadow-md'>
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WithCommonButtons(ChangePassword);
