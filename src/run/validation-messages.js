export default (formlyValidationMessages, customValidationMessages) => {
    var messages = customValidationMessages.get;
    formlyValidationMessages.addTemplateOptionValueMessage("max",       "max",          messages.max.prefix, messages.max.suffix, "Too big");
    formlyValidationMessages.addTemplateOptionValueMessage("minlength", "minlength",    messages.minlength.prefix, messages.minlength.suffix, "Too short");
    formlyValidationMessages.addTemplateOptionValueMessage("min",       "min",          messages.min.prefix, messages.min.suffix, "Too small");
    formlyValidationMessages.addTemplateOptionValueMessage("maxlength", "maxlength",    messages.maxlength.prefix, messages.maxlength.suffix, "Too long");
    formlyValidationMessages.addTemplateOptionValueMessage("md-maxlength", "mdMaxlength",    messages.mdmaxlength.prefix, messages.mdmaxlength.suffix, "Too long");
    formlyValidationMessages.addTemplateOptionValueMessage("pattern", "patternValidationMessage", "This field needs to match ", "pattern", "Invalid input");
    formlyValidationMessages.messages.required = ($viewValue, $modelValue, scope) => {
        if (scope.to.label)
            return scope.to.label + " is required";
        else {
            return "This field is required";
        }
    };
};
