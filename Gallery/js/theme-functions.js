jQuery(document).ready(function($) {
	//Mainmenu
	$('ul#menu').superfish();
	
	//Fade portfolio
	$(".fade").fadeTo(1, 1);
	$(".fade").hover(
	function () {$(this).fadeTo("fast", 0.45);},
	function () { $(this).fadeTo("slow", 1);}
	);		
	
	//Tab Jquery
	$(".tab_content").hide(); 
	$("ul.tabs li:first").addClass("active").show(); 
	$(".tab_content:first").show(); 
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active"); 
		$(".tab_content").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});	
	
	//Twitter Jquery
	$("#twitter").getTwitter({
		userName: "Indoneztheme",
		numTweets: 1,
		loaderText: "Loading tweets...",
		slideIn: true,
		slideDuration: 750
	});
	
	//Fancybox Jquery
	$(".fancybox").fancybox({
		padding: 0,
		openEffect : 'elastic',
		openSpeed  : 250,
		closeEffect : 'elastic',
		closeSpeed  : 250,
		closeClick : true,
		helpers : {
			overlay : {opacity : 0.65},
			media : {}
		}
	});	
	
	//TinyNav Jquery
	$('#menu').tinyNav({
	  active: 'selected'
	});		
	
	//To top Jquery
	$().UItoTop({ easingType: 'easeOutQuart' });							
	
});	