export const UPDATE_USER = 'users:UPDATE_USER';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}