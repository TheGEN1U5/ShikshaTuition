window.onload = function(){

    //Observer 1                
    const elems1 = document.querySelectorAll('.specs1');
    observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
        console.log('in the view');
            const obj1 = document.getElementById('teacherC')
            const obj2 = document.getElementById('studentC')
            const obj3 = document.getElementById('experienceC')
            animateValue(obj1, 0, 2, 1000);
            animateValue(obj2, 0, 500, 1000);
            animateValue(obj3, 0, 20, 1000);
        } else {
            console.log('out of view');
        }
    });
    });

    elems1.forEach(text => {
        observer1.observe(text);
    });

    //Observer2
    const elems2 = document.querySelectorAll('.specs2');
    observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
        console.log('in the view');
            const obj4 = document.getElementById('globe')
            const obj5 = document.getElementById('batches')
            const obj6 = document.getElementById('maths')
            animateChar(obj4, 'International Reach');
            animateChar(obj5, 'Small Batches');
            animateChar(obj6, 'Special Maths Classes');
        } else {
            console.log('out of view');
        }
    });
    });

    elems2.forEach(text => {
        observer2.observe(text);
    });

    //Observer3
    const elems3 = document.querySelectorAll('.specs3');
    observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
        console.log('in the view');
            const obj7 = document.getElementById('pocket')
            const obj8 = document.getElementById('nursery')
            const obj9 = document.getElementById('classes')
            animateChar(obj7, 'Pocket Friendly');
            animateChar(obj8, 'Special Nursery Batches');
            animateChar(obj9, 'Classes I to VIII');
        } else {
            console.log('out of view');
        }
    });
    });

    elems3.forEach(text => {
        observer3.observe(text);
    });

    //Anim Funcs

    let animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    let animateChar = (obj, text) => {
        writeAndDelete(obj,[text],{ timeout:100 , speed:100 })
    }

    
}






//review carousel

var slideIndexReview = 1;
var slideIndex = 1;
showSlidesReview(slideIndexReview);

// Next/previous controls
function plusSlidesReview(n) {
    showSlidesReview(slideIndexReview += n);
}

// Thumbnail image controls
function currentSlideReview(n) {
    showSlidesReview(slideIndexReview = n);
}

function showSlidesReview(n) {
    var i;
    var slidesReview = document.getElementsByClassName("parent");
    var dotsReview = document.getElementsByClassName("dotReview");
    if (n > slidesReview.length) {slideIndexReview = 1}
    if (n < 1) {slideIndexReview = slidesReview.length}
    for (i = 0; i < slidesReview.length; i++) {
        slidesReview[i].style.display = "none";
    }
    for (i = 0; i < dotsReview.length; i++) {
        dotsReview[i].className = dotsReview[i].className.replace(" active", "");
    }
    slidesReview[slideIndexReview-1].style.display = "grid";
    dotsReview[slideIndexReview-1].className += " active";
}



// Slideshow

showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log('showing'+n);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
}
