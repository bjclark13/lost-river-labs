{
    class LostRiverRidgeLabs {
    constructor() {
        this.addToggleListener();
        this.handleStickyScroll();
    }

    handleStickyScroll = () => {
        let $header = document.querySelector('header');
        let $main = document.querySelector('main');

        window.addEventListener('scroll', () => {
            if ( window.scrollY > ( window.outerHeight  ) ) {
               $header.classList.add('sticky');
               $main.classList.add('sticky');

            } else {
               $header.classList.remove('sticky');
               $main.classList.remove('sticky');
            }
        })
    }

    addToggleListener = () => {
        document.querySelectorAll('.toggle').forEach( ($element) => {
            $element.addEventListener('click', this.handleToggle);
        })
    }

    handleToggle = (event) => {
        event.preventDeafult();

        let selector = event.target.dataset.toggle;

        document.querySelectorAll(selector).forEach( ($element) => {
           $element.classList.toggle('hidden');
        })
    }
}
    new LostRiverRidgeLabs();
}
