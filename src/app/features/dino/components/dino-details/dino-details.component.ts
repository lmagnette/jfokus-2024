import { Component, DestroyRef, effect, input, numberAttribute } from '@angular/core';
import { DinoService } from '../../dino.service';
import { Dino } from '../../model/dino';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-dino-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './dino-details.component.html',
  styleUrl: './dino-details.component.scss'
})
export default class DinoDetailsComponent{

  id=input.required<number,string>({transform:numberAttribute});
  dino!:Dino;


  constructor(private dinoService: DinoService, private destroyRef:DestroyRef) {
    effect(() => {
      const id = this.id();
      if(id) {
        this.dinoService.getDino( id )
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe( dino => {
            this.dino = dino;
          } );
      }
    })
  }

}
