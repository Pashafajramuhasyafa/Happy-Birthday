const emojis = [
  "💖",
  "💕",
  "✨",
  "🎂",
  "🌹",
  "💞",
  "🎈",
  "❤️",
  "💘",
  "🧸",
  "🌸"
];

const emojiContainer =
document.getElementById("emoji-container");

/* Floating Emoji */
for(let i = 0; i < 40; i++){

  const emoji =
  document.createElement("div");

  emoji.classList.add("floating");

  emoji.innerHTML =
  emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left =
  Math.random() * 100 + "vw";

  emoji.style.fontSize =
  (20 + Math.random() * 40) + "px";

  emoji.style.animationDuration =
  (6 + Math.random() * 10) + "s";

  emoji.style.animationDelay =
  Math.random() * 5 + "s";

  emojiContainer.appendChild(emoji);
}

/* Popup */
const popup =
document.getElementById("popup");

const popupImg =
document.getElementById("popup-img");

function openPhoto(src){

  popup.classList.add("active");

  popupImg.src = src;
}

function closePhoto(){

  popup.classList.remove("active");
}

/* Opening */
const opening =
document.getElementById("opening-screen");

const main =
document.getElementById("main-content");

/* Typing Text */
const text = `
🎂 Happy Birthday Sayangkuu 💖🥺

Hari ini adalah hari paling spesial,
karena seseorang yang paling cantik, paling manis,
dan paling bawel sedunia lahir 🌸✨🧸

Aku cuma mau bilang...
terima kasih karena sudah hadir di hidup aku 💞
Kamu itu seperti rumah yang selalu bikin nyaman 🏡❤️

Semoga di umur yang baru ini ✨
kamu selalu sehat 🤍
selalu bahagia 😆
selalu cantik 🌹
dan semua impian kamu bisa tercapai 🎀🎉

Kalau nanti dunia bikin kamu capek 😔
ingat yaa...
aku bakal selalu ada buat nemenin kamu 🫶💖

Terima kasih sudah bertahan sejauh ini 🥺
terima kasih sudah selalu sabar menghadapi aku 😭💘
dan terima kasih karena masih memilih aku sampai sekarang 💞✨

Aku berharap hubungan kita selalu dipenuhi tawa 😆💕
dipenuhi cerita lucu 🤍
dan dipenuhi banyak foto bareng sampai tua nanti 📸👫✨

Pokoknya...
jangan pernah berubah yaa 🥺🌸
tetap jadi perempuan manis yang selalu aku sayang 💖

🎉 Happy Birthday My Love 🎂💞

Aku sayang kamu lebih banyak dari emoji di website ini 😆❤️✨🌸💘🧸💕🎀
`;

const typingText =
document.getElementById("typing-text");

let index = 0;

function typeText(){

  if(index < text.length){

    typingText.innerHTML +=
    text.charAt(index);

    index++;

    setTimeout(typeText, 35);

  }

}

/* Open Website + Play Music */
function openWebsite(){

  // PLAY MUSIC
  const music =
  document.getElementById("bg-music");

  music.volume = 0.5;

  music.play();

  // OPEN ANIMATION
  opening.style.opacity = "0";

  opening.style.pointerEvents = "none";

  setTimeout(() => {

    opening.style.display = "none";

    main.style.opacity = "1";

    main.style.transform = "scale(1)";

    // START TYPING
    typeText();

  }, 1000);

}