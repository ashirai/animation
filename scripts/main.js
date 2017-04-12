$(document).ready(function()
{
    var headerHeight = 130;
    var rightNavWidth = 350;
    var orderYoursWidth = 150;
    var plusWidth = 40;
    var isSlideDownVisible = false;

    //click [-]
    $('.minus').click(function() {
        if(isSlideDownVisible){
            //when slide down is visible, [-] button behaves differently
            showSlideDown(false);
            setTimeout(function(){
                showPlus(true, plusWidth); //slide out hidden plus
                showRightSection(true);
            }, 800);
        }else{
            if($(this).css("margin-right") == "0px") {
                //hide right Section
                showRightSection(false);
                showOrderYours(true);
            }else{
                //show right section
                showRightSection(true);
                showOrderYours(false);
            }
        }
    });

    //click [Order Yours]
    $('.order-yours').click(function() {
        if($(this).css("margin-right") !== "0px"){
            //nothing happens here
        }else{
            //hide Order Yours
            showRightSection(true);
            showOrderYours(false);
        }
    });

    //click [+]
    $('.plus').click(function() {
        if($(this).css("margin-right") == "0px") {
            //hide right Section
            showRightSection(false);
            //show slide down
            showSlideDown(true);
            //hide [+]
            showPlus(false, plusWidth);
        }else{
            //show right section
            showRightSection(true);
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

    function showPlus(show, width){
        var w = (width) ? width : rightNavWidth;
        $('.plus').animate({"margin-right": (show ? '+' : '-') + '=' + w});
    }

    function showMinus(show){
        $('.minus').animate({"margin-right": (show ? '+' : '-') + '=' + rightNavWidth});
    }

    function showOrderYours(show){
        $('.order-yours').animate({"margin-right": (show ? '+' : '-') + '=' + orderYoursWidth});
    }

    function showSlideDown(show){
        var contentHeight = $('body').innerHeight() - headerHeight;
        var objSideDown = $('.slide-down');
        if(show){
            //offset slide as the same height as contentHeight (window height - header height)
            objSideDown.css('margin-top', '-' + contentHeight + 'px');
            //set slide height same as content height so that the height of slide matches the content height
            objSideDown.height(contentHeight);
        }
        //now slide down
        objSideDown.animate({"margin-top": (show ? '+' : '-') + '=' + contentHeight}, {duration: 700});
        isSlideDownVisible = show;
    }

});