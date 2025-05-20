let currentPet = 'elephant';

    const blinkFrames = {
      elephant: { open: "images/elephant_eyes_open.png", closed: "images/elephant_eyes_closed.png" },
    };

    function blink() {
      const petImg = document.getElementById("petImg");
      petImg.src = blinkFrames[currentPet].closed;
      setTimeout(() => {
        petImg.src = blinkFrames[currentPet].open;
      }, 200);
    }

    setInterval(() => {
      if (Math.random() < 0.5) blink();
    }, 5000);

    function changeBackground() {
      const bg = document.getElementById("bgSelect").value;
      document.body.style.backgroundImage = `url('${bg}')`;
    }

    function setPetName() {
      const name = document.getElementById("petName").value.trim();
      const nameDisplay = document.getElementById("displayName");
      const nameInputSection = document.querySelector(".name-input");

      if (name !== "") {
        localStorage.setItem("myPetName", name);
        nameDisplay.textContent = `🐾 ${name}`;
        nameInputSection.style.display = "none";
      }
    }

    window.onload = function () {
      const savedName = localStorage.getItem("myPetName");
      const nameDisplay = document.getElementById("displayName");
      const nameInputSection = document.querySelector(".name-input");

      if (savedName) {
        nameDisplay.textContent = `🐾 ${savedName}`;
        nameInputSection.style.display = "none";
      }
    };

    function toggleAccessory(id) {
      const el = document.getElementById(id);
      el.classList.toggle("hidden");
    }

    function feedPet() { showAction("🍪 Yum!"); }
    function waterPet() { showAction("💧 Slurp!"); }
    function bathePet() { showAction("🛁 Splash!"); }

    function putPetToSleep() {
      const petImg = document.getElementById("petImg");
      showAction("😴 Zzz...");
      petImg.src = `images/${currentPet}sleeping.png`;
      setTimeout(() => {
        petImg.src = blinkFrames[currentPet].open;
      }, 3000);
    }

    function showAction(message) {
      const bubble = document.createElement("div");
      bubble.textContent = message;
      bubble.style.position = "absolute";
      bubble.style.bottom = "180px";
      bubble.style.background = "rgba(255, 255, 255, 0.8)";
      bubble.style.padding = "6px 10px";
      bubble.style.borderRadius = "10px";
      bubble.style.fontSize = "14px";
      bubble.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
      bubble.style.animation = "fade 2s ease-out forwards";
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 2000);
    }