import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "input",
        wrapper: ["descriptionWrapper","messagesWrapper","labelWrapper","inputWrapper"],
        defaultOptions: {
            templateOptions: {
                type: "text",
                disabled: false,
                required: false
            },
            ngModelAttrs: {
                mdDetectHidden: {
                    attribute: "md-detect-hidden"
                },
                mdMaxlength: {
                    bound: "md-maxlength"
                },
                mdNoAutogrow: {
                    attribute: "md-no-autogrow"
                },
                ngPattern: {
                    attribute: "ng-pattern"
                },
                pattern: {
                    attribute: "ng-pattern"
                },
                readonly: {
                    attribute: "readonly"
                },
                step: {
                    attribute: "step"
                }
            }
        },
        // The rest of api check is in config/default-api-check
        apiCheck: (check) => ({
            templateOptions: {
                min: check.number.optional,
                max: check.number.optional,
                maxlength: check.number.optional,
                minlength: check.number.optional,
                mdDetectHidden: check.bool.optional,
                mdMaxlength: check.number.optional,
                mdNoAutogrow: check.bool.optional,
                ngPattern: check.string.optional,
                pattern: check.string.optional,
                placeholder: check.string.optional,
                readonly: check.bool.optional,
                required: check.bool,
                step: check.number.optional,
                type: check.string
            }
        })
    });
};
