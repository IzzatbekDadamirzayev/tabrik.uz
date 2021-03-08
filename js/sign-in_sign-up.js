$("#but1").click(function(){
    $(".signup_but").removeClass("inactive");
    $(".login_but").addClass("inactive");
    $("#brand").removeClass("nav-brand");
    $("#brand").addClass("nav-brand-right");
});

$("#but2").click(function(){
    $(".login_but").removeClass("inactive");
    $(".signup_but").addClass("inactive");
    $("#brand").removeClass("nav-brand-right");
    $("#brand").addClass("nav-brand");
});