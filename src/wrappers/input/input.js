import template from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "inputWrapper",
        template: template
    });
};
