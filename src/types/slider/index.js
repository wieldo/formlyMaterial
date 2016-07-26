import template from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "slider",
        wrapper: ["descriptionWrapper","labelWrapper","messagesWrapper"],
        defaultOptions: {
            templateOptions: {}
        },
        apiCheck: (check) => ({
            templateOptions: {
                max: check.number.optional,
                mdDiscrete: check.bool.optional,
                min: check.number.optional,
                showValue: check.bool.optional,
                step: check.number.optional
            }
        })
    });
};
