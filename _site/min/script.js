"use strict";

{
  class LostRiverRidgeLabs {
    constructor() {
      this.handleStickyScroll = () => {
        var $header = document.querySelector('header');
        var $main = document.querySelector('main');

        if (!$header.classList.contains('always-sticky')) {
          window.addEventListener('scroll', () => {
            if (window.scrollY > window.outerHeight) {
              $header.classList.add('sticky');
              $main.classList.add('sticky');
            } else {
              $header.classList.remove('sticky');
              $main.classList.remove('sticky');
            }
          });
        }
      };

      this.addToggleListener = () => {
        document.querySelectorAll('.toggle').forEach($element => {
          $element.addEventListener('click', this.handleToggle);
        });
      };

      this.handleToggle = event => {
        event.preventDefault();
        var selector = event.target.dataset.toggle;
        document.querySelectorAll(selector).forEach($element => {
          $element.classList.toggle('hidden');
        });
      };

      this.addToggleListener();
      this.handleStickyScroll();
    }

  }

  new LostRiverRidgeLabs();
}