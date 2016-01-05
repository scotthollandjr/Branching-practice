$(function() {

  if (confirm("Are you over 21?")) {
    $("#drinks").show();
  } else {
    $("#under-21").show();
  }
});
