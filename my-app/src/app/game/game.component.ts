import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
    private notPlayYet: boolean = true;
    private img = ['', 'assets/imgs/hand-rock.png', 'assets/imgs/hand-scissors.png', 'assets/imgs/hand-paper.png'];

  constructor() { }

  ReceivePlayAgain($event) {
      this.notPlayYet = $event;
      console.log("from scor", this.notPlayYet)
  }

  chifoumi(value) {
      //player choice
      let my_player = JSON.parse(localStorage.getItem('currentPlayer'));
      my_player.choice = value;
      my_player.img_choice = this.img[value];
      console.log(my_player.name, " choice :", my_player.choice);
      localStorage.setItem('currentPlayer', JSON.stringify(my_player));

      //cumputer choice (random)
      let robot = JSON.parse(localStorage.getItem('computerPlayer'));
      robot.choice = Math.floor((Math.random() * 3) + 1)
      robot.img_choice = this.img[robot.choice];
      console.log("computer choice :", robot.choice);
      localStorage.setItem('computerPlayer', JSON.stringify(robot));

      this.notPlayYet = false;
  }

}
