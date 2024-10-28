var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie"), // Required
    path: "data.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: false, // Optional
  });

  animation.addEventListener('DOMLoaded',() => {
    const hitbox = document.getElementsByClassName("hitbox").item(0);
    console.log(hitbox);

    hitbox.addEventListener('click', () => {
      animation.goToAndPlay(0);
      
    });
  });