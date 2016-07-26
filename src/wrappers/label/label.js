import template from "./view.html";
import "./style.scss";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "labelWrapper",
        template: template
    });
};
