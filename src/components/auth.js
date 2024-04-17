import Cookies from 'js-cookie';

export function isLoggedIn() {
    const userEmail = Cookies.get('user');
    console.log('userEmail', userEmail)
    return userEmail && userEmail !== 'guest';
}
