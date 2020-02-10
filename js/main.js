$(document).ready(function(){
	
	if($.cookie('cur_page') == null) load_page("home.html");
	else load_page($.cookie('cur_page'));

	

	$('.nav-link').click(function(e) {
		e.preventDefault();
		load_page($(this).attr('data-page'));
	});

	$('.project-link').click(function(e) {
		e.preventDefault();
		load_page($(this).attr('data-page'));
	});

	$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  		event.preventDefault();
  		$(this).ekkoLightbox();
	});

});

function load_page(page) {
	$.ajax({
		type: 'post',
		url: 'pages/'+page
	}).done(function(data) {
		$('main').html(data);
		$.cookie('cur_page', page);
	}).fail(function() {
		console.log('fail');
	});
}