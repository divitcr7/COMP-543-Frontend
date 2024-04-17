import Cookies from 'js-cookie';

export function isLoggedIn() {
    const userEmail = Cookies.get('user');
    return userEmail;
}
