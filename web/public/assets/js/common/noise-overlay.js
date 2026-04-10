(function () {
  var canvas = document.getElementById("noise");
  if (!canvas) {
    return;
  }

  var ctx = canvas.getContext("2d");
  var wWidth;
  var wHeight;
  var noiseData = [];
  var frame = 0;
  var loopTimeout;

  function createNoise() {
    var idata = ctx.createImageData(wWidth, wHeight);
    var buffer32 = new Uint32Array(idata.data.buffer);
    var len = buffer32.length;

    for (var i = 0; i < len; i++) {
      if (Math.random() < 0.1) {
        buffer32[i] = 0xff000000;
      }
    }

    noiseData.push(idata);
  }

  function paintNoise() {
    frame = frame === 9 ? 0 : frame + 1;
    ctx.putImageData(noiseData[frame], 0, 0);
  }

  function loop() {
    paintNoise();
    loopTimeout = window.setTimeout(function () {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  }

  function setup() {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    noiseData = [];

    for (var i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  }

  var resizeThrottle;
  window.addEventListener(
    "resize",
    function () {
      window.clearTimeout(resizeThrottle);
      resizeThrottle = window.setTimeout(function () {
        window.clearTimeout(loopTimeout);
        setup();
      }, 200);
    },
    false
  );

  setup();
})();
