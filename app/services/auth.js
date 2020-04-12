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
