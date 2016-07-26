import template from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "switch",
        wrapper: ["descriptionWrapper","labelWrapper","messagesWrapper"],
        defaultOptions: {
            templateOptions: {
                disabled: false,
                ngDisabled: false
            },
            ngModelAttrs: {
                ngFalseValue: {
                    attribute: "ng-false-value"
                },
                mdNoInk: {
                    attribute: "md-no-ink"
                },
                ngTrueValue: {
                    attribute: "ng-true-value"
                },
                ngChange: {
                    statement: "ng-change"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                mdNoInk: check.bool.optional,
                ngChange: check.func.optional
            }
        })
    });
};
