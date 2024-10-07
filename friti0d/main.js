 /*const btn = document.getElementById('text');
    btn.onclick = function () {
        const gElement = document.querySelector('.g');
        gElement.classList.toggle('h');
        console.log(gElement.classList); // Логи для проверки
    };
    $(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
} )
*/
const btnport = document.querySelector('.btnt');
const load = document.querySelector('.loading');
const loadbg = document.querySelector('.loadingback');
const btnportone = document.querySelector('.rec')
btnport.onclick = function () {
   load.style.display = 'block';
   loadbg.style.display = 'block';

   // Ожидание 4 секунды (4000 миллисекунд) перед переходом на другую страницу
   setTimeout(function() {
      window.location.href = 'port.html'; // Переход на страницу port.html
   }, 2000);
};
btnportone.onclick = function () {
   load.style.display = 'block';
   loadbg.style.display = 'block';

   // Ожидание 4 секунды (4000 миллисекунд) перед переходом на другую страницу
   setTimeout(function() {
      window.location.href = 'port.html'; // Переход на страницу port.html
   }, 2000);
};


   
