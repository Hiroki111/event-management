import axios from 'axios';

export const callLogoutApi = (): void => {
    axios({
        method: 'post',
        url: '/logout'
    }).then((result) => {
        location.reload();
    });
}