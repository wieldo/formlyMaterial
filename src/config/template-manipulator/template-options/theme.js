import ngModelAttrsManipulator from "./../../../helpers/ng-model-attrs-manipulator";
export default (template, options) => {
    if (options.templateOptions.theme || options.templateOptions.mdTheme) {
        var query = null;
        switch(options.type) {
        case "input":
        case "textarea":
            query = "md-input-container";
            break;
        }
        template = ngModelAttrsManipulator(template, options, "md-theme", options.templateOptions.theme || options.templateOptions.mdTheme, query);
    }
    return template;
};
