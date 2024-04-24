export const evaluatePasswordStrength = (password) => {
    let strength = 0;
    const minLength = 6;
    const maxLength = 15;

    if (password.length >= minLength && password.length <= maxLength) strength++;
    if (password.match(/[a-z]+/)) strength++;  // Contains lower case
    if (password.match(/[A-Z]+/)) strength++;  // Contains upper case
    if (password.match(/[0-9]+/)) strength++;  // Contains digits
    if (password.match(/[\W_]+/)) strength++;  // Contains special characters

    let passwordStrength = '';
    let strengthColor = '';

    switch (strength) {
        case 1:
            passwordStrength = 'Very Weak';
            strengthColor = 'darkred';
            break;
        case 2:
            passwordStrength = 'Weak';
            strengthColor = 'red';
            break;
        case 3:
            passwordStrength = 'Medium';
            strengthColor = 'orange';
            break;
        case 4:
            passwordStrength = 'Strong';
            strengthColor = 'lightgreen';
            break;
        case 5:
            passwordStrength = 'Very Strong';
            strengthColor = 'green';
            break;
        default:
            passwordStrength = 'Invalid';
            strengthColor = 'grey';
    }

    return { passwordStrength, strengthColor };
};

export const isPasswordStrongEnough = (password) => {
    const { passwordStrength } = evaluatePasswordStrength(password);
    return passwordStrength === 'Medium' || passwordStrength === 'Strong' || passwordStrength === 'Very Strong';
};

export const getPasswordRules = () => {
    return "Password must be 6-15 characters long, include uppercase and lowercase letters, a number, and a special character.";
};
