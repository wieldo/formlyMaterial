import angular from "./angular-fix";
import nodeMatches from "./node-matches";
export default (node, skip) => {
    const allNgModelNodes = node.querySelectorAll('[ng-model], [data-ng-model]');
    const matchingNgModelNodes = [];

    //make sure this array is compatible with NodeList type by adding an 'item' function
    matchingNgModelNodes.item = function(i) {
        return this[i];
    };

    for (let i = 0; i < allNgModelNodes.length; i++) {
        const ngModelNode = allNgModelNodes[i];
        if (!ngModelNode.hasAttribute('formly-skip-ng-model-attrs-manipulator') &&
        !(angular.isString(skip) && nodeMatches(ngModelNode, skip))) {
            matchingNgModelNodes.push(ngModelNode);
        }
    }

    return matchingNgModelNodes;
};
