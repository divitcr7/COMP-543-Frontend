import Cookies from 'js-cookie';

export function isLoggedIn() {
    const userEmail = Cookies.get('user');
    console.log("auth.js Cookie:", userEmail)
    return userEmail;
}
