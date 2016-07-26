import template from "./view.html";
import "./style.scss";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: "datepicker",
        template: template,
        wrapper: ["descriptionWrapper","messagesWrapper","labelWrapper"],
        defaultOptions: {
            templateOptions: {},
            ngModelAttrs: {
                mdDateFilter: {
                    bound: "md-date-filter"
                },
                mdMaxDate: {
                    bound: "md-max-date"
                },
                mdMinDate: {
                    bound: "md-min-date"
                },
                mdPlaceholder: {
                    attribute: "md-placeholder"
                },
                ngChange: {
                    statement: "ng-change"
                },
                ngRequired: {
                    attribute: "ng-required"
                },
                placeholder: {
                    attribute: "md-placeholder"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                mdDateFilter: check.func.optional,
                mdMaxDate: check.instanceOf(Date).optional,
                mdMinDate: check.instanceOf(Date).optional,
                mdPlaceholder: check.string.optional,
                ngChange: check.func.optional,
                ngRequired: check.bool.optional,
                required: check.bool.optional
            }
        })
    });
};
