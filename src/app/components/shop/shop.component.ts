import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: true,
  imports: [CommonModule] // No se necesita HttpClientModule
})
export class ShopComponent {
  items = [
    { id: 1, name: 'Seed', price: 10 },
    { id: 2, name: 'Pot', price: 5 },
    { id: 3, name: 'Soil', price: 3 },
    { id: 4, name: 'Fertilizer', price: 7 },
    { id: 5, name: 'Pesticide', price: 8 }
  ];

  constructor(private gameService: GameService) {}

  buyItem(itemId: number, price: number): void {
    const playerId = 'some-player-id'; // Replace with actual player ID
    this.gameService.buyItem(playerId, itemId, price).subscribe(response => {
      console.log(response.message);
    });
  }
}
