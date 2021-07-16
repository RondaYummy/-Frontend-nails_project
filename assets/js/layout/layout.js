'use strict';

{
    var ui_navigation = document.querySelectorAll('.sub-navigation');
    if (ui_navigation) {
        var _length = ui_navigation.length;

        var _loop = function (i) {
            var nav = ui_navigation[i];
            nav.addEventListener('click', function () {
                nav.classList.toggle('sub-navigation--show');
                nav.querySelector('.mdl-navigation__link').classList.toggle('mdl-navigation__link--current');
            });
        };

        for (var i = 0; i < _length; i++) {
            _loop(i);
        }
    }
}