document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".kapstan-track").forEach(function (track) {
    if (track.dataset.marqueeReady === "1") {
      return;
    }

    track.dataset.marqueeReady = "1";
    Array.from(track.children).forEach(function (item) {
      track.appendChild(item.cloneNode(true));
    });
  });
});
