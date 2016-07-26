import messages from "./messages";
export default function() {
    var t = this;
    t.get = messages();
    t.set = (customValidationMessages) => {
        t.get = customValidationMessages;
    };
    return t;
}
