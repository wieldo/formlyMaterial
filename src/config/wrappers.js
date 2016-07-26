import _ from "underscore";
import wrappers from "../wrappers";
export default (formlyConfigProvider) => {
    _.each(wrappers, (wrapper) => {
        wrapper(formlyConfigProvider);
    });
};
