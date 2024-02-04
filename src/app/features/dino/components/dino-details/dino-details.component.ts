import { Component, inject, Input, numberAttribute, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DinoService } from '../../dino.service';
import { Dino } from '../../model/dino';
import { NgIf, NgOptimizedImage } from '@angular/common';

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
export default class DinoDetailsComponent implements OnChanges{

  @Input({required:true, transform:numberAttribute})
  id!:number;
  dino!:Dino;


  constructor(private dinoService: DinoService) {

  }

  ngOnChanges() {
    if(this.id) {
      this.dinoService.getDino( this.id ).subscribe( dino => {
        this.dino = dino;
      } );
    }
  }
}
