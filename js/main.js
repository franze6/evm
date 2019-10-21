$(document).ready(function(){
	$.ajax({
		type: 'post',
		url: 'pages/home.html'
	}).done(function(data) {
		$('main').html(data);
	}).fail(function() {
		console.log('fail');
	});
});