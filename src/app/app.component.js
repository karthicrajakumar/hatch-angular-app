"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n    <nav class=\"navbar fixed-top\" id=\"navbar1\">\n        <a class=\"navbar-brand\" href=\"#\" id=\"1\">\n            <img src=\"/assets/images/logo.png\" width=\"158.7\" height=\"38\" alt=\"\">\n        </a>\n\n        <div class=\"open\" id=\"sidebar\">\n            <span class=\"cls\"></span>\n            <span>\n\t\t<ul class=\"sub-menu \" >\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/home\"  routerLinkActive=\"menu\">Introduction</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/our-story\"  routerLinkActive=\"menu\">Our Story</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/what-we-do\"  routerLinkActive=\"menu\">What We Do</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/code-of-school\"  routerLinkActive=\"menu\">Code of School</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/built-by-hatch\"  routerLinkActive=\"menu\">Built By Hatch</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/news\"  routerLinkActive=\"menu\">News Ahem!</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/contact\"  routerLinkActive=\"menu\">Contact</a>\n\t\t\t</li>\n           <br>\n           <div class=\"<col-lg-4></col-lg-4>\">\n               <a class=\"Linkedin\" >Linkedin </a>\n           <a class=\"facebook\" >Facebook </a>\n           <a class=\"medium\" >Medium </a>\n            <a class=\"dribble\" >Dribble </a>\n            <a class=\"instagram\" >Instagram </a>\n            <a class=\"twitter\" >Twitter </a>\n           </div>\n           \n        </ul>\n\t</span>\n            <span class=\"cls\"></span>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        directives: [router_1.ROUTER_DIRECTIVES]
    })
], AppComponent);
exports.AppComponent = AppComponent;
