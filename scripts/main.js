$(document).ready(function()
{
    $('.minus').click(function() {

        if($(this).css("margin-right") == "0px")
        {
            $('.right').animate({"margin-right": '-=200'});
            $('.plus').animate({"margin-right": '-=200'});
            $('.minus').animate({"margin-right": '-=200'});
            $('.order-yours').animate({"margin-right": '+=100'});
        }
        else
        {
            $('.right').animate({"margin-right": '+=200'});
            $('.plus').animate({"margin-right": '+=200'});
            $('.minus').animate({"margin-right": '+=200'});
            $('.order-yours').animate({"margin-right": '-=100'});
        }

    });

    $('.order-yours').click(function() {

        if($(this).css("margin-right") !== "0px")
        {
            $('.right').animate({"margin-right": '-=200'});
            $('.plus').animate({"margin-right": '-=200'});
            $('.minus').animate({"margin-right": '-=200'});
            $('.order-yours').animate({"margin-right": '+=100'});
        }
        else
        {
            $('.right').animate({"margin-right": '+=200'});
            $('.plus').animate({"margin-right": '+=200'});
            $('.minus').animate({"margin-right": '+=200'});
            $('.order-yours').animate({"margin-right": '-=100'});
        }

    });
});