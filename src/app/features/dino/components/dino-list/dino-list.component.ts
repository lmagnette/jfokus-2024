import { Component, computed, signal } from '@angular/core';
import { DinoService } from '../../dino.service';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DinoCardComponent } from '../dino-card/dino-card.component';
import { toSignal } from '@angular/core/rxjs-interop';


@Component( {
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
} )
export default class DinoListComponent {

  searchTerm = signal<string>( '' );

  dinos = toSignal(this.dinoService.getDinos());

  filteredDinos = computed(() => {
    const dinos = this.dinos() || [];
    return dinos.filter( dino => dino.name.toLowerCase().includes(this.searchTerm().toLowerCase()));
  })

  constructor( private dinoService: DinoService ) {
  }

  searchTermChanged( value: string ) {
    this.searchTerm.set(value);
  }

}
