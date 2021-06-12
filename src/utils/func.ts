export const staticPath = (path: string = '') => {
    return `..${path}`;
};

export const isEmptyObj = (pbj: object = {}) => {
    return Object.keys(pbj).length === 0 && pbj.constructor === Object;
};

export const objToArrayValues = (obj) => {
    return Object.keys(obj).map((key) => obj[key]);
}

export const pluginChat = () => {
    return `var chatbox = document.getElementById('fb-customer-chat'); chatbox.setAttribute("page_id", "108642264227705"); chatbox.setAttribute("attribution", "biz_inbox"); window.fbAsyncInit = function() { FB.init({ xfbml            : true, version          : 'v11.0' }); }; (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'))`;
};
