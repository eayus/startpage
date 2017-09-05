$(document).ready(function() {

    //Search Bar

    var $search = $("input[name='q']");

    $("span[name='yt']").click(function() {
        var curr = $search.val();
        $search.val("!yt " + curr);
        $search.focus();
    });

    $("span[name='sr']").click(function() {
        var curr = $search.val();
        $search.val("!sr " + curr);
        $search.focus();
    });

    $("span[name='a']").click(function() {
        var curr = $search.val();
        $search.val("!a " + curr);
        $search.focus();
    });

    $("span[name='w']").click(function() {
        var curr = $search.val();
        $search.val("!w " + curr);
        $search.focus();
    });

    //Tabs

    $(".stripe").mouseenter(function() {
        $(this).stop().animate({
            width: '100vw'
        });
        $(this).find(".content").stop().fadeIn().children().show();
    });

    $(".stripe").mouseleave(function() {
        $(this).stop().animate({
            width: '40px'
        });
        $(this).find(".content").stop().fadeOut();
    });

});
