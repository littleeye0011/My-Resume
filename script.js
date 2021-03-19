$(document).ready(function () {
  $(document).ready(function () {
    $(".eng-text").show();
    $(".thai-text").hide();
  });
  $(".lang-en").click(function () {
    $(".eng-text").show();
    $(".thai-text").hide();
  });

  $(".lang-th").click(function () {
    $(".thai-text").show();
    $(".eng-text").hide();
  });
});
