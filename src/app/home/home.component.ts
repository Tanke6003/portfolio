// home.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header.component';
import { AboutMeComponent } from '../core/components/about-me/about-me.component';
import { ContactComponent } from "../core/components/contact/contact.component";
import { SocialComponent } from "../core/components/social/social.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent, AboutMeComponent, ContactComponent, SocialComponent]
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscripción al fragmento de la URL para desplazarse a la sección correspondiente
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });  // Desplazamiento suave
        }
      }
    });
  }
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(event: Event): void {
    //remove the fragment from the URL
    const url = window.location.href;
    const fragmentIndex = url.indexOf('#');
    if (fragmentIndex > -1) {
      const newUrl = url.substring(0, fragmentIndex);
      window.history.replaceState({}, document.title, newUrl);
    }
  }

}
