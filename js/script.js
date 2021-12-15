console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

// function that starts the game
function startAdventure() {
  console.log("Adventure has started");
  showAdventureOptions(1);
}

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  const newDescriptionText = textAdventure.find(gameNode => gameNode.id === textAdventureID);
  descriptionText.innerText = newDescriptionText.description;
  
 // iterate through the buttons and insert the option text in each button
  for(let i = 0; i < newDescriptionText.options.length; i++) {
 //console.log(newDescriptionText.options[i].buttontext);
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function


// optional: function that shows end of the game


// create and object that holds the text for our game and options and also tracks state
const textAdventure = [
  {
    id: 1,
    description: 'Deep within a cave, a man woke up. The man only knew that his name was Percy, but he was clueless regarding his current location. Help Percy survive the unknown and reach human civilizaiton. Choose one of the options below',
    options: [
      {
        buttontext: "Move north",
        setState: { headback: true },
        nexttext: 2
      },
      {
        buttontext: "Move west",
        nextText: 2       
      }
    ]
  },
  {
    id: 2,
    description: 'Percy, discovers a river, but it is almost night time. What should Percy do now?',
    options: [
      {
        buttontext: "Follow the river down south",
        setState: { headback: true },
        nexttext: 3
      },
      {
        buttontext: "Return back to the cave and wait for the next day",
        nextText: 2       
      }
    ]
  },
  
];

startAdventure();
