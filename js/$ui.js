$("#container").addClass("start");

$("nav li").click(function () {
  $("#container").css("max-width", "100%");
  $("nav li").removeClass("on");
  $(this).addClass("on");
  const id = $(this).attr("data-rol");
  $(".content").removeClass("prev this next");
  $(`#${id}`).addClass("this").prevAll().addClass("prev");
  $(`#${id}`).nextAll().addClass("next");
});

$(".logo_box").click(function () {
  $(".content").removeClass("prev this next");
  $("#container").css("max-width", "1200px");
  $("nav li").removeClass("on");
});
