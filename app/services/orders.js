/* eslint-disable no-undef */
export function getOrdersHistory(token) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; PHPSESSID=e4185eb79babce143584458499; customer=NzZHSWRvMVlOR0crSXZGM2YyVStKanVEM1lXM2dZdWphUS9jMHZTa0ZHMWNpMFpPWjNsM0xwOW03cGl3clpJZFoySlNwN0VZdnlTQmhTYjRGRmZ4bWxMZXNlQ1VXOStTWllGa3R5TXVEVkppWTh2ckFGanVIY3d3NHZUY0I3WXAvMjRLaWFhVW04OGZkWVVlVThsVFlnPT06Oi2DIqWCakBkcZSQQk2aioU%3D',
    );

    var formdata = new FormData();
    formdata.append('token', token);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch('http://34.73.95.65/index.php?rt=a/account/history', requestOptions).then(response => response.json());
}
