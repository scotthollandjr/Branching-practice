$(function() {
  if (confirm("Are you over 18? Hit 'OK' for yes and 'Cancel' for no.")) {
  $("#over").show();
} else {
  $("#under").show();
}
});
