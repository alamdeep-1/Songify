$('.input-wrapper button').on('click',function (e) {
    e.preventDefault();
    $('.welcome-screen').addClass('hidden');
    var name = $('#name-input').val();
    $('.main .user-name').html('Welcome, ' + name);
    $('.main').removeClass('hidden');
});