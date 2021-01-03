const prevIcon =
	'<i class="fas fa-angle-left"></i><i class="fas fa-angle-double-left"></i>';
const nextIcon =
	'<i class="fas fa-angle-double-right"></i><i class="fas fa-angle-right"></i>';
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 40,
	nav: true,
	navText: [prevIcon, nextIcon],
	dots: false,
	stagePadding: 30,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$("#Topbtn").fadeIn();
		} else {
			$("#Topbtn").fadeOut();
		}
	});

	$("#Topbtn").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
	});
});

$(window).on("load", function () {
	$(".loader-container").fadeOut(1500);
});
