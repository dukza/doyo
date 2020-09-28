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
        .to("#slideContainer", 0, {z: -1})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-25%",delay: 1})	// move in to first panel
        .to("#slideContainer", 0, {z: 0})				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0, {z: -1, delay: 1})
        .to("#slideContainer", 1,   {x: "-50%"})
        .to("#slideContainer", 0, {z: 0})
        // animate to forth panel
        .to("#slideContainer", 0, {z: -1, delay: 1})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0, {z: 0, delay: 1});

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

    // define movement 
    let careerT1 = TweenMax
        .to(['.career-con1','.career-text1'],0.1,{opacity:0.4})
    // create scene
    let careerS1 = new ScrollMagic.Scene({
        triggerElement: ".career-con1",
        offset:300
      })
      .setTween(careerT1)
      .addTo(careerC)
      // .addIndicators({
      //   name: "text1"
      // });

    // define movement 
    let careerT2 = TweenMax
        .to(['.career-con2','.career-text2'],{opacity:0.4})
    // create scene
    let careerS2 = new ScrollMagic.Scene({
        triggerElement: ".career-con2",
        offset:300
      })
      .setTween(careerT2)
      .addTo(careerC)
      // .addIndicators({
      //   name: "text2"
      // }); 
    // define movement 
    let careerT2Img = TweenMax
        .to('.career-img2',{opacity:1})
    // create scene
    let careerS2Img = new ScrollMagic.Scene({
        triggerElement: ".career-con2",
        offset:-100
      })
      .setTween(careerT2Img)
      .addTo(careerC)
      // .addIndicators({
      //   name: "img2"
      // });      
    // define movement 
    let careerT3Img = TweenMax
        .to('.career-img3',{opacity:1})
    // create scene
    let careerS3Img = new ScrollMagic.Scene({
        triggerElement: ".career-con3",
        offset:-60,
      })
      .setTween(careerT3Img)
      .addTo(careerC)
      // .addIndicators({
      //   name: "img3"
      // });   
      
    // portfolio
    let portfolioC = new ScrollMagic.Controller();
    let portfolioT = TweenMax.staggerTo('.ePortfolio-con', 0.5,{
		y:-50
    },1);
    let portfolioS = new ScrollMagic.Scene({
		// 트리거 지정
        triggerElement: "#portfolio",
        duration: '100%'
	},0.3)
	// 애니메이션 오브젝트 추가
	.setTween(portfolioT)
	// 컨트롤러에 추가
	.addTo(portfolioC)
	// 인디케이터
	// .addIndicators({
	// 	name: "portfolio"
	// })
})