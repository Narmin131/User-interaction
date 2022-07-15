
    let button = document.querySelector(".button");
    let reverse = document.querySelector(".reverse");
    let t1 = gsap.timeline({ paused: true, reversed: true });

    button.addEventListener("click", (e) => {
      t1.play();
    });

    reverse.addEventListener("click", (e) => {
      t1.reverse();
    });

    //Screen 1 Arrow Rotation
    t1.to(".button svg", {
      ease: "power1.inOut",
      rotate:90,
    });

    //Screen 1 Arrow Rotation Hide
    t1.to(".button svg", {
      ease: "power1.inOut",
      duration: 0.2,
      y: -10,
      opacity: 0,
    });

    //Screen 1 Arrow Rotation Y axis moving Position
    t1.to(".button", {
      ease: "power1.inOut",
      yPercent: 114,
    });

    // Screen 1 Image Height Scale Transition
    t1.to(
      ".top",
      {
        ease: "power1.inOut",
        height: 380,
      },
      0.6
    );

    t1.to(
      ".top img",
      {
        ease: "power1.inOut",
        scale: 1.2,
        yPercent: 40,
      },
      0.8
    );

    // Screen 1 Article Fetching 
    t1.to(
      ".button",
      {
        ease: "power1.inOut",
        yPercent: 166,
        borderRadius: 0,
        scaleX: 10,
        scaleY: 2.6,
      },
      1.1
    );

    t1.from(".loading", {
      ease: "power1.inOut",
      opacity: 0,
      y: 50,
    });

    t1.to(".loading", {
      ease: "power1.inOut",
      opacity: 0,
      x: 200,
      delay: 0.5,
    });

    // Next Screen BG Duration
    t1.from(".next-screen", {
      ease: "power1.inOut",
      yPercent: 100,
      duration: .5,
    });

    // Next Screen top SVG Arrow Duration
    t1.from(".next-screen svg", {
      ease: "power1.inOut",
      xPercent: -250,
      duration: 0.5,
    }); 
    
    // Next Screen H1 Heading Duration
    t1.from(".next-screen h1", {
      ease: "power1.inOut",
      scale: 0,
      opacity: 0,
      duration: 0.3,
    }); 

    // Next Screen Banner Duration
    t1.from(".header", {
      ease: "power1.inOut",
      scale: 0,
      opacity: 0,
      duration: 0.3,
    }); 

    // Next Screen Paragraph Duration
    t1.from(".next-screen p", {
      ease: "power1.inOut",
      scale: 0,
      opacity: 0,
      duration: 0.3,
    }); 

    t1.to(".container", {
      ease: "power1.inOut",
      backgroundColor: "#101010",
      duration: 0.1,
    });

    // Next Screen Entire section X & Y axis Duration
    t1.to(".next-screen", {
      ease: "power1.inOut",
      yPercent: -5,
      duration: 1,
    }); 

    t1.to(".next-screen", {
      ease: "power1.inOut",
      yPercent: 0,
      duration: 1,
    }); 
