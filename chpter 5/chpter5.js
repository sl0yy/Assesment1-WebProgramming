let sounds = [
  "ah-ha.mp3",
  "back-of-the-net.mp3",
  "bangoutoforder.mp3",
  "dan.mp3",
  "emailoftheevening.mp3",
  "hellopartridge.mp3",
  "iateascotchegg.mp3",
  "imconfused.mp3",
];

let soundboard = document.getElementById("soundboard");

sounds.forEach(sound => {
	let btn = document.createElement("button");
	btn.innerText = sound.replace(/-/g, " ").replace(".mp3", "");
	btn.addEventListener("click",() => playSound(sound));
	
	soundboard.appendChild(btn);
});

function playSound(sound) {
	let audio = new Audio(sound);

	audio.play();
}
