$("ul").on("click", "li", function() {
    $(this).toggleClass("complete");
});

//Click X to delete
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500);
    $(this).remove();
    e.stopPropagation();
});
$("input[type='text'").keypress(function(e) {
    if (e.which === 13) {
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span> " + todotext + "</li>");

    }

});
$(".fa-cat").click(function(e) {
    $("input[type='text'").fadeToggle();

});