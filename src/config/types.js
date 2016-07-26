import _ from "underscore";
import types from "../types";
export default (formlyConfigProvider) => {
    _.each(types, (type) => {
        type(formlyConfigProvider);
    });
};
