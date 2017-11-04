$('.input-wrapper form').on('submit',function (e) {
    e.preventDefault();
    $('.welcome-screen').addClass('hidden');
    var name = $('#name-input').val();
    $('.main .user-name').html('Welcome, ' + name);
    $('.main').removeClass('hidden');
});

$('.clickable').on('click', function () {
    var audio = $('audio')[0];
    if(audio.paused) {
        audio.play();
        $(this).removeClass('fa-play').addClass('fa-pause')
    }
    else {
        audio.pause();
        $(this).removeClass('fa-pause').addClass('fa-play')
    }
});