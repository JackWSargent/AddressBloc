const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){

    this.mainMenuQuestions = [
        {
         type: "list",
          name: "mainMenuChoice",
          message: "Please choose from an option below: ",
          choices: [
            "Add new contact",
            "Get Date",
            "Exit"
          ]
        }
      ];
      this.contacts = [];
   }

   getDate(){
       const date = new Date();
       let hours = date.getHours();
       let ampm = '';
       if(hours > 12) {
           hours = hours - 12;
           ampm = 'PM';
       } else {
           ampm = 'AM'
       }
    console.log(hours + ":" + (date.getMinutes()) + " " + ampm);
   }

   main(){
    console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Get Date":
            this.getDate();
            break;
         case "Add new contact":
           this.addContact();
           break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  clear(){
    console.log("\x1Bc");
  }
 }