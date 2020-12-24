$(document).ready(function(){

	slideProject = (function(){
		$(".percent").click(function(){
			$(this).fadeOut( 800, function(){
				// $(this).toggle();
				$(".dog-1").toggle(50)
			});
		});
	});

	slideProject();
});