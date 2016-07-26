export default (formlyConfigProvider) => {
    var month = (number) => {
        var M;
        switch(number) {
        case 1:  M = 'January';  break;
        case 2:  M = 'February'; break;
        case 3:  M = 'March';    break;
        case 4:  M = 'April';    break;
        case 5:  M = 'May';      break;
        case 6:  M = 'June';     break;
        case 7:  M = 'July';     break;
        case 8:  M = 'August';   break;
        case 9:  M = 'September';break;
        case 10: M = 'October';  break;
        case 11: M = 'November'; break;
        case 12: M = 'December'; break;
        }
        return M;
    };

    var months = _.range(1, 13).map((val) => {
        return {
            name: month(val),
            value: val
        };
    });
    formlyConfigProvider.setType({
        name: "select-month",
        extends: "select",
        defaultOptions: {
            templateOptions: {
                label: "Month",
                options: months
            }
        }
    });
};
