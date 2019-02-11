import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
    pick = ['Rock', 'Scissors', 'Paper'];

  constructor(protected router: Router) { }

  chifoumi(value) {
      //player choice
      let my_player = JSON.parse(localStorage.getItem('currentPlayer'));
      my_player.choice = value;
      console.log(my_player.name, " choice :", my_player.choice);
      localStorage.setItem('currentPlayer', JSON.stringify(my_player));

      //cumputer choice (random)
      let robot = JSON.parse(localStorage.getItem('computerPlayer'));
      var x = Math.floor(Math.random() * 3)
      robot.choice = this.pick[x];
      console.log("computer choice :", robot.choice);
      localStorage.setItem('computerPlayer', JSON.stringify(robot));

      this.router.navigate(['score']);

  }

}
