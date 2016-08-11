
# formlyMaterial

[![GitHub version](https://badge.fury.io/gh/wieldo%2FformlyMaterial.svg)](https://badge.fury.io/gh/wieldo%2FformlyMaterial)
[![Build Status](https://travis-ci.org/wieldo/formlyMaterial.svg?branch=master)](https://travis-ci.org/wieldo/formlyMaterial)
[![GitHub issues](https://img.shields.io/github/issues/wieldo/formlyMaterial.svg)](https://github.com/wieldo/formlyMaterial/issues)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wieldo/formlyMaterial/master/LICENSE)

Wieldo formly Material to build forms with angular-formly and angular material design


formly - http://angular-formly.com/  
material design 1.0.6 - https://material.angularjs.org/1.0.6/demo/input

---

### How to install
```
npm install wieldoformlymaterial
```

### npm
https://www.npmjs.com/package/wieldoformlymaterial


### Demo -- in progress
https://github.com/wieldo/meteor-app

### You can generate by json formly Types
- [x] Checkbox
- [x] Chips
- [x] Datepicker
- [x] Input
- [x] Radio
- [x] Select
- [x] Slider
- [x] Switch
- [x] Textarea

Custom
- [x] Select Day
- [x] Select Month
- [x] Select Year

### templateOptions
#### default  

directive | attribute | type | templateOptions | apiCheck
--------- | --------- | ---- |---------------- | --------
aria-label || String | ariaLabel | string.optional
|class | String |className | string.optional
|| Boolean | disabled | bool.optional
md-theme || String | theme | string.optional
ng-class || Function | ngClass | func.optional
ng-click || Function | ngClick | func.optional
ng-disabled || Boolean | ngDisabled | bool.optional
md-theme || String | mdTheme | string.optional

[Click](https://github.com/wieldo/formlyMaterial/blob/master/HELP.md) here to go for more information about templateOptions

## Example
If you want to create simple signup form you can write javascript code below
~~~javascript
fields = [
    {
        type: "input",
        key: "email",
        templateOptions: {
            type: "email",
            label: "Enter your email address",
            pattern: "/^.+@.+\..+$/",
            required: true
        },
        validation: {
            messages: {
                pattern: 'to.label + " pattern " + to.pattern + " is not correct"'
            }
        }
    },
    {
        type: "input",
        key: "password",
        templateOptions: {
            type: "password",
            label: "Enter your password",
            required: true
        }
    },
    {
        type: "input",
        key: "firstname",
        templateOptions: {
            label: "Enter your firstname",
            required: true
        }
    },
    {
        type: "input",
        key: "lastname",
        templateOptions: {
            type: "text",
            label: "Enter your lastname",
            required: true
        }
    }
]
~~~

with html in your view
~~~html
<form name="form" ng-submit="onSubmit()">
    <formly-form model="model" fields="fields" options="options">
        <md-button type="submit" class="md-primary md-raised">
            signup
        </md-button>
    </formly-form>
</form>
~~~



## Donate
If you want to help our developers create software donate please.  

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6)
