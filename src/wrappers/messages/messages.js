import templateUrl from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: "messagesWrapper",
        templateUrl: templateUrl
    });
};
