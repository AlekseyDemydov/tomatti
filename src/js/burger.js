$(function() {
  $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
      
  });
  
});

const btnBurger=document.getElementById('nav-icon3')
const overlay=document.getElementById('nav-overlay')

const open=()=>{
  overlay.classList.toggle('hide')
}

btnBurger.addEventListener('click',open )
  