import angular from "angular";
import getTemplate from "./../template.html";

describe("checkbox", function() {
    var $compile;
    beforeEach(window.module("wieldoFormlyMaterial"));
    beforeEach(inject(function(_$compile_) {
        $compile = _$compile_;
    }));

    describe("should have", function() {
        var $scope,
            template,
            element,
            elementScope;
        var fields = {
            type: "checkbox",
            key: "checkboxvalue",
            templateOptions: {
                ariaLabel: "spec ariaLabel",
                className: "spec className",
                description: "spec description",
                disabled: true,
                label: "spec Label",
                name: "spec name",
                theme: "spec theme"
            }
        };
        beforeEach(inject(function(_$rootScope_) {
            $scope = _$rootScope_.$new();
        }));
        beforeEach(() => {
            template = $compile(getTemplate)($scope);
            $scope.$apply(() => {
                $scope.fields = [fields];
            });
            element = template.find("[ng-model]");
            elementScope = angular.element(element).scope();
        });
        it("aria-label defined", function () {
            expect(element.attr("aria-label")).toBe("spec ariaLabel");
        });
        it("class defined", function () {
            expect(element.attr("class")).toBe("spec className");
        });
        it("description defined", function() {
            expect(template.html()).toContain("spec description");
        });
        it("be disabled", function() {
            expect(element.attr("disabled")).toBe("disabled");
        });
        it("label defined", function() {
            expect(template.html()).toContain("spec Label");
        });
        it("name defined", function() {
            expect(template.html()).toContain("spec name");
        });
        it("theme defined", function() {
            expect(element.attr("md-theme")).toBe("spec theme");
        });
        // MODEL
        it("model key name checkboxvalue", function() {
            expect($scope.model.checkboxvalue).toBeDefined();
        });
        it("default model value false", function() {
            expect($scope.model.checkboxvalue).toBe(false);
        });
    });

    describe("should have", function() {
        var $scope,
            template,
            element,
            elementScope,
            fields = {
                type: "checkbox",
                key: "disabled",
                defaultValue: true,
                templateOptions: {
                    mdNoInk: true,
                    ngDisabled: false,
                    mdTheme: "spec theme"
                }
            };

        beforeEach(inject(function(_$rootScope_) {
            $scope = _$rootScope_.$new();
        }));
        beforeEach(() => {
            template = $compile(getTemplate)($scope);
            $scope.$apply(function() {
                $scope.fields = [fields];
            });
            element = template.find("[ng-model]");
            elementScope = angular.element(element).scope();
        });
        it("ngDisabled to be false", function () {
            expect(element.attr("ng-disabled")).toBe(`options.templateOptions['ngDisabled']`);
            expect(elementScope.options.templateOptions["ngDisabled"]).toBe(false);
        });
        it("mdNoInk to be true", function () {
            expect(elementScope.options.templateOptions["mdNoInk"]).toBe(true);
            expect(element.attr("md-no-ink")).toBe(`${elementScope.options.templateOptions["mdNoInk"]}`);
        });
        it("mdTheme defined", function() {
            expect(element.attr("md-theme")).toBe("spec theme");
        });
    });
});
