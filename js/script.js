console.log("script is loading");

let adventureDescriptionText = document.querySelector(".adventure-description");
let optionButtons = document.getElementsByClassName("button");

function updateAdventureText() {
  adventureDescriptionText.innerText = textAdventure[0].text;
}

function updateOptions() {
  let i = 0;
  for(i; i < optionButtons.length; i++) {
    console.log(optionButtons[i]);
    optionButtons[i].innerText = textAdventure[0].options[i];
  }
}

const textAdventure = [
  {
    id: 1,
    text: 'Deep within a cave, a man woke up. The man only knew that his name was Percy, but he was clueless regarding his current location. Help Percy survive the unknown and reach human civilizaiton. Choose one of the options below',
    options: ["Head south and find the river" , "Go back to the bottom of the hill" ]
  },
]

updateAdventureText();
updateOptions();
