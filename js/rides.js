var height = parseInt(prompt("What is your height, in inches?"));

$(function() {
  if ( height <= 15 ) {
    $(".baby").show();
  } else if ( height >= 16 && height <= 30 ) {
    $(".small").show();
  } else if ( height >= 31 && height <= 50 ) {
    $(".small, .medium").show();
  } else if ( height >= 51 ) {
    $(".medium, .large").show();
  }
});
