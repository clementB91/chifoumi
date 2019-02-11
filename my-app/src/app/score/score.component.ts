import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent{
    text = "";
    player: Player;
    computer: Player;

    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.player = JSON.parse(localStorage.getItem('currentPlayer'));
        this.computer = JSON.parse(localStorage.getItem('computerPlayer'));
        if (this.player.choice === this.computer.choice) {
            this.text = 'Draw';
        }
        else if ((this.player.choice === 'Rock' && this.computer.choice === 'Scissors')
                || (this.player.choice === 'Scissors' && this.computer.choice === 'Paper')
                || (this.player.choice === 'Paper' && this.computer.choice === 'Rock')) {
                    this.text = ' You Win !!'
                    this.player.score += 1;
                    localStorage.setItem('currentPlayer', JSON.stringify(this.player));
                }
        else {
            this.text = ' Computer Win !!'
            this.computer.score += 1;
            localStorage.setItem('computerPlayer', JSON.stringify(this.computer));
        }

     }

}
