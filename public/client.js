

$( document ).ready(function() {
  function log(output){
      console.log(output);
      $("#log").append('<li>' + output + '</li>');//Logs to html
  }
  
  function assert(value, expected) {
      return value === expected ? 'Pass' : 'Fail expected ' + expected + ' but got ' + value;
  }

  function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }

  function HSLtoRGBHex(h, s, l) {
      var r, g, b;
      
      // STUB: Add code here.
      
      // r = componentToHex(r), g = componentToHex(g), b = componentToHex(b);//Use this helper function to turn rgb values to hex.
      return '#' + r + g + b;
  }

  log(assert(HSLtoRGBHex(0, 0, 0), '#000000'));
  log(assert(HSLtoRGBHex(0, 0, 100), '#ffffff'));
  log(assert(HSLtoRGBHex(0, 100, 50), '#ff0000'));
  log(assert(HSLtoRGBHex(120, 100, 50), '#00ff00'));
  log(assert(HSLtoRGBHex(180, 100, 25), '#008080'));

});
