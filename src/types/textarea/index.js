import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "textarea",
        wrapper: ["descriptionWrapper","messagesWrapper","labelWrapper","inputWrapper"],
        defaultOptions: {
            templateOptions: {},
            ngModelAttrs: {
                mdMaxlength: {
                    attribute: "md-maxlength"
                },
                mdSelectOnFocus: {
                    attribute: "md-select-on-focus"
                },
                ngRequired: {
                    attribute: "ng-required"
                }
            }
        },
        // The rest of api check is in config/default-api-check
        apiCheck: (check) => ({
            templateOptions: {
                mdMaxlength: check.number.optional,
                mdSelectOnFocus: check.bool.optional,
                rows: check.number.optional
            }
        })
    });
};
