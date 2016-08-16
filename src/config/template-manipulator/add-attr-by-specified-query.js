import ngModelAttrsManipulator from "../../helpers/ng-model-attrs-manipulator";
import theme from "./template-options/theme";
import classname from "./template-options/classname";
export default (template, options) => {
    var query = null;
    if (options.templateOptions) {
        template = theme(template, options);
        template = classname(template, options);
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
