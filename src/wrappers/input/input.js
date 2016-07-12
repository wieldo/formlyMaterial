import templateUrl from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "inputWrapper",
        templateUrl: templateUrl
    });
};
