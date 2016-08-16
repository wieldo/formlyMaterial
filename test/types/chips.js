import angular from "angular";
import getTemplate from "./../template.html";

describe("chips", function() {
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
            type: "chips",
            key: "chipskey",
            defaultValue: [
                "My",
                "secondary",
                "placeholder"
            ],
            templateOptions: {
                ariaLabel: "spec ariaLabel",
                className: "spec className",
                description: "spec description",
                label: "spec Label",
                mdSeparatorKeys: [
                    186,
                    188
                ],
                placeholder: "spec placeholder",
                readonly: true,
                secondaryPlaceholder: "spec secondaryPlaceholder"
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
            expect(element.attr("class")).toContain("spec className");
        });
        it("description defined", function() {
            expect(template.html()).toContain("spec description");
        });
        it("label defined", function() {
            expect(template.html()).toContain("spec Label");
        });
        it("mdSeparatorKeys to be array",function() {
            expect(elementScope.options.templateOptions["mdSeparatorKeys"]).toEqual([186,188]);
            expect(element.attr("md-separator-keys")).toBe(`options.templateOptions['mdSeparatorKeys']`);
        });
        it("placeholder to be defined", function() {
            expect(element.attr("placeholder")).toBe("spec placeholder");
        });
        it("readonly to be true", function() {
            expect(element.attr("readonly")).toBe("readonly");
        });
        it("secondaryPlaceholder to be defined", function() {
            expect(element.attr("secondary-placeholder")).toBe("spec secondaryPlaceholder");
        });
        // MODEL
        it("model key name chipskey", function() {
            expect($scope.model.chipskey).toBeDefined();
        });
        it("default model value array", function() {
            expect($scope.model.chipskey).toEqual([
                "My",
                "secondary",
                "placeholder"
            ]);
        });
    });
});
