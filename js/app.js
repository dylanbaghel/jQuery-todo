console.log("Connected");

$("ul").on("click", "li", function() {
    $(this).toggleClass("mark");
});

$("input[type='text'").on("keypress", function(event) {
    if (event.which === 13) {
        var inputText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class = "fa fa-trash-alt"></i></span> ' + inputText + "</li>");
    }
});


$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation(); 
}); 

$(".fa-plus").on("click", function() {
    $("input[type='text'").slideToggle();
});
