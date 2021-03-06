import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: "chips",
        template: template,
        wrapper: ["descriptionWrapper","messagesWrapper","labelWrapper"],
        defaultOptions: {
            defaultValue: [],
            templateOptions: {},
            ngModelAttrs: {
                deleteButtonLabel: {
                    attribute: "delete-button-label"
                },
                deleteHint:{
                    attribute: "delete-hint"
                },
                mdOnAdd: {
                    statement: "md-on-add"
                },
                mdOnRemove: {
                    statement: "md-on-remove"
                },
                mdOnSelect: {
                    statement: "md-on-select"
                },
                mdRequireMatch: {
                    statement: "md-require-match"
                },
                mdSeparatorKeys: {
                    bound: "md-separator-keys"
                },
                mdTransformChip: {
                    attribute: "md-transform-chip" // not tested
                },
                placeholder: {
                    attribute: "placeholder"
                },
                readonly: {
                    attribute: "readonly"
                },
                secondaryPlaceholder: {
                    attribute: "secondary-placeholder"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                deleteButtonLabel: check.string.optional,
                deleteHint: check.string.optional,
                mdOnAdd: check.func.optional,
                mdOnRemove: check.func.optional,
                mdOnSelect: check.func.optional,
                mdRequireMatch: check.func.optional,
                mdSeparatorKeys: check.array.optional,
                mdTransformChip: check.string.optional, // not tested
                placeholder: check.string.optional,
                readonly: check.bool.optional,
                secondaryPlaceholder: check.string.optional
            }
        })
    });
};
