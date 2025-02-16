// home.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header.component';
import { AboutMeComponent } from '../core/components/about-me/about-me.component';
import { ContactComponent } from '../core/components/contact/contact.component';
import { NetworkComponent } from '../core/components/network/network.component';
import { ProjectsComponent } from "../core/components/projects/projects.component";
import { ThemeService } from '../core/services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent, AboutMeComponent, ContactComponent, NetworkComponent, ProjectsComponent,FormsModule]
})
export class HomeComponent implements OnInit {

  themes = ['green-brown', 'soft-blue', 'royal-blue', 'purple'];
  selectedTheme = this.themes[0];
  constructor(private route: ActivatedRoute,private themeService:ThemeService) {}

  
  ngOnInit(): void {
    this.selectedTheme = window.localStorage.getItem('theme') || this.themes[0];
    this.themeService.setTheme(this.selectedTheme);
    //this.themeService.setTheme(this.themes[0]);
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
