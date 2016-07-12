import messages from "./messages";
export default (formlyValidationMessages) => {
    formlyValidationMessages.addTemplateOptionValueMessage("max",       "max",          messages.max.prefix, messages.max.suffix, "Too big");
    formlyValidationMessages.addTemplateOptionValueMessage("min",       "min",          messages.min.prefix, messages.min.suffix, "Too small");
    formlyValidationMessages.addTemplateOptionValueMessage("minlength", "minlength",    messages.minlength.prefix, messages.minlength.suffix, "Too short");
    formlyValidationMessages.addTemplateOptionValueMessage("maxlength", "maxlength",    messages.maxlength.prefix, messages.maxlength.suffix, "Too long");
    formlyValidationMessages.addTemplateOptionValueMessage("pattern", "patternValidationMessage", "This field needs to match ", "pattern", "Invalid input");
    formlyValidationMessages.messages.required = ($viewValue, $modelValue, scope) => {
        if (scope.to.label)
            return scope.to.label + " is required";
        else {
            return "This field is required";
        }
    };
};
