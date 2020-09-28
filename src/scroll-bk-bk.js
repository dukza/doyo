$(function(){
    let scrollCarousel= new ScrollMagic.Controller();
    let scrollCarouselWrap = $('.work-section'),
        con1 = scrollCarouselWrap.find('.work-con1'),
        con2 = scrollCarouselWrap.find('.work-con2'),
        con3 = scrollCarouselWrap.find('.work-con3'),
        img1 = scrollCarouselWrap.find('.work-img1'),
        img2 = scrollCarouselWrap.find('.work-img2'),
        img3 = scrollCarouselWrap.find('.work-img3');
        title = scrollCarouselWrap.find('.work-title');
    let scrollCarouselT = gsap.timeline()
        .to([con1, img1],1,{y:"-100%", opacity:'0'})
        .from([con2, img2],1,{y:"100%", opacity:'0'},'0')
        .to([con2, img2],1,{y:"-100%", opacity:'0'},'2')
        .from([con3,img3],1,{y:"100%", opacity:'0'},'2')
        .to([con3,img3, title],1,{y:"-100%", opacity:'0'},'4')

    let scrollCarouselScene = new ScrollMagic.Scene({
        triggerElement: '.work-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(scrollCarouselT)
    .addTo(scrollCarousel)
    .setPin('.work-section');


    let sectionSlides = new ScrollMagic.Controller();

    // define movement of panels
    let sectionSlidesT = new gsap.timeline()
        // animate to second panel
        .to("#slideContainer", 0.5, {z: -1})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-25%",delay: 1})	// move in to first panel
        .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {z: -1, delay: 1})
        .to("#slideContainer", 1,   {x: "-50%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to forth panel
        .to("#slideContainer", 0.5, {z: -1, delay: 1})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    let sectionSlidesScene =new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%"
        })
        .setPin("#pinContainer")
        .setTween(sectionSlidesT)
        .addTo(sectionSlides);


    // init controller
    let careerC = new ScrollMagic.Controller();
    // define elememt 
    let careerWrap = $('#career'),
        careerImg = careerWrap.find('.career-img'),
        careerCon = careerWrap.find('.career-con');
    // define movement 
    let careerT1 = TweenMax
        .staggerFromTo([careerCon], 0.2,{opacity:1},{opacity:0.4},0.3)
    // create scene
    let careerS1 = new ScrollMagic.Scene({
        triggerElement: "#career",
        offset:600,
        duration: '100%'
      })
      .setTween(careerT1)
      .addTo(careerC)
      .setClassToggle('.career-img' , 'visible')
      .addIndicators({
        name: "1"
      });
    // define movement 
    // let careerT2 = TweenMax
    //     .staggerTo([careerImg], 0.1,{opacity:0},1)
    // create scene
    // let careerS2 = new ScrollMagic.Scene({
    //     triggerElement: "#career",
    //     offset:400,
    //     duration: '100%'
    //   })
    //     .on("enter", function () {
    //     // trigger animation by changing inline style.
    //         console.log('1')
    //     })
    //     .on("leave", function () {
    //         // reset style
    //         console.log('2')


    //     })
    //   .setTween(careerT2)
    //   .addTo(careerC)
    //   .setClassToggle('.career-img' , 'positon-absolute')
    //   .addIndicators({
    //     name: "1"
    //   });


})