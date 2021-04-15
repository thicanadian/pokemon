var playing=true //declares an initial variable for the first while statement
while(playing===true) { //while statement that encompasses the entire game
  var initial=true //another variable that represents a part of the game
  var oppHealth=100 //sets and resets the users health when game starts or restarts
  var userHealth=100//does the same thing as the previous variable, instead for the opponents health
  var quit=false //declares a variable that needs to be false for the game to wor but will change later on
  while(initial===true) { //while statement for most of the game except for the part that helps reset the game
     while (initial===true&&(oppHealth>0&&userHealth>0&&initial===true&&quit!=true)) { //same description as the last
     var pokemon = prompt('AYou must pick a pokemon, you have the choice between:\nCharizard - Ability Fire slam: 40 damage, -50 energy per use\nPikachu - +20 energy\nBulbasaur - +25 health') //prompts the user for their choice in pokemon
     pokemon = pokemon.toLowerCase() //turns whatever the user entered into the prompt to lowercase to make it more recognizable by the program
     while(initial===true&&(pokemon!='charizard'&&pokemon!='pikachu'&&pokemon!='bulbasaur'&&quit!=true)) { //while statement that re-prompts the user if their input was incorrect
       var restart=confirm('Wrong input, would you like to try again?') //confirm statement telling them their input was wrong and asking if they would lke to try again
       if (restart===true) { //if statement that responds to the value of the previous confirm statements
         var pokemon = prompt('BYou must pick a pokemon, you have the choice between:\nCharizard - Ability Fire slam: 40 damage, -50 energy per use\nPikachu - +20 energy\nBulbasaur - +25 health')
         pokemon=pokemon.toLowerCase()
       } else {
         var quit=confirm('Are you sure you would like to quit?') //prompt that's queued when the user enters an incorrect input
         if(quit===true) {//if statement that checks the previous variable and stops the program if the user wants to quit
          initial=false
          quit=true
        } else {
          initial=true
       }
     }
     }
     var energy = 90 // energy variable thats set to 90 rather than 100 as to compensate for the +10 energy given every round
     if (pokemon==='charizard') { // gives esclusive abilities depending on which pokemon was chosen
       var fireSlam='\nFire Slam: 40 Damage | -50 Energy'
     } else if(pokemon==='pikachu') {
       energy=energy+20
     } else if(pokemon==='bulbasaur') {
       userHealth=userHealth+25
     } else {
     }
     if (pokemon!='charizard') { // this just helps formatting the prompt
       fireSlam=''
     }
     while(oppHealth>0&&userHealth>0&&initial===true) {
     energy=energy+10
     var attack = prompt(`It is your turn to attack, choose between your abilities. Keep in mind, each ability takes a certain amont of energy to use, you agin 10 energy at the start of each round.\nRoundhouse kick: 15-20 Damage | -20 Energy\nDash Attack: 20 Damage | -25 Energy\nDrop Kick Attack: 25-30 Damage | -35 Energy${fireSlam} \nYou have ${energy} energy\nYou can type "skip" if you are out of energy to skip your turn`) // gives the user all the information needed to determine their move, including energy
     attack = attack.toLowerCase() // converts the user input to lowercase
     while(attack!=('fire slam'||'roundhouse kick'||'dash attack'||'drop kick attack')&&quit===true) { // checks if the input from the user is an actual move and asks them to try again
       var restart=confirm('Wrong input, would you like to try again?')
       if (restart===true) {
         var pokemon = prompt(`It is your turn to attack, choose between your abilities. Keep in mind, each ability takes a certain amont of energy to use, you agin 10 energy at the start of each round.\nRoundhouse kick: 15-20 Damage | -20 Energy\nDash Attack: 20 Damage | -25 Energy\nDrop Kick Attack: 25-30 Damage | -35 Energy${fireSlam} \nYou have ${energy} energy\nYou can type "skip" if you are out of energy to skip your turn`)
         attack=attack.toLowerCase()
       } else {
         var quit=confirm('Are you sure you would like to quit?') // if the user chooses to not try again this variable allows them to quit the game
       }
     }
     var fireAttack=Math.round(Math.random()*5)+15 //these 4 lines determine or set the damage output for each move
     var dashAttack=20
     var dropAttack=Math.round(Math.random()*5)+25
     var fireSlamAttack=40
     if (attack==='roundhouse kick') { // checks which attack was used by the user and applys the damage to the opponents health
     oppHealth=oppHealth-fireAttack
     energy=energy-20
    } else if (attack==='dash attack') {
     oppHealth=oppHealth-dashAttack
     energy=energy-25
    } else if (attack==='drop kick attack') {
     oppHealth=oppHealth-dropAttack
     energy=energy-35
    } else if (fireSlam!=false&&attack==='fire slam') {
      oppHealth=oppHealth-fireSlamAttack
      energy=energy-50
    } else if (attack==='skip') { //option to skip turn if the user is low on energy
    } 
    if (oppHealth<=0&&quit!=true) { // checks the opponents health and the status of the game from the "quit" variable, if the conditions are met for the user to win, it is alerted
      var restart=confirm("You won! Would you like to play again?") //restart function does'nt work, need to move on from bottleneck
      if (restart===true) {
        initial=false
        playing=true
      }
    } else if(oppHealth>0&&quit!=true) {
      alert("the opponents health is " + oppHealth) // tells the user the opponents health if it is above 0
    }
     if(quit===true) {//quit statement
      initial=false
    } else {
      initial=true
    }
     var oppAttack=Math.round(Math.random()*2)+1 // random number generator to determine the opponents move
     var fireAttack=Math.round(Math.random()*5)+15 // these 3 lines are the opponents attacks
     var dashAttack=20
     var dropAttack=Math.round(Math.random()*5)+25
     if (oppAttack===1) { // checks what number was generated and correlates an attack to it and then applies the damage to the users health.
     userHealth=userHealth-fireAttack
    } else if (oppAttack===2) {
     userHealth=userHealth-dashAttack
    } else {
     userHealth=userHealth-dropAttack
    }
    if (userHealth<=0&&quit!=true) { // checks the conditions for an opponent win, if the opponents does win, the user is asked if they would like to play again and the program is reset.
      var restart=('You lost. Would you like to play again?')
      confirm(restart)
      if (restart===true) {
        playing=true
        initial=false
      }
    } else {
    }
    }
  }
}
alert(playing)
}
alert(playing)