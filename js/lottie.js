var animation_main = bodymovin.loadAnimation({
    container: document.getElementById("lottie1"), // Required
    path: "public/lotties/data.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });
  var animation_black = bodymovin.loadAnimation({
    container: document.getElementById("lottie2"), // Required
    path: "public/lotties/black.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });
  var animation_green = bodymovin.loadAnimation({
    container: document.getElementById("lottie3"), // Required
    path: "public/lotties/green.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });
  
  var animation_orange = bodymovin.loadAnimation({
    container: document.getElementById("lottie4"), // Required
    path: "public/lotties/orange.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });

  var animation_yellow = bodymovin.loadAnimation({
    container: document.getElementById("lottie5"), // Required
    path: "public/lotties/yellow.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });


  animation_yellow.addEventListener('DOMLoaded', () => {
    const hitbox_yellow = document.getElementsByClassName("yellow").item(0);
    console.log(hitbox_yellow);
    yellow_complete = true;
    animation_yellow.onComplete = () => { yellow_complete = true; };

    hitbox_yellow.addEventListener('click', () => {
      if(yellow_complete)animation_yellow.goToAndPlay(0);
      yellow_complete = false;
      
    });

    const hitbox_orange = document.getElementsByClassName("orange").item(0);
    console.log(hitbox_orange);
    orange_complete = true;
    animation_orange.onComplete = () => { orange_complete = true; };

    hitbox_orange.addEventListener('click', () => {
      if(orange_complete)animation_orange.goToAndPlay(0);
      orange_complete = false;
    });

    const hitbox_green = document.getElementsByClassName("green").item(0);
    console.log(hitbox_green);
    green_complete = true;
    animation_green.onComplete = () => { green_complete = true; };

    hitbox_green.addEventListener('click', () => {
      if(green_complete)animation_green.goToAndPlay(0);
      green_complete = false;
      
    });

    const hitbox_black = document.getElementsByClassName("black").item(0);
    console.log(hitbox_black);
    black_complete = true;
    animation_black.onComplete = () => { black_complete = true; };

    hitbox_black.addEventListener('click', () => {
      if(black_complete)animation_black.goToAndPlay(0);
      black_complete = false;
    });

    animation_black.play();
    black_complete = false;
    setTimeout(() => {
      animation_green.play();
      green_complete = false;
      setTimeout(() => {
        animation_orange.play();
        orange_complete = false;
        setTimeout(() => {
          animation_yellow.play();
          yellow_complete = false;
        }, 500);
      }, 500);
    }, 500);
    

  });