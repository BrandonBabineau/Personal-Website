var i = 0;
var txt = 'Praesent vestibulum non augue ut posuere. Integer sollicitudin sagittis feugiat. Proin eget risus in augue malesuada consequat. Suspendisse elit tortor, semper eget sapien at, euismod faucibus orci. Cras accumsan dignissim facilisis. Donec posuere a arcu eget tempor. Donec iaculis ante vitae lacus ultricies, in tempor velit molestie. Phasellus volutpat ex at pellentesque mollis. Fusce a tempus urna. Cras commodo, enim quis condimentum vestibulum, eros massa malesuada urna, ullamcorper consequat nisi mauris non orci. Donec consectetur ligula in sem vestibulum, a aliquet sapien semper. Fusce et dui ipsum.'; /* The text */
var speed = 10; /* The speed/duration of the effect in milliseconds */
/* added below JS for timing  */
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
