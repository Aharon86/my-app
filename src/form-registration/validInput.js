export default {
    sign_up: {
        name: {valid: false, err: 'The name must have at least 1 letter'},
        surname: {valid: false, err: 'The surname must have at least 1 letter'},
        email: {valid: false, err: 'Pl. enter a correct email ex."exam@ex.com"'},
        username: {valid: false, err: 'The username must have at least 1 letteraa'},
        password: {valid: false, err: 'Password must be from 6 to 14 characters'},
        confirm_password: {valid: false, err: 'Please enter same password'}
    },
    sign_in: {
        username: {valid: false, err: 'The username must have at least 1 letteraa'},
        password: {valid: false, err: 'Password must be from 6 to 14 characters'}
    }
}