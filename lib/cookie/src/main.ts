import cookie from 'js-cookie';

if (window.$) {
    Object.assign(window.$, {cookie});
}

export default cookie;
