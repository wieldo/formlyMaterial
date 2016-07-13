import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "select",
        wrapper: ["labelWrapper","messagesWrapper","inputWrapper"],
        defaultOptions: {
            templateOptions: {
                theme: "default"
            },
            ngModelAttrs: {
                disabled: {
                    attribute: "ng-disabled"
                },
                ariaLabel: {
                    attribute: 'aria-label'
                },
                mdOnOpen: {
                    statement: "md-on-open"
                },
                mdOnClose: {
                    statement: "md-on-close"
                },
                mdContainerClass: {
                    attribute: "md-container-class"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                ariaLabel: check.string.optional,
                disabled: check.bool.optional,
                groups: check.arrayOf(check.object).optional,
                label: check.string.optional,
                mdContainerClass: check.string.optional,
                mdOnOpen: check.func.optional,
                mdOnClose: check.func.optional,
                options: check.arrayOf(check.object).optional,
                placeholder: check.string.optional,
                required: check.bool.optional,
                theme: check.string
            }
        })
    });
};
