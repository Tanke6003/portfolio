import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  name = 'Ruben Farias';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
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
