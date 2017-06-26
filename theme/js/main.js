
/**
 *  @file
 *  Main JS
 */

(function($)
{
    //      If we're gonna place manually the Footer,
    //      let's hide it as soon as possible before positionnning it properly
    //      to try and minimize the 'flash' glitch
    $( '.footer-main' ).hide();
    
    
    /**
     *  Document ready
     *  (Event handler)
     */
    $(document).ready( function()
    {
        //      Footer bottom position
        setTimeout( function()
        {
            stick_to_bottom( $( '.footer-main' ));
            $( '.footer-main' ).show();
            
        }, 520 );
    });
    
    
    /**
     *  Resize window
     *  (Event handler)
     */
    $(window).resize( function()
    {
        //      Listening to resizes means if total document height
        //      reaches a maximum, it won't "shrink" back
        stick_to_bottom( $( '.footer-main' ));
    });
    
})(jQuery);



/**
 *  Footer position helper : stick to the bottom, NOT using 'fixed' position
 *  (glitches in Android)
 */
function stick_to_bottom( dom_element )
{
    //var total_height = $(window).height()
    //var total_height = $('html').height()
    //var total_height = $('body').height()
    var total_height = $(document).height()
    ,   footer_height = dom_element.height() + 3
    ,   footer_position = dom_element.position()
    ;
    
    //      debug
    //console.log( '---' );
    //console.log( 'browser viewport height = ' + total_height );
    //console.log( 'footer_height = ' + footer_height );
    //console.log( 'footer_position.top = ' + footer_position.top );
    
    if ( footer_position.top < total_height - footer_height ) {
        dom_element.css( 'top', ( total_height - footer_height ) + 'px' );
    }
}


