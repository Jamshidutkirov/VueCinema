const animItems = document.querySelectorAll('._anim-items');

if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);


    function animOnScroll(params) { 
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight ){
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }            

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');  
            }else{
                animItem.classList.remove('_active'); 
            }
        }
     }

     function offset(el) { 
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

      setTimeout(() => {
        animOnScroll()  
      }, 1000);

      animOnScroll()
}



let menu = document.querySelector('.menu'),
list = document.querySelector('.list')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    menu.style = 'z-index:999;'
    list.classList.toggle('active')
    list.style.transition = '1s'
})