$(".col-md-6").hover(function(){
    $(this).css("background-color", "darkgrey");
    }, function(){
    $(this).css("background-color", "");
});

$("img").click(function(){
	alert("You clicked image");
});

