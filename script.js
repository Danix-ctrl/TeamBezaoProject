var menuButtons = document.querySelectorAll('.menu-btn');
menuButtons.forEach(function(btn){
  btn.addEventListener('click', function(){
    menuButtons.forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    alert(btn.innerText + ' clicked');
  });
});

document.getElementById('bell').addEventListener('click', function(){
  alert('No new notifications');
});

document.querySelector('.logout').addEventListener('click', function(){
  alert('Logging out…');
});