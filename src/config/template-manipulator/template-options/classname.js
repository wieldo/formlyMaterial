import ngModelAttrsManipulator from "./../../../helpers/ng-model-attrs-manipulator";
export default (template, options) => {
    var query = null;
    switch(options.type) {
    case "input":
        query = "md-input-container";
        break;
    }
    template = ngModelAttrsManipulator(template, options, "class", options.templateOptions.className, query);
    return template;
};
