import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
export interface Project {
  title: string;
  description: string;
  image: string;
  repository: string;
  details: string;
  demo: string;
}

@Component({
  selector: 'app-projects',
  imports: [RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'My GitHub',
      description: 'Este es mi github personal donde subo mis proyectos personales y colaborativos.',
      image: 'imgs/mygithub.png',
      repository: 'https://github.com/tu-repo',
      details: '/details/1',
      demo: 'https://tu-demo.com'
    },
    {
      title: 'Otro Proyecto',
      description: 'Otra descripción...',
      image: 'imgs/mygithub.png',
      repository: 'https://github.com/otro-repo',
      details: '/details/2',
      demo: 'https://otro-demo.com'
    },
    {
      title: 'My GitHub',
      description: 'Este es mi github personal donde subo mis proyectos personales y colaborativos.',
      image: 'imgs/mygithub.png',
      repository: 'https://github.com/tu-repo',
      details: '/details/1',
      demo: 'https://tu-demo.com'
    }
  ];

}
