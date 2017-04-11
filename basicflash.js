var fs = require('fs');
//Create basic card

var BasicFlash = function(question, answer) {
    // question
    this.question = question;
    // answer
    this.answer = answer;
    console.log("Question: " + this.question + "Answer: " + this.answer);
};



//code for creating the new basic flash card
// BasicFlash.prototype.writeBasic = function() {
//     //saves to basic.txt file 
//     fs.appendFile("basic.txt", JSON.stringify(this) + '\r\n' , function(err) {
//         if (err) {
//             console.log(err);
//         };
//         console.log("A Basic flash card was added to the text file")


//     });

BasicFlash.prototype.writeBasicJSON = function() {
    //saves to basic.txt file 
    fs.appendFile("basic.JSON",  JSON.stringify(this) + "\r\n" , "utf8" , function(err) {
        if (err) {
            console.log(err);
        };
        console.log("A Basic flash card was added to the text file");


    });

};


module.exports = {BasicFlash};

