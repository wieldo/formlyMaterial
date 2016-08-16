import defaultModelAttrs from "./default-model-attrs";
import defaultApiCheck from "./default-api-check";
import addAttrBySpecifiedQuery from "./add-attr-by-specified-query";
export default (formlyConfigProvider, formlyApiCheck) => {
    formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
        defaultApiCheck(formlyApiCheck, options);
        defaultModelAttrs(options);
        return template;
    });
    formlyConfigProvider.templateManipulators.postWrapper.push((template, options, scope) => {
        template = addAttrBySpecifiedQuery(template, options, scope); // because wrappers are added
        return template;
    });
};
