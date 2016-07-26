import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "radio",
        wrapper: ["descriptionWrapper","labelWrapper"],
        defaultOptions: {
            templateOptions: {},
            ngModelAttrs: {
                mdNoInk: {
                    attribute: "md-no-ink"
                },
                ngChange: {
                    bound: "ng-change"
                }
            },
            expressionProperties: {
                "templateOptions.ngDisabled": ($viewValue, $modelValue, scope) => {
                    if (scope.options.templateOptions.disabled !== undefined) {
                        if (scope.options.templateOptions.options) {
                            _.each(scope.options.templateOptions.options,(option) => {
                                option['disabled'] = scope.options.templateOptions.disabled;
                            });
                        }
                        return scope.options.templateOptions.disabled;
                    }
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                mdNoInk: check.bool.optional,
                options: check.arrayOf(check.object).optional
            }
        })
    });
};
