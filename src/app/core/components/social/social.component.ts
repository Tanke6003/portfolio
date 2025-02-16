import { Component } from '@angular/core';
export interface Social {
  name: string;
  url: string;
  icon: string;
  class: string;
  alt: string;
}
@Component({
  selector: 'app-social',
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
 socials: Social[] = [
    {
      name: 'Github',
      url: 'https://github.com/Tanke6003',
      icon: 'imgs/icons/github.svg',
      class: 'github',
      alt: 'Github'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ruben-de-jesus-farias-de-alba-198ba0211/',
      icon: 'imgs/icons/linkedin.svg',
      class: 'linkedin',
      alt: 'Linkedin'
    },
    {
      name:'Youtube',
      url: 'https://www.youtube.com/@ElRinconDeTuring',
      icon: 'imgs/icons/youtube.svg',
      class: 'youtube',
      alt: 'Youtube'
    }
 ];
}
