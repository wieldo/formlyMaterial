# formlyMaterial
Wieldo formly Material to build forms with angular-formly and angular material design

formly - http://angular-formly.com/  
material design 1.0.6 - https://material.angularjs.org/1.0.6/demo/input

### How to install
```
npm install wieldoformlymaterial
```

### Working examples -- in progress
https://github.com/Diabeu27/MeteorApp

### You can generate by json formly Types
- [x] checkbox
- [x] chips
- [x] datepicker
- [x] input
- [x] radio
- [x] select

### templateOptions


#### default  

directive | attribute | type | templateOptions | apiCheck
--------- | --------- | ---- |---------------- | --------
aria-label || String | ariaLabel | string.optional
|class | String |className | string.optional
ng-class || Function | ngClass | func.optional
ng-click || Function | ngClick | func.optional
ng-disabled || Boolean | ngDisabled | bool.optional
md-theme | theme | String | theme | string.optional

#### checkbox

directive | type | templateOptions | apiCheck
--------- | ---- |---------------- | --------
ng-change | String |ngChane | func.optional
ng-checked | Function | ngChecked | func.optional
ng-false-value | String | ngFalseValue | string.optional
md-indeterminate | Function | mdIndeterminate (not work in this version md) | func.optional
md-no-ink | Boolean | mdNoInk | bool.optional
ng-true-value | String | ngTrueValue

#### chips

directive | type | templateOptions | apiCheck
--------- | ---- | --------------- | --------
delete-button-label | String | deleteButtonLabel | string.optional
delete-hint | String | deleteHint | string.optional
md-on-add | Function | mdOnAdd | func.optional
md-on-remove | Function | mdOnRemove | func.optional
md-on-select | Function | mdOnSelect | func.optional
md-require-match | - | mdRequireMatch - not tested | -
md-separator-keys | Array | mdSeparatorKeys | array.optional
md-transform-chip | String | mdTransformChip | string.optional
readonly | readonly | Boolean | bool.optional
secondary-placeholder | String | secondaryPlaceholder | string.optional

#### datepicker

directive or attribute | type | templateOptions | apiCheck
---------------------- | ---- | --------------- | --------
md-date-filter | Function | mdDateFilter | func.optional
md-max-date | Date | mdMaxDate | instanceOf(Date).optional
md-min-date | Date | mdMinDate | instanceOf(Date).optional
md-placeholder | String | mdPlaceholder | string.optional
ng-change | Function | ngChange | func.optional
ng-required | Boolean | ngRequired | bool.optional
required | Boolean | required | bool.optional

#### input

directive | attribute | type | templateOptions | apiCheck
--------- | --------- | ---- | --------------- | --------
|min| number | min | number.optional
|max| number | max | number.optional
|maxlength|number| maxlength | number.optional
|minlength|number| minlength | number.optional
md-detect-hidden||Boolean|mdDetectHidden | bool.optional
md-maxlength||number|mdMaxlength | number.optional
md-no-autogrow||Boolean|mdNoAutogrow | bool.optional
ng-pattern||String|ngPattern | string.optional
|pattern|String|pattern | string.optional
|placeholder|String|placeholder | string.optional
|readonly|Boolean|readonly | bool.optional
|required|Boolean|required | bool.optional
|step|Number|step | number.optional
|type|String|type | string

#### radio
directive | attribute | type | templateOptions | apiCheck
--------- | --------- | ---- | --------------- | --------

#### select
directive | attribute | type | templateOptions | apiCheck
--------- | --------- | ---- | --------------- | --------
