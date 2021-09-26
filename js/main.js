const scrollSection = () => {
	$(".nav-link").on("click", function (e) {
		$(this).parent("li").addClass("active");
		e.preventDefault();
		let $section = $($(this).attr("href"));
		$("html, body").animate({
			scrollTop: $section.offset().top - $("header").outerHeight(),
		}, 1500);
		$(".nav-link").not(this).parent("li").removeClass("active");
	});
};
$(document).ready(function () {
	scrollSection();
	$('.nav-link').parent("li.firt-child").addClass("active");
})