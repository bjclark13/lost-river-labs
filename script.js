{
    class LostRiverRidgeLabs {
    constructor() {
        this.addToggleListener();
        this.handleStickyScroll();
    }

    handleStickyScroll = () => {
        let $header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if ( window.scrollY > ( window.outerHeight  ) ) {
               $header.classList.add('sticky');
            } else {
               $header.classList.remove('sticky');
            }
        })
    }

    addToggleListener = () => {
        document.querySelectorAll('.toggle').forEach( ($element) => {
            $element.addEventListener('click', this.handleToggle);
        })
    }

    handleToggle = (event) => {
        let selector = event.target.dataset.toggle;

        document.querySelectorAll(selector).forEach( ($element) => {
           $element.classList.toggle('hidden');
        })
    }
}
    new LostRiverRidgeLabs();
}
