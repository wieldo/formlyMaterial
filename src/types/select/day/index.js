export default (formlyConfigProvider) => {
    var days = _.range(1, 32).map((val) => {
        return {
            name: val,
            value: val
        };
    });
    formlyConfigProvider.setType({
        name: "select-day",
        extends: "select",
        defaultOptions: {
            templateOptions: {
                label: "Day",
                options: days
            }
        }
    });
};
