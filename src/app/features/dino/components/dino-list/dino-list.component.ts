import { Component } from '@angular/core';
import { DinoService } from '../../dino.service';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DinoCardComponent } from '../dino-card/dino-card.component';

@Component({
  selector: 'app-dino-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgOptimizedImage,
    NgIf,
    FormsModule,
    RouterLink,
    DinoCardComponent
  ],
  templateUrl: './dino-list.component.html',
  styleUrl: './dino-list.component.scss'
})
export default class DinoListComponent {

  dinos$ = this.dinoService.getDinos();

  constructor(private dinoService:DinoService) {
  }

}
