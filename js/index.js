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
            animateValue(obj2, 0, 50, 1000);
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
            animateChar(obj4, 'Global Reach');
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