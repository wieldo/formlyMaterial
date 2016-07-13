# formlyMaterial
Wieldo formly Material to build forms with angular-formly and angular material design

formly - http://angular-formly.com/  
material design 1.0.6 - https://material.angularjs.org/1.0.6/demo/input

### Working examples
https://github.com/Diabeu27/MeteorApp

### You can generate by json formly Types
- [x] checkbox
- [x] chips
- [x] datepicker
- [x] input
- [x] radio
- [x] select

### ngModelAttrs

#### default  

directive  | attribute | templateOptions
------------ | -------------
aria-label || ariaLabel
|class | className
ng-class || ngClass
ng-click || ngClick
ng-disabled || ngDisabled

#### input

directive  | attribute | templateOptions
------------ | -------------
|min| min
|max| max
|maxlength|maxlength
|minlength|minlength
md-detect-hidden||mdDetectHidden
md-maxlength||mdMaxlength
md-no-autogrow||mdNoAutogrow
ng-pattern||ngPattern
|pattern|pattern
|placeholder| placeholder
|readonly|readonly
|required|required
|step|step
|type|type

#### checkbox

directive  |   templateOptions
------------ | -------------
ng-change| ngChane
ng-checked | ngChecked
ng-false-value | ngFalseValue
md-indeterminate| mdIndeterminate (not work in this version md)
md-no-ink| mdNoInk
ng-true-value|ngTrueValue
