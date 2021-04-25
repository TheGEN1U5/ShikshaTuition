window.onload = function(){

    //Observer2
    const elems2 = document.querySelectorAll('.enrollment');
    observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
            console.log('in the view');
                const obj1 = document.getElementById('title1')
                const obj2 = document.getElementById('title2')
                animateChar(obj1, ['So, what are you waiting for?', 'Get your child enrolled now!'] );
                animateChar(obj2, ['Send us your query and get a reply from us!']);
            } else {
                console.log('out of view');
            }
        });
    });

    elems2.forEach(text => {
        observer2.observe(text);
    });

    //Anim Funcs

    let animateChar = (obj, text) => {
        writeAndDelete(obj,text,{ timeout:2000 , speed:100})
    }
}