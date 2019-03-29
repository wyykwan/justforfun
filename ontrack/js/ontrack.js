// add new task
$("input[type='text']").keypress(function(e){
	if(event.which === 13) { // enter key == 13
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newToDo + "</li>");
	}
});

// toggle add task input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

// check off task
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete task
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	e.stopPropagation();
});