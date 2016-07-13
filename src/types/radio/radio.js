import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "radio",
        defaultOptions: {
            templateOptions: {
            },
            ngModelAttrs: {
                mdNoInk: {
                    attribute: "md-no-ink"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                options: check.arrayOf(check.object).optional
            }
        })
    });
};
