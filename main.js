
debugger
var charName = prompt("What is your character Name?");
var charConfirm = confirm("ready to play " + charName + "?");
  if(charConfirm === true){
    var charLocation = prompt("where would you like to go? forest, mountains or dessert");
    switch (charLocation) {
      case "forest":
        alert("home of the ewoks!");
        alert("...but also big-ass talking spiders, cus we're mixing universes...");
        var forestChoice = prompt("Type a to fight 3 mouthy spiders or type b to see if the ewoks will help you");
          switch (forestChoice.toLowercase()) {
            case "a" || "A":
              alert("the spiders go on a diatribe of how time is like a 'web' and we are all caught in it.");
              alert("it renders all your attacks useless and you die of boredom.");
              alert("Game Over Man, Game Over");
              break;
            case "b" || "B":
              alert("you head toward the ewok village.");
              alert("a sparkling pool of water catches your eye. you bend over to take a drink. You touch the water...");
              alert("...and now you're trapped under the water likes its glass. WTF.");
              alert("You cannot get out. You drown!");
              alert("Game Over and if you got the 'Ewok Adventure' reference then you're a huge nerd and its a terrible movie")
              window.open("http://i.imgur.com/bmQOPTL.gif")
            default:

          }
        break;
      case "mountains":
        alert("I dunno trolls or something... Yeah the kind with the pointy hair");
        alert("You brush their hair and become a god of sorts");
        var mounatinChoice = prompt("Type ")
      case "dessert":
        alert("You basically made it to candy-land, you squanchy mother-f@*#er!");
        alert("sorry been watching a lot of 'Rick and Morty' lately...");

      default:
        alert("No its not desert. I meant what I meant. Also if you put anything else you a dumb-dumb and ended the game.")
        alert("Boo, Boo the player.")
        alert("Ok, you can go now...")
        setTimeout(function(){ alert("Just kidding... You Win!!!!"); }, 3000);
        // setTimeout(window.open("http://usvsth3m.com/wp-content/uploads/2013/08/nHyjdUb.gif"),2000);
        setTimeout(function() { window.open("http://usvsth3m.com/wp-content/uploads/2013/08/nHyjdUb.gif") }, 5000);
    }
  }else {
   alert("have a good day");
  }
