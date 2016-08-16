import angular from "./../angular-fix";
export default (nodes, attr, val) => {
    angular.forEach(nodes, node => {
        if (attr != "innerHTML") {
            if (!node.getAttribute(attr)) {
                node.setAttribute(attr, val);
            }
        }else {
            node.innerHTML = val;
        }
    });
};
