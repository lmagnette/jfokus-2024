import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Dino } from '../../model/dino';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-dino-card',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
    MatIcon,
    MatBadge
  ],
  templateUrl: './dino-card.component.html',
  styleUrl: './dino-card.component.scss'
})
export class DinoCardComponent {



  @Input()
  dino!:Dino;

  like() {

  }
}
