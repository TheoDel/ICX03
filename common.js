/**
 * Created by Théo on 12/12/2016.
 */
var tempsAttente = 30;
var clickMax = 10;

var likeButton = $("#like_button");
var startButton = $("#start_button");
var exitButton = $("#exit_button");

var likeIcon = $("#like_icon");
var compteurDisplay = $("#compteur_display");

var prenom="";
var countClicks = 0;
var compteurAttente = 0;

startButton.click(function(){
    exitButton.css("display","inline-block");
    prenom = $("#first_name_input").val();
    $("#first_name_display").text(prenom);

    $("#part1").slideUp();
    $("#part2").slideDown();

});

likeButton.click(function () {
    countClicks++;
    likeButton.addClass("disabled");

    if (countClicks < clickMax){
        likeIcon.hide();
        compteurAttente = tempsAttente;
        compteurDisplay.text(compteurAttente);
        compteurDisplay.show();
        startCompteur();
    } else {
        $("#max_likes_msg").show();
    }

});

exitButton.click(function(){
    exitButton.css("display","none");
    $("#first_name_display").text("");
    $("#part2").slideUp();
    $("#part3").slideDown();
});

$("#button_stats").click(function(){
    Materialize.toast('Nb de clicks : '+ countClicks+"", 3000, 'rounded')
});

function startCompteur(){
    setTimeout(function()
    {
        compteurAttente--;
        compteurDisplay.text(compteurAttente);
        if (compteurAttente > 0){
            startCompteur();
        }
        else {
            likeIcon.show();
            compteurDisplay.hide();
            likeButton.removeClass("disabled");
        }
    }, 1000);

}