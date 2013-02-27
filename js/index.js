function setup() {
	$("#loginForm").mouseleave(function(e){
		$(this).hide();
	});
}

function toggleChildren(target) {
	$(target).siblings().each(function(index, element) {
        $(element).children("ul").slideUp(400);
    });
	setTimeout(function() {$(target).children().slideDown()}, 400);
}