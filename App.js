function SmoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance =targetPosition-startPosition;

    var startTime = null;

    function animationScroll(currentTime){
        if (startTime === null) {
            startTime = currentTime;
            console.log(startTime);
        }
        var timeElapsed = currentTime - startTime;
        console.log(timeElapsed);
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animationScroll);
        }
    }

    function ease(t, b, c, d){
        t /= d/2;
        if (t < 1) {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) -1) + b;
    }

    requestAnimationFrame(animationScroll);

    
}



var section1 =document.querySelector('.section1');
var section2 =document.querySelector('.section2');

section1.addEventListener('click',function () {
    SmoothScroll('.section2', 1000);
});

section2.addEventListener('click',function () {
    SmoothScroll('.section1', 1000);
});