import templateUrl from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "labelWrapper",
        templateUrl: templateUrl
    });
};
