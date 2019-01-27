
export default function preloader(){
  const loader = document.querySelector('.preloader');
  const images = document.querySelectorAll('img');
  const wrapper = document.querySelector('.wrapper');
  const preloaderProgress = document.querySelector('.preloader__text');

  wrapper.style.height = '100vh';

  let percent = 0;
  const step = 100 / images.length;

  function percentTick(end, imageLoaded, start = 0){
      if (start <= end){
          setTimeout(() => {
              percent = percent < 100 ? ++percent : 100;
              preloaderProgress.textContent = `${percent}`;
              percentTick(end, imageLoaded, start + 1);
          }, 10);
      }
      if (imageLoaded === images.length && percent === 100){
          wrapper.style.height = '';
          loader.classList.add('hide');
      }
  }
  return{
      loaded(){
          let imageLoaded = 0;
          if (images.length === 0){
              wrapper.style.height = '';
              loader.classList.add('hide');
              return;
          }
          for (let item of images){
              const shadowImg = new Image();
              shadowImg.onload = () =>{
                  imageLoaded++
                  percentTick(step, imageLoaded);
              };
              shadowImg.src = item.getAttribute('src');
          }
      }
  }
}