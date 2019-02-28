import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { config } from './config';
import * as $ from 'jquery';
import { MessageService } from './services/message.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(_MessageService) {
        this._MessageService = _MessageService;
        this.title = 'Pagina de Maestria';
        this.rutaMenu = config.rutaInfo;
        this.url1 = 'localhost:4200';
    }
    AppComponent.prototype.contactForm = function (form) {
        this._MessageService.sendMessage(form).subscribe(function () {
            alert("formu enviado");
        });
    };
    AppComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    AppComponent.prototype.ngOnInit = function () {
        $('.subir').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
        $('.bajar').click(function () {
            $('html, body').animate({
                scrollTop: 1050
            }, 1500);
            return false;
        });
        $(document).ready(function () {
            var myNavBar = {
                flagAdd: true,
                elements: [],
                init: function (elements) {
                    this.elements = elements;
                },
                add: function () {
                    if (this.flagAdd) {
                        for (var i = 0; i < this.elements.length; i++) {
                            document.getElementById(this.elements[i]).className += " fixed-theme";
                        }
                        this.flagAdd = false;
                    }
                },
                remove: function () {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className =
                            document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                    }
                    this.flagAdd = true;
                }
            };
            /**
             * Init the object. Pass the object the array of elements
             * that we want to change when the scroll goes down
             */
            myNavBar.init([
                'header',
                'header-container',
                'brand'
            ]);
            /**
             * Function that manage the direction
             * of the scroll
             */
            function offSetManager() {
                var yOffset = 0;
                var currYOffSet = window.pageYOffset;
                if (yOffset < currYOffSet) {
                    myNavBar.add();
                }
                else if (currYOffSet == yOffset) {
                    myNavBar.remove();
                }
            }
            /**
             * bind to the document scroll detection
             */
            window.onscroll = function (e) {
                offSetManager();
            };
            /**
             * We have to do a first detectation of offset because the page
             * could be load with scroll down set.
             */
            offSetManager();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map