import {Component, OnInit} from '@angular/core';
import {config} from './config';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Pagina de Maestria';
  public rutaMenu: string;
  public url1: string;

constructor() {
  this.rutaMenu = config.rutaInfo;
  console.log('estoy en constructor de app.component.ts');
}
    scrollTOElement = (element, offsetParam?, speedParam?) => {
        const toElement = $(element);
        const focusElement = $(element);
        const offset = offsetParam * 1 || 200;
        const speed = speedParam * 1 || 500;
        $('html, body').animate({
            scrollTop: toElement.offset().top + offset
        }, speed);
        if (focusElement) {
            $(focusElement).focus();
        }
    }

 /* scroll del menu para que baje hasta cierto valor entero */
public ngOnInit() {

  $('.subir').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $('.bajar').click(function() {
    $('html, body').animate({
      scrollTop: 950
    }, 1000);
    return false;
  });
}
}
/* funcion que hace andar el cambio del menu de transparente a fondo negro */

$(document).ready(function() {
  const myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
      this.elements = elements;
    },

    add: function () {
      if (this.flagAdd) {
        for (let i = 0; i < this.elements.length; i++) {
          document.getElementById(this.elements[i]).className += ' fixed-theme';
        }
        this.flagAdd = false;
      }
    },

    remove: function () {
      for (let i = 0; i < this.elements.length; i++) {
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

    const yOffset = 0;
    const currYOffSet = window.pageYOffset;

    if (yOffset < currYOffSet) {
      myNavBar.add();
    } else if (currYOffSet == yOffset) {
      myNavBar.remove();
    }

  }

  /**
   * bind to the document scroll detection
   */
   window.onscroll = function(e) {
    offSetManager();
  };
  /**
   * We have to do a first detectation of offset because the page
   * could be load with scroll down set.
   */
   offSetManager();
   });



