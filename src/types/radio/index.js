import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "radio",
        wrapper: ["descriptionWrapper","labelWrapper"],
        defaultOptions: {
            templateOptions: {
                disabled: false,
                ngDisabled: false
            },
            ngModelAttrs: {
                mdNoInk: {
                    attribute: "md-no-ink"
                },
                ngChange: {
                    bound: "ng-change"
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
