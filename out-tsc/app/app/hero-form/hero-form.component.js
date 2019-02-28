import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Hero } from './hero';
var HeroFormComponent = /** @class */ (function () {
    function HeroFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    HeroFormComponent.prototype.newHero = function () {
        this.model = new Hero(42, '', '');
    };
    HeroFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-hero-form',
            templateUrl: './hero-form.component.html',
            styleUrls: ['./hero-form.component.css']
        })
    ], HeroFormComponent);
    return HeroFormComponent;
}());
export { HeroFormComponent };
//# sourceMappingURL=hero-form.component.js.map