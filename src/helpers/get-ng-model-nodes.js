import angular from "./angular-fix";
import getNgModelNodesFallback from "./get-ng-model-nodes-fallback";
// Utility functions
export default (node, skip, query) => {
    const selectorNot = angular.isString(skip) ? `:not(${skip})` : '';
    const skipNot = ':not([formly-skip-ng-model-attrs-manipulator])';
    if (!query)
        query = `[ng-model]${selectorNot}${skipNot}, [data-ng-model]${selectorNot}${skipNot}`;
    try {
        return node.querySelectorAll(query);
    } catch (e) {
        //this code is needed for IE8, as it does not support the CSS3 ':not' selector
        //it should be removed when IE8 support is dropped
        return getNgModelNodesFallback(node, skip);
    }
};
