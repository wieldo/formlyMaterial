import templateUrl from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
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
