import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
    player: Player;
    computer: Player;

    constructor(protected router: Router) {
      this.player = new Player();
      this.player.id = 2;
      this.player.choice = 0;
      this.player.img_choice = '';
      this.player.score = 0;
      this.computer = new Player();
      this.computer.id = 1;
      this.computer.choice = 0;
      this.player.img_choice = '';
      this.computer.score = 0;
      this.computer.name = "computer";
    }

    create() {
      let my_player = this.player;
      let robot = this.computer;
      if (my_player.name && my_player.name.length != 0) {
          localStorage.setItem('currentPlayer', JSON.stringify(my_player));
          localStorage.setItem('computerPlayer', JSON.stringify(robot));

          this.router.navigate(['game']);
          return;
      }
      console.log("please enter your name");
    }
}
