export default (node, selector) => {
    const div = document.createElement('div');
    div.innerHTML = node.outerHTML;
    return div.querySelector(selector);
};
