/* eslint-disable no-undef */
export function getProductById(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c974eb2b97238720453',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`http://34.73.95.65/index.php?rt=a/product/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductResourcesByProductId(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c97927f6a4626199439',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`http://34.73.95.65/index.php?rt=a/product/resources&product_id=${id}`, requestOptions).then(
        response => response.json(),
    );
}

export function getRelatedProductsByProductId(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c97c86f90c641860172',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`http://34.73.95.65/index.php?rt=a/product/related&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductReviewsByProductId(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c97f99b9f2728619839',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    fetch(`http://34.73.95.65/index.php?rt=a/product/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getCategoryById(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c988deb11d748943743',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`http://34.73.95.65/index.php?rt=a/product/category&category_id=${id}`, requestOptions).then(
        response => response.json(),
    );
}

export function getCategories() {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch('http://34.73.95.65/index.php?rt=a/product/category&category_id=0', requestOptions).then(response =>
        response.json(),
    );
}

/**
 * @param {*} id - category id
 * @param {*} limit - limiting products count
 */
export function getProductsByCategoryId(id, limit) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185ea57dfd7249b486396936',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(
        `http://34.73.95.65/index.php?rt=a/product/filter&category_id=${id}&rows=${limit}`,
        requestOptions,
    ).then(response => response.json());
}
