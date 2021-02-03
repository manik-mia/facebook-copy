jQuery(document).ready(function(){
	jQuery('.owl-carousel').owlCarousel({
	    margin:5,
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 2000,
	    items:3
	});
	jQuery(".menu-bar").click(function(){
		jQuery(".news-feed-menu").slideToggle(1500);
	});
	jQuery(window).resize(function(){
		var screenWidth= jQuery(window).width();
		if (screenWidth > 768){
			jQuery(".news-feed-menu").removeAttr("style");
		}
	});
	jQuery('.emojione').emojioneArea();
	jQuery('.post-reaction .react').hover(function(){
		jQuery('.reactions').fadeToggle(1000);
	});
	jQuery('.post-reaction .reactions').hover(function(){
		jQuery('.reactions').css('display','block');
	});
});
