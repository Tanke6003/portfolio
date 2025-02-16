import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  name = 'Ruben Farias';
  
  themes = ['green-brown', 'soft-blue', 'royal-blue', 'purple'];
  selectedTheme = this.themes[0];
  constructor(private route: ActivatedRoute,private themeService:ThemeService) {}
  setTheme(theme:string): void {
    console.log(theme);
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
    //window.location.reload();
  }
  ngOnInit(): void {
    this.selectedTheme = window.localStorage.getItem('theme') || this.themes[0];
    this.themeService.setTheme(this.selectedTheme);

    // Suscripción al fragmento de la URL para desplazarse a la sección correspondiente
    
    this.route.fragment.subscribe(fragment => {
      fragment ="";
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });  // Desplazamiento suave
        }
      }
    });
  }
}
