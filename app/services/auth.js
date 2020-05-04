/* eslint-disable no-undef */
export function signIn({ email, userName, password }) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=YmxIdGxtM1ErK0hSYlJVeUs4Y0ZRYVVSeEJFZ2U4NC9QTlRBeEsxYjh1OWpETGtPNUY4VFhFb2R4K0Q5U1lKNnoveW8rNWxmanJKQ3o0SWh4eEIyUkZJcHpXQ0V5ZTl1RHV5cm00UHNkbmlDZTYvdTVkUHQ0Y1IvRVhQVFcvWVJsUUV1c3ZQZWJ5eW5oMkpaZTZMdlJRPT06Ohbyh4PEwZytG8JnpYQvGds%3D',
    );

    const formData = new FormData();
    if (email) {
        formData.append('email', email);
    }
    if (userName) {
        formData.append('loginname', userName);
    }
    formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
    };

    return fetch('http://34.73.95.65/index.php?rt=a/account/login', requestOptions).then(response => response.json());
}

export function signOut(token) {
    const myHeaders = new Headers();
    myHeaders.append('Cookie', 'language=en; currency=USD; PHPSESSID=e4185e936502dc70f973659032');

    const formData = new FormData();
    formData.append('token', token);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow',
    };

    return fetch('http://34.73.95.65/index.php?rt=a/account/logout', requestOptions).then(response => response.json());
}

export function restorePassword(email) {
    return Promise.reject(email);
}

export function checkTokenIsAlive(token) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=QzhYUmlvYmtHejIwWDhWd1NPS0t5anExZ3dDMTJLZ2ZlS0ZkSXd1aTF1V2I1UjQ0cllXQkhKcU9reEVWbmtxeE5pV1VzMUNkb2ZuZkt2ZkQ2QVZ3OGtsSFhjZGlGd0xZb0dRanZ4QU9ObXkyUWIzQUEza3dRa2EwdGxMVlVYYUp1Ykt6ZVp2cDBoV3JaMmV2NW9HZjJnPT06OtKXXdnMbNtCIgsmifFI9s0%3D; PHPSESSID=e4185eb049cfab3b438271827',
    );

    const formdata = new FormData();
    formdata.append('token', token);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch('http://34.73.95.65/index.php?rt=a/account/login', requestOptions).then(response => response.json());
}
