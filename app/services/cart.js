/* eslint-disable no-undef */
export function getProductsInCart(token) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; PHPSESSID=e4185eb6addb55092173978490; customer=b1hFMlBwU3gvVGpoV1NaSDdyem5HMy9XMWFjZmg5NS8xa2hWVGUvamUvc3lUWWE4TnRpYnN2M2dROXRiWmVoVE5qMEFpUlZ4TVFOS0EwWUIzOWdoREpZeWl3L09iakZpb0JUUDl2M1dDZFNRK0NHR1EvejNFempOOTByM1BWOFp2b1lFZ3hSWGkyRy9UMXl0b0hVQmN3PT06Oje6LQBz37tX1Q6yr5DLB7g%3D',
    );

    const formdata = new FormData();
    formdata.append('token', token);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch('http://34.73.95.65/index.php?rt=a/checkout/cart', requestOptions).then(response => response.json());
}

export function addProductToCart({ token, productId, quantity = 1 }) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=NldCYjNNekxNVXRJdHd3c3BTcmUyZ3FQbGM5MmdnNzEvK0VnaEwvK0ZhZHg3ZmNEeXpSY002MXhpbzhGVmtzbHBObzFTQjdJeDVOcjBRV3ZqOGhDOTRnVnZONm5sby9vKzBHbGJoVWVpUVp1NjlGRlZWdzdJTG55c2xLRXVscW5aSnhqSGpKNEl3R2lTZGxEei9peVd3PT06OkRwvNfgLZYZwN6QfExxCEQ%3D; PHPSESSID=e4185eaf0ed70fa3c149341295',
    );

    const formdata = new FormData();
    formdata.append('token', token);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch(
        `http://34.73.95.65/index.php?rt=a/checkout/cart&product_id=${productId}&quantity=${quantity}`,
        requestOptions,
    ).then(response => response.json());
}
