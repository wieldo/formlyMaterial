import angular from "./angular-fix";
import getNgModelNodes from "./get-ng-model-nodes";
import addIfNotPresent from "./add-if-not-present";
export default (template, options, attrName, attrValue, query) => {
    const node = document.createElement('div');
    const skip = options.extras && options.extras.skipNgModelAttrsManipulator;
    if (skip === true) {
        return template;
    }
    node.innerHTML = template;

    const modelNodes = getNgModelNodes(node, skip, query);
    if (!modelNodes || !modelNodes.length) {
        return template;
    }
    if (angular.isDefined(attrName) && angular.isDefined(attrValue)) {
        addIfNotPresent(modelNodes, attrName, attrValue);
    }
    return node.innerHTML;
};
