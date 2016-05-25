
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
          switch (forestChoice) {
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
              alert("Game Over and if you got the 'Ewok Adventure' reference then you're a huge nerd and its a terrible movie");
              window.open("http://i.imgur.com/bmQOPTL.gif");
            default:
              alert("You can't follow instructions so spider-riding Ewoks poke you to death while singing 'nub-nub'");

          }
        break;
      case "mountains":
        alert("I dunno you find trolls or something... Yeah the kind with the pointy hair...");
        alert("You brush their hair and they offer you to become a god of sorts");
        var mounatinChoice = prompt("Type a to accept this mantle of responsibility, type b to run away");
          switch (mounatinChoice) {
            case "a":
              alert("You are Lisa Frank Reborn!!!");
              alert("May the world tremble at your multi-colored trapper-keepers!!!");
              alert("But Game Over cus I said so")
              window.open("https://media.giphy.com/media/FTEfzFmrBkbqU/giphy.gif");
              break;
            case "b":
              alert("The trolls are displeased with your selfish choice.");
              alert("They place a curse on you");
              alert("Many years later drown in the shower because the drain was clogged with HAIR!")
              alert("U ded, u lose.");
              window.open("https://www.youtube.com/watch?v=BqeQmkI7tFI")
            default:
              alert("a or b dummy. Its not that hard you lose.");

          }
      case "dessert":
        alert("You basically made it to candy-land, you squanchy mother-f@*#er!");
        alert("sorry been watching a lot of 'Rick and Morty' lately...");
        var dessertChoice = prompt("You like candy right?");
          if (dessertChoice === "yes") {
            alert("you got the diabeetus!");
            window.open("https://media.giphy.com/media/KXlv7s9XOReLe/giphy.gif");
          }else {
            alert("you still got the diabeetus. Because I'm a lazy writer.");
            window.open("https://media.giphy.com/media/KXlv7s9XOReLe/giphy.gif");
          }

      default:
        alert("No its not desert. I meant what I meant. Also if you put anything else you a dumb-dumb and ended the game.")
        alert("Boo, Boo the player.")
        alert("Ok, you can go now...")
        setTimeout(function(){ alert("Just kidding... You Win!!!!"); }, 3000);
        // setTimeout(window.open("http://usvsth3m.com/wp-content/uploads/2013/08/nHyjdUb.gif"),2000);
        setTimeout(function() { window.open("http://usvsth3m.com/wp-content/uploads/2013/08/nHyjdUb.gif") }, 4000);
    }
  }else {
   alert("have a good day");
  }
