import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagination';
  currentImage = 0;

  checkImageIndex(index: number): boolean {
    return Math.abs(index - this.currentImage) < 5;
  }

  images = [
    {
      title: 'in the jungle 1',
      url: 'assets/images/1.jpg'
    },
    {
      title: 'in the jungle 2',
      url: 'assets/images/2.jpg'
    },    {
      title: 'in the jungle 3',
      url: 'assets/images/3.jpg'
    },    {
      title: 'in the jungle 4',
      url: 'assets/images/4.jpg'
    },
    {
      title: 'in the jungle 1',
      url: 'assets/images/1.jpg'
    },
    {
      title: 'in the jungle 2',
      url: 'assets/images/2.jpg'
    },    {
      title: 'in the jungle 3',
      url: 'assets/images/3.jpg'
    },    {
      title: 'in the jungle 4',
      url: 'assets/images/4.jpg'
    },
    {
      title: 'in the jungle 1',
      url: 'assets/images/1.jpg'
    },
    {
      title: 'in the jungle 2',
      url: 'assets/images/2.jpg'
    },    {
      title: 'in the jungle 3',
      url: 'assets/images/3.jpg'
    },    {
      title: 'in the jungle 4',
      url: 'assets/images/4.jpg'
    },
  ]
}
