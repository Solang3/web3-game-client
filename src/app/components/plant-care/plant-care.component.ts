import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

interface PlantEvent {
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-plant-care',
  templateUrl: './plant-care.component.html',
  styleUrls: ['./plant-care.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PlantCareComponent {
  events: PlantEvent[] = []; // Define el tipo del arreglo events

  constructor(private gameService: GameService) {}

  waterPlant(): void {
    this.addEvent('Watered the plant');
  }

  applyFertilizer(): void {
    this.addEvent('Applied fertilizer');
  }

  applyPesticide(): void {
    this.addEvent('Applied pesticide');
  }

  triggerRandomEvent(): void {
    const playerId = 'some-player-id'; // Replace with actual player ID
    this.gameService.triggerRandomEvent(playerId).subscribe(response => {
      this.addEvent(response.message);
    });
  }

  private addEvent(message: string): void {
    const event: PlantEvent = { message, timestamp: new Date() }; // Define el tipo del objeto event
    this.events.push(event);
  }
}
