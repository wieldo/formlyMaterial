export default (formlyApiCheck, options) => {
    formlyApiCheck.warn(
        formlyApiCheck.shape({
            ariaLabel: formlyApiCheck.string.optional,
            className: formlyApiCheck.string.optional,
            disabled: formlyApiCheck.bool.optional,
            label: formlyApiCheck.string.optional,
            ngClass: formlyApiCheck.func.optional,
            ngClick: formlyApiCheck.func.optional,
            ngDisabled: formlyApiCheck.bool.optional,
            placeholder: formlyApiCheck.string.optional,
            theme: formlyApiCheck.string.optional
        }), options.templateOptions
    );
};
