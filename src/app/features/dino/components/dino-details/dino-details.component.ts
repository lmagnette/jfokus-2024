import { Component, DestroyRef, effect, inject, input, Input, numberAttribute, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DinoService } from '../../dino.service';
import { Dino } from '../../model/dino';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export const routeNumberParam$ = (key:string) => {
  return inject(ActivatedRoute).paramMap.pipe(
    map(params => Number.parseInt(params.get(key) || '1'))
  );
}

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
