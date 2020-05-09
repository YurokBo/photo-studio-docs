$(function () {

    $('#play-video').on('click', function(e){
        e.preventDefault();
        $('#video-overlay').addClass('open');
        $("#video-overlay").append('<iframe width="1280" height="815" src="https://www.youtube.com/embed/YrnPxWN6o4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e){
        e.preventDefault();
        close_video();
    });

    $(document).keyup(function(e){
        if(e.keyCode === 27) { close_video(); }
    });

    function close_video() {
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
    };

});

var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
// Создание экземпляра карты и его привязка к контейнеру с
// заданным id ("map").
    myMap = new ymaps.Map('map', {
// При инициализации карты обязательно нужно указать
// её центр и коэффициент масштабирования.
        center: [55.773059, 37.630167],
        zoom: 17,
        controls: []
    });


// Создание метки
        myPlacemark = new ymaps.Placemark(
// Координаты метки
            [55.773059, 37.630167] , {

            }, {
                iconLayout: 'default#imageWithContent',
// Своё изображение иконки метки.
                iconImageHref: '../img/map-point.png', // картинка иконки
                iconImageSize: [39, 39], // размеры картинки
                iconImageOffset: [-6, -10], // смещение картинки

// Не скрываем иконку при открытом балуне.
                hideIconOnBalloonOpen: false,

            });
// Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
}

document.addEventListener('click', e => {
    const menuBurger = e.target.closest('.menu__burger-btn'),
        menuBurgerItems = document.querySelector('.menu__burger ul');

    if (!menuBurger) {
        return;
    }

    menuBurgerItems.style.display = menuBurgerItems.style.display === 'none' ? 'block' : 'none';
});
