const sliderPics = document.querySelectorAll('.slider-pic'),
sliderLine = document.querySelector('.slider-line'),
sliderDots = document.querySelectorAll('.slider-dot'),
sliderLeftBtn = document.querySelector('.slider-left'),
sliderRghtBtn = document.querySelector('.slider-right');

let sliderCount = 0,
sliderWidth; 

window.addEventListener('resize', showSlide);

function showSlide() 
{
	sliderWidth = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = sliderWidth * sliderPics.length + 'px';
	sliderPics.forEach(item => item.style.width = sliderWidth + 'px');
	rollSlider();
}
showSlide();

sliderLeftBtn.addEventListener('click', prevSlide);
sliderRghtBtn.addEventListener('click', nextSlide);

function nextSlide()
{
	sliderCount++;
	if (sliderCount >= sliderPics.length) sliderCount = 0;
	rollSlider();
	thisSlide(sliderCount);
}

function prevSlide()
{
	sliderCount--;
	if (sliderCount < 0) sliderCount = sliderPics.length - 1;
	rollSlider();
	thisSlide(sliderCount);
}

function rollSlider() 
{
	sliderLine.style.transform = `translateX(${-sliderCount *sliderWidth}px)`;
}

function thisSlide(index)
{
	sliderDots.forEach(item => item.classList.remove('active-dot'));
	sliderDots[index].classList.add('active-dot');  
}

sliderDots.forEach((dot, index) =>
{
	dot.addEventListener('click', () => 
	{
		sliderCount = index;
		rollSlider();
		thisSlide(sliderCount);
	})
})