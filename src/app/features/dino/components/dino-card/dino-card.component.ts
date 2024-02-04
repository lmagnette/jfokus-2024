import { Component, effect, input, signal } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Dino } from '../../model/dino';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  dino = input.required<Dino>();

  likeCounter = signal<number>(0);

  constructor(private snackBar:MatSnackBar){
    effect(() => {
      const count = this.likeCounter();
      if(count>0){
        this.snackBar.open(`${this.dino().name} has been like ${count} times`,'',{duration:5000});
      }
    });
  }

  like() {
    this.likeCounter.update( value => value+1);
  }
}
