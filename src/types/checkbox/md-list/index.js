import template from "./view";

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        template: template,
        name: "checkbox-md-list",
        defaultOptions: {
            templateOptions: {
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                mdListItem: check.arrayOf(check.object)
            }
        })
    });
};
