import { Component } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
export interface Social {
  name: string;
  url: string;
  icon: string;
  class: string;
  alt: string;
}
@Component({
  selector: 'app-network',
  imports: [],
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent {
  email: string = 'Ruben.Farias.1999@Outlook.es'
  showTooltip: boolean = false;
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
  constructor(private toastService:HotToastService) { }
 copyEmail(): void {
  console.log("copied");
  navigator.clipboard.writeText(this.email);
  let themeElement = document.querySelector('.theme');

  let background = getComputedStyle(document.body).getPropertyValue('--primary-color');
  let color = getComputedStyle(document.body).getPropertyValue('--font-white');
  console.log(background, color);
  console.log(themeElement);

  const showToast = () => {
    this.toastService.show('Email copied to clipboard', {
      icon: '📋',
      position: 'top-right',
      style: {
        background: background,
        color: color,
      },

    });
  };

  if (themeElement) {
    background = getComputedStyle(themeElement).getPropertyValue('--primary-color').trim();
    color = getComputedStyle(themeElement).getPropertyValue('--font-white').trim();
    console.log("sele", background, color);
    showToast();
  } else {
    const observer = new MutationObserver((mutations, obs) => {
      themeElement = document.querySelector('.theme');
      if (themeElement) {
        background = getComputedStyle(themeElement).getPropertyValue('--primary-color').trim();
        color = getComputedStyle(themeElement).getPropertyValue('--font-white').trim();
        console.log("sele", background, color);
        showToast();
        obs.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }


  }
}
