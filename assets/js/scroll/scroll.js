'use strict';

{
    document.addEventListener("DOMContentLoaded", function () {
        var wrapper = document.getElementById('scroll__wrapper'),
            scroller = document.getElementById('scroller'),
            container = document.getElementById('scroll__container'),
            scrollbar = document.getElementById('scroller__bar'),
            scrollBarHeight = undefined;

        if (scroller) {
            //It's Math, yeah

            var calcBarHeight = function calcBarHeight() {
                if (container.offsetHeight > scroller.offsetHeight) {
                    scrollBarHeight = scroller.offsetHeight - (container.offsetHeight - scroller.offsetHeight) - 4;
                    if (scrollBarHeight > 8) {
                        scrollbar.style.height = scrollBarHeight + 'px';
                    } else {
                        scrollbar.style.height = '8px';
                    }
                } else {
                    scrollbar.style.height = 0;
                }
            };

            var scrollWidth = scroller.offsetWidth - scroller.clientWidth;
            scrollWidth = scrollWidth < 17 ? 17 : scrollWidth;
            scroller.style.width = 'calc(100% + ' + scrollWidth + 'px)';

            scroller.addEventListener('scroll', function () {
                if (scrollBarHeight > 8) {
                    scrollbar.style.top = 2 + scroller.scrollTop + 'px';
                } else {
                    scrollbar.style.top = 2 + scroller.scrollTop * ((scroller.offsetHeight - 12) / (container.offsetHeight - scroller.offsetHeight)) + 'px';
                }
            });

            wrapper.addEventListener('click', calcBarHeight);
            window.addEventListener('resize', calcBarHeight);

            calcBarHeight();
        }
    });
}