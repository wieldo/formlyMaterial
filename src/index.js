import angular from "angular";
import _ from "underscore";
import wrappers from "./wrappers";
import types from "./types";
import validationMessages from "./config/validation-messages";
import defaultModelAttrs from "./config/default-model-attrs";
import defaultApiCheck from "./config/default-api-check";

const moduleName = "wieldoFormlyMaterial";

angular.module(moduleName, ["ngMessages", "ngMaterial", "formly"]).config((formlyConfigProvider, formlyApiCheck) => {
    // Set wrappers
    _.each(wrappers, (wrappers) => {
        wrappers(formlyConfigProvider);
    });
    // Set types
    _.each(types, (types) => {
        types(formlyConfigProvider);
    });
    formlyConfigProvider.templateManipulators.preWrapper.push(function(template, options, scope) {
        defaultApiCheck(formlyApiCheck, options);
        defaultModelAttrs(options);
        return template;
    });
}).run((formlyValidationMessages) => {
    validationMessages(formlyValidationMessages);
});
export default moduleName;
