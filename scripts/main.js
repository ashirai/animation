$(document).ready(function()
{
    var rightNavWidth = 350;
    var orderYoursWidth = 150;

    $('.minus').click(function() {
        if($(this).css("margin-right") == "0px") {
            showRightSection(false);
            showOrderYours(true);
        }else{
            showRightSection(true);
            showOrderYours(false);
        }
    });

    $('.order-yours').click(function() {
        if($(this).css("margin-right") !== "0px"){
            //nothing happens here
        }else{
            showRightSection(true);
            showOrderYours(false);
        }

    });

    function showRightSection(show){
        showRightNav(show);
        showPlus(show);
        showMinus(show);
    }

    function showRightNav(show){
        $('.right').animate({"margin-right": (show ? '+' : '-') + '=' + rightNavWidth});
    }

    function showPlus(show){
        $('.plus').animate({"margin-right": (show ? '+' : '-') + '=' + rightNavWidth});
    }

    function showMinus(show){
        $('.minus').animate({"margin-right": (show ? '+' : '-') + '=' + rightNavWidth});
    }

    function showOrderYours(show){
        $('.order-yours').animate({"margin-right": (show ? '+' : '-') + '=' + orderYoursWidth});
    }

});