import angular from "angular";

// load
import wrappers from "./wrappers";
import types from "./types";

import validationMessages from "./config/validation-messages";
import defaultModelAttrs from "./config/default-model-attrs";
import defaultApiCheck from "./config/default-api-check";

const moduleName = "wieldoFormlyMaterial";

angular.module(moduleName, ["ngMessages", "ngMaterial", "formly"]).config(["formlyConfigProvider","formlyApiCheck", (formlyConfigProvider, formlyApiCheck) => {
    var load = [wrappers, types];

    load.forEach((load) => {
        for (let i = 0; i < load.length; i++) {
            load[i](formlyConfigProvider);
        }
    });
    formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
        defaultApiCheck(formlyApiCheck, options);
        defaultModelAttrs(options);
        return template;
    });
}]).run(["formlyValidationMessages",(formlyValidationMessages) => {
    validationMessages(formlyValidationMessages);
}]);
export default moduleName;
