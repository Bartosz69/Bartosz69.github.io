$('nav button').click(function () {
	var SubPage = $(this).data("page");
	$('nav button').removeClass("active");
	$(this).addClass("active");
	$.ajax({
		url: SubPage + ".html",
		dataType: "html",
		cache: false,
		success: function (REPLY) {
			$('section').html(REPLY);
		},
		error: function (x, errDetails) {
			alert("ERROR: " + errDetails);
		}
		});
});

$('nav button[data-page="homepage"]').addClass("active");
$('section').load("homepage.html");
