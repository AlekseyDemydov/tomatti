const sliderLine = document.querySelector('.slider-line');
const lineItem=document.querySelectorAll('.line-item')
const imgLine=document.querySelector('.img-line')
const imgArch=document.querySelector('.arch')
const imgSlWhy=document.querySelector('.imgSlWhy')
const lineImg=document.querySelectorAll('.line-img')
const sliderLineName = document.querySelector('.slider-line-name');
const lineName = document.querySelectorAll('.line-name');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const dots = document.querySelectorAll('.dot');
const navTabBtn = document.querySelectorAll('.nav-tab-btn');
const btnR = document.querySelector('.btnR');

let position = 0;
const sliderWidth=lineItem[1].getBoundingClientRect().width
let positionImg = 0;
const imgWidth=imgSlWhy.getBoundingClientRect().width
let positionName = 0;
let dotIndex = 0;

console.log(imgWidth,'imgWhy')
console.log(sliderWidth,'lineItemWhy') 
const nextSlide = () => {

  if (position < (dots.length - 1) * sliderWidth) {
    position += sliderWidth;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
  }

  sliderLine.style.left = -position + 'px';

  if (positionImg < (dots.length - 1) * imgWidth) {
    positionImg += imgWidth;
    // dotIndex++;
  } else {
    positionImg = 0;
    // dotIndex = 0;
  }

  imgLine.style.left = -positionImg + 'px';

  if (positionName < (dots.length - 1) * 115) {
    positionName += 115;
    // dotIndex++
  } else {
    positionName = 0;
    // dotIndex=0
  }
  sliderLineName.style.left = -positionName + 'px';

  thisSlide(dotIndex);
};
const prevSlide = () => {
  if (position > 0) {
    position -= sliderWidth;
    dotIndex--;
  } else {
    position = (dots.length - 1) * sliderWidth;
    dotIndex = dots.length - 1;
  }

  sliderLine.style.left = -position + 'px';

  if (positionImg > 0) {
    positionImg -= imgWidth;
    // dotIndex++;
  } else {
    positionImg = (dots.length - 1) * imgWidth;
    // dotIndex = 0;
  }

  imgLine.style.left = -positionImg + 'px';

  if (positionName > 0) {
    positionName -= 115;
    // dotIndex++
  } else {
    positionName = (dots.length - 1) * 115;
    // dotIndex=0
  }
  sliderLineName.style.left = -positionName + 'px';



  thisSlide(dotIndex);
};

const thisSlide = index => {
  for (let dot of dots) {
    dot.classList.remove('activeDot');
  }
  dots[index].classList.add('activeDot'); 
  for (let btn of navTabBtn) { 
    btn.classList.remove('active');
  }
  navTabBtn[index].classList.add('active');
  for(let item of lineItem){
	item.classList.remove('change')
  }
  lineItem[index].classList.add('change')
  for(let item of lineName){
	item.classList.remove('change')
  }
  lineName[index].classList.add('change')
  for(let item of lineImg){
    item.classList.remove('change')
    }
    lineImg[index].classList.add('change')
};
nextBtn.addEventListener('click', nextSlide);
btnR.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

navTabBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    position = sliderWidth * index;
    positionName = 115 * index;
    positionImg = imgWidth * index;
    sliderLine.style.left = -position + 'px';
    sliderLineName.style.left = -positionName + 'px';
    imgLine.style.left = -positionImg + 'px';
    dotIndex = index;
    thisSlide(dotIndex);
  });
});
 