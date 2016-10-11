import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "select",
        wrapper: ["descriptionWrapper","labelWrapper","messagesWrapper","inputWrapper"],
        defaultOptions: {
            templateOptions: {},
            ngModelAttrs: {
                disabled: {
                    attribute: "ng-disabled"
                },
                mdOnOpen: {
                    statement: "md-on-open"
                },
                mdOnClose: {
                    statement: "md-on-close"
                },
                mdContainerClass: {
                    attribute: "md-container-class"
                },
                ngRequired: {
                    bound: "ng-required"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                groups: check.arrayOf(check.object).optional,
                mdContainerClass: check.string.optional,
                mdOnOpen: check.func.optional,
                mdOnClose: check.func.optional,
                options: check.arrayOf(check.object).optional
            }
        })
    });
};
