import templateUrl from "./view";
import "./style.scss";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "descriptionWrapper",
        templateUrl: templateUrl
    });
};
