export default (options) => {
    if (!options.ngModelAttrs) {
        options.ngModelAttrs = {};
    }
    if (options.ngModelAttrs) {
        if (!options.ngModelAttrs.ariaLabel) {
            options.ngModelAttrs.ariaLabel = {
                attribute: "aria-label"
            };
        }
        if (!options.ngModelAttrs.className) {
            options.ngModelAttrs.className = {
                attribute: "class"
            };
        }
        if (!options.ngModelAttrs.disabled) {
            options.ngModelAttrs.disabled = {
                attribute: "disabled"
            };
        }
        if (!options.ngModelAttrs.ngClass) {
            options.ngModelAttrs.ngClass = {
                statement: "ng-class"
            };
        }
        if (!options.ngModelAttrs.ngClick) {
            options.ngModelAttrs.ngClick = {
                statement: "ng-click"
            };
        }
        if (!options.ngModelAttrs.ngDisabled) {
            options.ngModelAttrs.ngDisabled = {
                bound: "ng-disabled"
            };
        }
        if (!options.ngModelAttrs.theme) {
            options.ngModelAttrs.theme = {
                attribute: "md-theme"
            };
        }
        if (!options.ngModelAttrs.mdTheme) {
            options.ngModelAttrs.mdTheme = {
                attribute: "md-theme"
            };
        }
    }
};
