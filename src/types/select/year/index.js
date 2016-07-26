export default (formlyConfigProvider) => {
    var years = _.range(new Date().getFullYear(), 1899, -1).map((val) => {
        return {
            name: val,
            value: val
        };
    });
    formlyConfigProvider.setType({
        name: "select-year",
        extends: "select",
        defaultOptions: {
            templateOptions: {
                label: "Year",
                options: years
            }
        }
    });
};
