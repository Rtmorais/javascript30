function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playSound);

window.addEventListener("keyup", function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.remove("playing");
});
