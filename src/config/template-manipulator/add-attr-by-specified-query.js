import ngModelAttrsManipulator from "../../helpers/ng-model-attrs-manipulator";
export default (template, options) => {
    var query = null;
    if (options.templateOptions) {
        if (options.templateOptions.theme || options.templateOptions.mdTheme) {
            query = null;
            switch(options.type) {
            case "input":
            case "textarea":
                query = "md-input-container";
                break;
            }
            template = ngModelAttrsManipulator(template, options, "md-theme", options.templateOptions.theme || options.templateOptions.mdTheme, query);
        }
        if (options.templateOptions.className) {
            query = null;
            switch(options.type) {
            case "input":
                query = "md-input-container";
                break;
            }
            template = ngModelAttrsManipulator(template, options, "class", options.templateOptions.className, query);
        }
        if (options.type == "slider") {
            if (options.templateOptions.mdDiscrete) {
                template = ngModelAttrsManipulator(template, options, "md-discrete", options.templateOptions.mdDiscrete, query);
            }
        }
        if (options.type == "select") {
            if (options.templateOptions.multiple) {
                template = ngModelAttrsManipulator(template, options, "multiple", options.templateOptions.multiple, query);
            }
        }
    }
    return template;
};
