
var basicExports = require("./basicflash.js");
var clozeExports = require("./clozeflash.js");

//Inquirer
var inquirer = require('inquirer');

//fs
var fs = require('fs');

//ask user to select a flashcard type
var cardGenerator = function() {
    inquirer.prompt([{
        type: "list",
        name: "flashType",
        message: "What do you want to do?",
        choices: ["Create a basic flashcard", "Create a cloze flashcard" , "Play Basic Flash Card Game"]
    }]).then(function(answers) {

        switch (answers.flashType) {
            case "Create a basic flashcard":
                basicCreate();
                break;

            case "Create a cloze flashcard":
                clozeCreate();
                break;

            case "Play Basic Flash Card Game":

                playGame();
                break;

        }
    });
};

//user inputs for the basic flash card constructor
var basicCreate = function() {
    inquirer.prompt([{
            type: "input",
            message: "What do you want to put on the front of your card?",
            name: "question",
            default: ""
        },

        {
            type: "input",
            message: "What do you want to put on the back of your card?",
            name: "answer",
            default: ""
        }

    ]).then(function(input) {
        var NewBasic = new basicExports.BasicFlash(input.question, input.answer).writeBasicJSON();
        console.log("Here is your new flashcard:" + input.question +
   input.answer)
    });
};

// inputs for the cloze flashcard
var clozeCreate = function() {
    inquirer.prompt([{
            type: "input",
            message: "Please enter the entire question and answer",
            name: "text",
            default: ""
        },

        {
            type: "input",
            message: "Please enter the cloze answer",
            name: "cloze",
            default: ""
        }

    ]).then(function(input) {
        var NewCloze = new clozeExports.ClozeFlash(input.text, input.cloze).findCloze();         
    });
};


var playGame = function () {

fs.readFile('./basic.JSON',  'utf8' ,  function read(err, data) {
    if (err) {
  
        throw err;
    }
  
  // var obj = JSON.parse(data);

  var array = data.split('\r\n');
 
  var number = Math.round(Math.random()* array.length  - 1 );

  var question = JSON.parse(array[number]).question;

  var answer =JSON.parse(array[number]).answer;


inquirer.prompt([{
            type: "input",
            message: question,
            name: "text",
            default: ""
        },

    ]).then(function(input) {
       
      if( input.text.toLowerCase().trim() == answer.toLowerCase().trim()) {

        console.log("correct!");

        playGame();
    

    }

    else {

        console.log("incorrect")
        
        playGame();

      }


    });



});

};




cardGenerator();















































