function makeVisible() {

    jQuery('.row__item__img img').each(function (index, elem) {
		
		if (!elem.complete) {
       		jQuery(this).on('load', function () {

            	jQuery(this).siblings('.loading').addClass('fade-out');

            	console.log('image loaded from server');
        	});
			
		} else {
			
            jQuery(this).siblings('.loading').addClass('fade-out');
			
        	console.log('image loaded from cache');
    	}
    });
}

function fullScreen(){

    var winH = window.innerHeight,
        winW = window.innerWidth;

    console.log(winH*1.5, winW);   

    jQuery('#fullscreen-image').height(winH);
 //  jQuery('#fullscreen-image-2').height(winH);

        if ( winH*1.5 >= winW ) {
 
          jQuery('#fullscreen-image img').addClass('portrait').css('height', winH + 'px');
  //        jQuery('#fullscreen-image-2 img').addClass('portrait-2').css('height', winH + 'px');

        } else {

          jQuery('#fullscreen-image img').removeClass('portrait').removeAttr('style');
   //       jQuery('#fullscreen-image-2 img').removeClass('portrait-2').removeAttr('style');
        }
}

function scollToAnim(elem1, elem2){

    var linkTo = jQuery(elem1);

    jQuery(linkTo).on('click', function(event){

        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery(elem2).offset().top}, 1000);

    });

     
}

function navAnim(){

 /*   jQuery('#toggle-menu').on('click', function(){

        if ( !jQuery('#nav').hasClass('out') ) {

            jQuery('#nav').animate({ right : '0'}, 600 );

        } else {

            jQuery('#nav').animate({ right : '-1000px'}, 600 );
        }

        jQuery('#nav').toggleClass('out');

    });

    */

    jQuery('#toggle-menu').on('click', function(){

        jQuery('#nav').slideToggle();
    });

}

jQuery(document).ready(function () {

    makeVisible();
    fullScreen();
    navAnim();
    scollToAnim('a[href^="#video"]','#video');
    scollToAnim('a[href^="#about"]','#about');
    scollToAnim('a[href^="#quantum"]','#quantum');
    scollToAnim('a[href^="#flex"]','#flex');
    scollToAnim('a[href^="#contact"]','#contact');

});

jQuery(window).on('resize', function () {

    fullScreen();
    
});