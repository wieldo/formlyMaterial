import template from "./view.html";
import addCheckedClassName from "../../helpers/add-checked-classname";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "checkbox",
        wrapper: ["descriptionWrapper","labelWrapper"],
        defaultOptions: {
            defaultValue: false, // because model is available when value is set TODO: set defaultValue as ngFalseValue
            templateOptions: {},
            // if hideExpression is set then it is not checked when appear
            expressionProperties: {
                "templateOptions.className": ($viewValue, $modelValue, scope) => {
                    return addCheckedClassName($viewValue,scope).to.className;
                }
            },
            ngModelAttrs: {
                ngChange: {
                    attribute: "ng-change"
                },
                ngChecked: {
                    statement: "ng-checked"
                },
                ngFalseValue: {
                    attribute: "ng-false-value"
                },
                mdIndeterminate: {
                    statement: "md-indeterminate"
                },
                mdNoInk: {
                    attribute: "md-no-ink"
                },
                ngTrueValue: {
                    attribute: "ng-true-value"
                }
            }
        },
        // The rest of api check is in config/default-api-check
        apiCheck: (check) => ({
            templateOptions: {
                mdIndeterminate: check.func.optional,
                mdNoInk: check.bool.optional,
                ngChange: check.string.optional,
                ngChecked: check.func.optional
            }
        })
    });
};
