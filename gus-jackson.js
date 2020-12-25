$(document).ready(function(){

	landingClear = function(){
		$(".landing-photo").click(function(){
			$(this).hide();
		});
	};

	slideProject = function(){
		$(".percent").click(function(){
			$(this).slideUp(100, function(){
			});
			$(this).siblings("#dog-1").toggle(100)
			$(this).siblings("#dog-2").toggle(100)
			$(this).siblings("#dog-3").toggle(100)
			$(this).siblings("#dog-4").toggle(100)
			$(this).siblings("#dog-5").toggle(100)
			$(this).siblings("#dog-6").toggle(100)
		});
	};

	slideBackProject = function(){
		$(".dog").click(function(){
			$(this).slideUp(100, function(){
			});
			$(this).siblings("#percent-1").toggle(100)
			$(this).siblings("#percent-2").toggle(100)
			$(this).siblings("#percent-3").toggle(100)
			$(this).siblings("#percent-4").toggle(100)
			$(this).siblings("#percent-5").toggle(100)
			$(this).siblings("#percent-6").toggle(100)
		});
	};

	landingClear();

	slideProject();

	slideBackProject();

});