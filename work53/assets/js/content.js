$(document).ready(function() {
	$('#accordion .title').click(function() {
        $('#accordion .panel').hide();
        $('#accordion .title').removeClass('active');
        $(this).next().show();
        $(this).addClass('active');
    });

    $('.title_area .like').click(function() {
        $(this).toggleClass('on');
    })
})