jQuery('.bg-image').each(function(){
    var url = jQuery(this).attr("data-image");
    if(url){
        jQuery(this).css("background-image", "url(" + url + ")");
    }
});
jQuery(document).ready(function($){
    let destination = jQuery('#destination_nav_link');
    $(destination).on('click', function(){
        $(destination).find('a').toggleClass('active');
        $('.navigation-section').toggleClass('active');
        $('.destination-dropdown').toggleClass('active');
    });
    jQuery("#location_triger").on('click', function(){
        $('.location-dropdown-container').toggleClass('active');
        $('#location_triger').toggleClass('active');
    });
    jQuery("#date_picker").on('click', function(){
        $('.checkin-checkout-calendar').toggleClass('active');
    });
    jQuery("#guests_trigger").on('click', function(){
        $('.guests-dropdown-container').toggleClass('active');
        $('.guests_trigger').toggleClass('active');
    });
});
