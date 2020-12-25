$(document).ready(function(){

	landingClear = function(){
		$(".landing-photo").click(function(){
			$(this).hide();
		});
	};

	slideProject = function(){
		$(".percent-container").click(function(){
			$(this).children().slideUp(100, function(){
				// $(this).children().toggle(50)
			});
			$(this).children(".dog-1").toggle(100)
			$(this).children(".dog-2").toggle(50)
			$(this).children(".dog-3").toggle(50)
			$(this).children(".dog-4").toggle(50)
			$(this).children(".dog-5").toggle(50)
			$(this).children(".dog-6").toggle(50)
		});
	};

	landingClear();

	slideProject();

});