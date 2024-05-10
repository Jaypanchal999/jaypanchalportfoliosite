function startLoder()
{
    let countelem = document.querySelector(".counter");
    let currentValue = 0;

    function updatecounter(){
        if(currentValue === 100)
            {
                return ;
            }

            currentValue += Math.floor(Math.random() * 10 ) + 1;

            if(currentValue > 100){
                currentValue = 100;
            }

            countelem.textContent = currentValue;

            let delay = Math.floor(Math.random() * 100) + 50;
            setTimeout(updatecounter,delay);
    }
    updatecounter();
}


startLoder();


gsap.to(".counter",0.25,{

    delay:2.5,
    opacity:0,
})

gsap.to(".bar",{
    delay:2.5,
    height:0,
    scrub:3,    
    stagger:{
        amount:"-0.3",
        from:"edges",
    },
    ease:"power4.Out"
})


//lodding header


const right = document.querySelector(".page1 .heading .right");

right.addEventListener("mouseenter",function(){

    gsap.to(".heading .right .demo h1",{
        y:-80,
        ease:"back.inOut",
        stagger:0.1,
        
    })

    gsap.to(".heading .right .main h1",{
        y:-210,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .left .demo h1",{
        y:120,
        ease:"back.inOut",
        stagger:0.1,
        
    })

    gsap.to(".heading .left .main h1",{
        y:185,
        stagger:0.1,
        ease:"back.inOut",
    })
    
})


right.addEventListener("mouseleave",function(){

    gsap.to(".heading .right .demo h1",{
        y:120,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .right .main h1",{
        y:90,
        stagger:0.1,
        ease:"back.inOut",
        
    })

    gsap.to(".heading .left .demo h1",{
        y:-80 ,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .left .main h1",{
        y:-5,
        stagger:0.1,
        ease:"back.inOut",
    })


    
})

const left = document.querySelector(".page1 .heading .left");

left.addEventListener("mouseenter",function(){

    gsap.to(".heading .left .demo h1",{
        y:120,
        ease:"back.inOut",
        stagger:0.1,
        
    })

    gsap.to(".heading .left .main h1",{
        y:185,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .right .demo h1",{
        y:-80,
        ease:"back.inOut",
        stagger:0.1,
        
    })

    gsap.to(".heading .right .main h1",{
        y:-210,
        stagger:0.1,
        ease:"back.inOut",
    })
    
})


left.addEventListener("mouseleave",function(){

    gsap.to(".heading .left .demo h1",{
        y:-80 ,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .left .main h1",{
        y:-5,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .right .demo h1",{
        y:120,
        stagger:0.1,
        ease:"back.inOut",
    })

    gsap.to(".heading .right .main h1",{
        y:90,
        stagger:0.1,
        ease:"back.inOut",
    })
    
})

