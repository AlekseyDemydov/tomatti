const sliderLine = document.querySelector('.tap-line');
const sliderWrapper = document.querySelector('.tap-wrapper');
const lineItem=document.querySelectorAll('.tap')
const imgArch=document.querySelector('.ex-arch')
const imgLine=document.querySelector('.imgWrapper-line')
const lineImg=document.querySelectorAll('.imgWrapper-img')
const sliderLineName = document.querySelector('.ex-line-name');
const lineName = document.querySelectorAll('.ex-name');
const prevBtn = document.querySelector('.ex-btn-prev');
const nextBtn = document.querySelector('.ex-btn-next');
const dots = document.querySelectorAll('.ex-dot');
const navTabBtn = document.querySelectorAll('.ex-beet-btn');
const btnR = document.querySelector('.btnRight');

let position = 0;
const slidWidth=sliderWrapper.getBoundingClientRect().width
let positionImg = 0;
const imgWid=imgArch.getBoundingClientRect().width
let positionName = 0;
const nameWidt=lineName[1].getBoundingClientRect().width
let dotIndex = 0; 
console.log(slidWidth, 'slidWidthexample')
console.log(imgWid, 'imgWidexample')
console.log(nameWidt, 'nameWidtexample')
const nextSlide = () => {
	
  if (position < (dots.length - 1) * slidWidth) {
    position += slidWidth;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
  }

  sliderLine.style.left = -position + 'px';

  if (positionImg < (dots.length - 1) * imgWid) {
    positionImg += imgWid;
    // dotIndex++;
  } else {
    positionImg = 0;
    // dotIndex = 0;
  }

  imgLine.style.left = -positionImg + 'px';

  if (positionName < (dots.length - 1) * nameWidt) {
    positionName += nameWidt;
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
    position -= slidWidth;
    dotIndex--;
  } else {
    position = (dots.length - 1) * slidWidth;
    dotIndex = dots.length - 1;
  }

  sliderLine.style.left = -position + 'px';

  if (positionImg > 0) {
    positionImg -= imgWid;
    // dotIndex++;
  } else {
    positionImg = (dots.length - 1) * imgWid;
    // dotIndex = 0;
  }

  imgLine.style.left = -positionImg + 'px';

  if (positionName > 0) {
    positionName -= nameWidt;
    // dotIndex++
  } else {
    positionName = (dots.length - 1) * nameWidt;
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
    position = slidWidth * index;
    positionName = nameWidt * index;
    positionImg = imgWid * index;
    sliderLine.style.left = -position + 'px';
    sliderLineName.style.left = -positionName + 'px';
    imgLine.style.left = -positionImg + 'px';
    dotIndex = index;
    thisSlide(dotIndex);
  });
});
 