var heading = document.querySelector('#heading');
var option = document.querySelector('#option') ;
var text1 = document.querySelector('#text') ;
heading.onclick = function() {
  heading.style.color = "red" ;
  option.style.color="yellow" ;
  text1.style.color="pink" ;
  text1.style.fontSize="20px"; 
}