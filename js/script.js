console.log("script is loading");

const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

let startIndex = 0;

function startAdventure(textAdventureIndex) {
  console.log("Adventure has started");
  showAdventureOptions(textAdventureIndex);
}

function showAdventureOptions(textAdventureID) {
  // check fisrt

  const newDescriptionText = textAdventure.find(
    (gameNode) => gameNode.id === textAdventureID
  );
  if (!newDescriptionText.options) {
    document.getElementById("first_btn").style.display = "none";

    descriptionText.innerHTML = newDescriptionText.message;

    document.getElementById("second_btn").innerHTML = "Play Again";
    return;
  }

  descriptionText.innerText = newDescriptionText.description;
  for (let i = 0; i < newDescriptionText.options.length; i++) {
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

function buttonOptions() {
  const adventureIndex = textAdventure.find(
    (gameNode) => gameNode.id === startIndex
  );

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons.addEventListener("click", function () {});
  }
}

function onPlay() {
  let ids = textAdventure.map((item) => {
    return item.id;
  });

  if (startIndex > ids.length - 1) {
    startIndex = 0;
  }

  // show
  showAdventureOptions(ids[startIndex]);
}

function onNextOption(event) {
  event.preventDefault();

  startIndex++;

  onPlay();
}

function onPlayAgain(event) {
  event.preventDefault();

  document.getElementById("first_btn").style.display = "inline";

  startIndex = 0;

  onPlay();
}


const textAdventure = [
  {
    id: 1,
    description:
      "Deep within a cave, a man woke up. The man only knew that his name was Percy, but he was clueless regarding his current location. Choose one of the options below",
    options: [
      {
        buttontext: "Head north",
        setState: { headback: true },
        nexttext: 2,
      },
      {
        buttontext: "Head west.",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 2,
    description:
      "Percy finds a river, but it's almost night time, what should Percy do now?",
    options: [
      {
        buttontext: "Follow the river southwards",
        setState: { headback: true },
        nexttext: 3,
      },
      {
        buttontext: "Head back to the cave.",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 3,
    description:
      "It is now night time and howls could be heard. What should Percy do?",
    options: [
      {
        buttontext: "Continue southwards.",
        setState: { headback: true },
      },
      {
        buttontext: "Wait until the sun comes out again before heading south again.",
        setState: { daylight: true },
        nexttext: 4,
      },
    ],
  },
  {
    id: 4,
    message: "Percy reunites with civilization!",
  },
];


onPlay();
