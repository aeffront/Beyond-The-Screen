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
  var animation_yellow = bodymovin.loadAnimation({
    container: document.getElementById("lottie4"), // Required
    path: "public/lotties/yellow.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });
  var animation_orange = bodymovin.loadAnimation({
    container: document.getElementById("lottie5"), // Required
    path: "public/lotties/orange.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });


  animation_orange.addEventListener('DOMLoaded', () => {
    const hitbox_yellow = document.getElementsByClassName("yellow").item(0);
    console.log(hitbox_yellow);

    hitbox_yellow.addEventListener('click', () => {
      animation_yellow.goToAndPlay(0);
    });

    const hitbox_orange = document.getElementsByClassName("orange").item(0);
    console.log(hitbox_orange);

    hitbox_orange.addEventListener('click', () => {
      animation_orange.goToAndPlay(0);
    });

    const hitbox_green = document.getElementsByClassName("green").item(0);
    console.log(hitbox_green);

    hitbox_green.addEventListener('click', () => {
      animation_green.goToAndPlay(0);
    });

    const hitbox_black = document.getElementsByClassName("black").item(0);
    console.log(hitbox_black);

    hitbox_black.addEventListener('click', () => {
      animation_black.goToAndPlay(0);
    });
  });