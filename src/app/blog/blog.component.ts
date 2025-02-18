import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  platforms = [
    {
      name: 'Notion',
      description: 'Notion es una herramienta todo en uno para tomar notas, gestionar proyectos y organizar información. Permite crear bases de datos, tareas, notas, y más.',
      elements: ['Páginas', 'Carpeta de plantillas', 'Barra lateral de navegación', 'Botones de acción'],
      analogy: 'Notion se puede comparar con un cuaderno. Las páginas dentro de la aplicación funcionan como hojas en un cuaderno que puedes llenar con diferentes tipos de contenido. La barra lateral actúa como el índice o separadores dentro del cuaderno, y los botones de acción son similares a las herramientas que usas en el cuaderno, como lápices o marcadores.',
      image: 'imgs/notion.png'
    },
    {
      name: 'Kindle',
      description: 'Kindle es un dispositivo de lectura de libros electrónicos que permite acceder a miles de títulos. Su interfaz está diseñada para simular la experiencia de leer en un libro físico.',
      elements: ['Páginas del libro', 'Marcadores y notas', 'Controles de navegación', 'Barra de progreso'],
      analogy: 'Kindle es similar a un libro físico. Las páginas en la pantalla son como las páginas de un libro, los marcadores y notas funcionan como post-its en los márgenes. Los controles de navegación son como el gesto físico de pasar las páginas y la barra de progreso actúa como un marcador.'
      ,image: 'imgs/kindle.png'
    },
    {
      name: 'Spotify',
      description: 'Spotify es una plataforma de música en streaming que permite escuchar canciones, playlists y estaciones de radio. Su interfaz facilita la búsqueda y reproducción de música.',
      elements: ['Listas de reproducción', 'Controles de reproducción', 'Barra de búsqueda', 'Portada de álbum'],
      analogy: 'Spotify puede compararse con un CD. Las listas de reproducción son como discos con diferentes canciones, los controles de reproducción son como los botones de un reproductor de CDs, la barra de búsqueda funciona como un indexador de canciones, y la portada del álbum es como la carátula del CD.'
      ,image: 'imgs/spotify.png'
    }
  ];
}
