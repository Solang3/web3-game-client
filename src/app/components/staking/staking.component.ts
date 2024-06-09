import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class StakingComponent {
  stakeAmount: number = 0;

  constructor(private gameService: GameService) {}

  stake(): void {
    const playerId = 'some-player-id'; // Replace with actual player ID
    this.gameService.stake(playerId, this.stakeAmount).subscribe(response => {
      console.log(response.message);
    });
  }
}
