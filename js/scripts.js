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
});