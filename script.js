{
    class LostRiverRidgeLabs {
        constructor() {
            this.addToggleListener();
            this.handleStickyScroll();
        }

        handleStickyScroll = () => {
            let $header = document.querySelector('header');
            let $main = document.querySelector('main');

            console.log($header.classList.contains('always-sticky'), 'always sticky<<<<');
            if (!$header.classList.contains('always-sticky')) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > (window.outerHeight)) {
                        $header.classList.add('sticky');
                        $main.classList.add('sticky');

                    } else {
                        $header.classList.remove('sticky');
                        $main.classList.remove('sticky');
                    }
                })
            }
        }

        addToggleListener = () => {
            document.querySelectorAll('.toggle').forEach(($element) => {
                $element.addEventListener('click', this.handleToggle);
            })
        }

        handleToggle = (event) => {
            console.log(event);
            event.preventDefault();

            let selector = event.target.dataset.toggle;

            document.querySelectorAll(selector).forEach(($element) => {
                $element.classList.toggle('hidden');
            })
        }
    }
    new LostRiverRidgeLabs();
}
