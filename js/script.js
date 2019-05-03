
	$(document).ready(function(){
		$('.menu').click(function(){
			$('ul').toggleClass('active');
		})
        $('ul').click(function(){
            $('ul').removeClass('active');
        })
	})
$window=$(window);
$element=$(".html1");
$element1=$(".css1");
$element2=$(".python1");
$element3=$(".java1");
$element4=$(".c1");
$element5=$(".creative1");
$element6=$(".innovate1");
$element7=$(".team1");
$element8=$(".multi1");
$element9=$(".hard1");
function isscrolled($element,$window){
    var top=$window.scrollTop();
    var bottom=top+$window.height();
    var elemTop=$element.offset().top;
    var elemBottom=elemTop+$element.height();
    return ((elemBottom<=bottom)&&(elemTop>=top));
}
$window.on('scroll',function(){
    if(isscrolled($element,$window)){
        $element.addClass("html");
    }
    else{
        $element.removeClass("html");
    }
    if(isscrolled($element1,$window)){
        $element1.addClass("css");
    }
    else{
        $element1.removeClass("css");
    }
    if(isscrolled($element2,$window)){
        $element2.addClass("python");
    }
    else{
        $element2.removeClass("python");
    }
    if(isscrolled($element3,$window)){
        $element3.addClass("java");
    }
    else{
        $element3.removeClass("java");
    }
    if(isscrolled($element4,$window)){
        $element4.addClass("c");
    }
    else{
        $element4.removeClass("c");
    }
    if(isscrolled($element5,$window)){
        $element5.addClass("creative");
    }
    else{
        $element5.removeClass("creative");
    }
    if(isscrolled($element6,$window)){
        $element6.addClass("innovate");
    }
    else{
        $element6.removeClass("innovate");
    }
    if(isscrolled($element7,$window)){
        $element7.addClass("team");
    }
    else{
        $element7.removeClass("team");
    }
    if(isscrolled($element8,$window)){
        $element8.addClass("multi");
    }
    else{
        $element8.removeClass("multi");
    }
    if(isscrolled($element9,$window)){
        $element9.addClass("hard");
    }
    else{
        $element9.removeClass("hard");
    }
})


