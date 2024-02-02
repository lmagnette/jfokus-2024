import { Component, inject, OnInit } from '@angular/core';
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
export default class DinoDetailsComponent implements OnInit{

  dinoId$ = routeNumberParam$('id');
  dino!:Dino;


  constructor(private dinoService: DinoService) {

  }

  ngOnInit() {
    this.dinoId$.subscribe(id => {
      this.dinoService.getDino(id).subscribe(dino => {
        this.dino = dino;
      });
    });
  }
}
