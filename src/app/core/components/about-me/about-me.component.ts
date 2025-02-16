import { IMAGE_CONFIG } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
  ],
})
export class AboutMeComponent {
  //fecha de nacimiento
  birthDate: Date = new Date('1999-03-10');
  //first Year of the career
  firstYear: number = 2021;
  getAge(): number {
    const now = new Date();
    const diff = now.getTime() - this.birthDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  getExperience(): number {
    return new Date().getFullYear() - this.firstYear;
  }
}
