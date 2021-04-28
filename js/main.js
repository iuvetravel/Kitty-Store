$(document).ready(function () {
  $("#menu-bar").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu-bar").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
  });
  $(".sleep .list .btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let src = $(this).attr("data-src");
    $("#sleep-img").attr("src", src);
  });
});
