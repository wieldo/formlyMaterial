export default ($viewValue, scope) => {
    if ($viewValue === true || scope.to.ngTrueValue == `'${$viewValue}'`){
        if (scope.to.className != undefined){
            if (scope.to.className.indexOf("md-checked") == -1)
                scope.to.className = scope.to.className+" md-checked";
        }
        else scope.to.className = scope.to.className+" md-checked";
    }
    else {
        if (scope.to.className != undefined)
            scope.to.className = scope.to.className.replace(" md-checked", "");
    }
    return scope;
};
