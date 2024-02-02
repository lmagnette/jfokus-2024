import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeavyComponentComponent } from '../heavy-component/heavy-component.component';
import { LoadingComponentComponent } from '../loading-component/loading-component.component';
import { PlaceholderComponentComponent } from '../placeholder-component/placeholder-component.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeavyComponentComponent,
    LoadingComponentComponent,
    PlaceholderComponentComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

}
