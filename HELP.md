## templateOptions

#### checkbox

templateOptions | directive | type | apiCheck
--------------- | --------- | ---- | --------
label | | String | string.optional
mdIndeterminate (do not work in this version md) | md-indeterminate | Function | func.optional
mdNoInk | md-no-ink | Boolean | bool.optional
ngChane | ng-change | String | func.optional
ngChecked | ng-checked | Function | func.optional
ngFalseValue | ng-false-value | String |
ngTrueValue | ng-true-value | String |

#### chips

templateOptions | directive | type | apiCheck
--------------- | --------- | ---- | --------
deleteButtonLabel | delete-button-label | String | string.optional
deleteHint | delete-hint | String | string.optional
mdOnAdd | md-on-add | Function | func.optional
mdOnRemove | md-on-remove | Function | func.optional
mdOnSelect | md-on-select | Function | func.optional
mdRequireMatch - not tested | md-require-match | - | -
mdSeparatorKeys | md-separator-keys | Array | array.optional
mdTransformChip | md-transform-chip | String | string.optional
readonly | readonly | Boolean | bool.optional
secondaryPlaceholder | secondary-placeholder | String | string.optional

#### datepicker

templateOptions | directive or attribute | type | apiCheck
--------------- | ---------------------- | ---- | --------
mdDateFilter | md-date-filter | Function(Date): boolean | func.optional
mdMaxDate | md-max-date | Date | instanceOf(Date).optional
mdMinDate | md-min-date | Date | instanceOf(Date).optional
mdPlaceholder | md-placeholder | String | string.optional
ngChange | ng-change | Function | func.optional
ngRequired | ng-required | Boolean | bool.optional
placeholder | md-placeholder | String | string.optional
required | required | Boolean | bool.optional

#### input

templateOptions | directive | attribute | type | apiCheck
--------------- | --------- | --------- | ---- | --------
label | | String | string.optional
max | |max| number | number.optional
mdMaxlength | md-maxlength||number|number.optional
min | |min| number | number.optional
ngRequired | ng-required | Boolean | bool.optional
maxlength | |maxlength|number| number.optional
minlength | |minlength|number| number.optional
mdDetectHidden | md-detect-hidden||Boolean|bool.optional
mdNoAutogrow | md-no-autogrow||Boolean|bool.optional
ngPattern | ng-pattern||String|string.optional
pattern | |pattern|String|string.optional
placeholder | |placeholder|String|string.optional
readonly | |readonly|Boolean|bool.optional
required | |required|Boolean|bool.optional
step | |step|Number|number.optional
type | |type|String|string

#### radio
templateOptions | directive | attribute | type | apiCheck
--------------- | --------- | --------- | ---- | --------
mdNoInk | md-no-ink | | Boolean | bool.optional
ngChange | | | Array | arrayOf(check.object).optional
options | | | Array | arrayOf(check.object).optional

radio => templateOptions.options

Name | Type | directive | description
---- | ---- | --------- | -----------
className | String | | Attribute class of specified option.
disabled |	Boolean	| ng-disabled | Attribute ng-disabled on specified radio option.
label | String | | Displayed option label.
ngDisabled | Boolean | ng-disabled | Attribute ng-disabled on specified radio option.
ngValue | String | ng-value | Attribute ng-value of selected option.
value | String | ng-value | Attribute ng-value of selected option.
