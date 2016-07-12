import templateUrl from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: "chips",
        templateUrl: templateUrl,
        wrapper: ["descriptionWrapper","messagesWrapper"],
        defaultOptions: {
            defaultValue: [],
            templateOptions: {
                disabled: false
            },
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
                    attribute: "md-transform-chip"
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
                mdOnSelect: check.func.optional,
                mdSeparatorKeys: check.array.optional,
                readonly: check.bool.optional,
                secondaryPlaceholder: check.string.optional
            }
        })
    });
};
