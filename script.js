$(document).ready(function(){
	let position = 0;
	const slidesToShow = 3;
	const slidesToScroll = 1;
	const container = $('.slider-container');
	const truck = $('.slider-truck');
	const item = $('.slider-item');
	const itemsCount = item.length;
	const btnNext = $('.btn-next');
	const btnPrev = $('.btn-prev');
	const itemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	// Ширина слайдов
	item.each(function(index, item){
		$(item).css({
			minWidth: itemWidth,
		})
	});

	// Кнопки
	btnPrev.click(function(){
		const itemsLeft = Math.abs(position) / itemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
		console.log(position)
		setPosition();
		checkBtns();
	});
	btnNext.click(function(){
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
		console.log(position)
		setPosition();
		checkBtns();
	});

	// Расчёт позиции
	const setPosition = () => {
		truck.css({
			transform: `translateX(${position}px)`
		});
	}

	// Проверка активности кнопок
	const checkBtns = () => {
		btnPrev.prop('disabled', position === 0);
		btnNext.prop(
			'disabled',
			position <= -(itemsCount - slidesToShow) * itemWidth
		);
	} 

	checkBtns();
});