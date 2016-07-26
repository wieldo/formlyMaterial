import angular from "./helpers/angular-fix";
// config
import wrappers from "./config/wrappers";
import types from "./config/types";
import templateManipulator from "./config/template-manipulator";
import customValidationMessages from "./config/custom-validation-messages";
// run
import validationMessages from "./run/validation-messages";

const moduleName = "wieldoFormlyMaterial";
export const wieldoFormlyMaterial = angular.module(moduleName, ["ngMessages", "ngMaterial", "formly"]);

// set config
wieldoFormlyMaterial.config(wrappers);
wieldoFormlyMaterial.config(types);
wieldoFormlyMaterial.config(templateManipulator);
wieldoFormlyMaterial.factory("customValidationMessages", customValidationMessages);
// run
wieldoFormlyMaterial.run(validationMessages);

export default moduleName;
