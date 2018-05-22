$(document).ready(function(){
		/* dropdown */
    $("#meni .padajucimeni").on('mouseover', function(){
			  $(".padajucimeni ul").css("display","block");
			}).on('mouseleave', function(){
			  $(".padajucimeni ul").css("display","none");
			});
	
	/* smooth scrolling */
	$('#meni li').click(function(){
		var target = $(this).data("link");
		$('html,body').animate({
        scrollTop: $(target).offset().top
		},1000);
	});

	$('.expBtn').click(function(){
		var target = $(this).data("link");
		$('html,body').animate({
        scrollTop: $(target).offset().top
		},1000);
	});

	$('.footerli').click(function(){
		var target = $(this).data("link");
		$('html,body').animate({
        scrollTop: $(target).offset().top
		},1000);
	});
});