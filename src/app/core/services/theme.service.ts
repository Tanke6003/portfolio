// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes = ['green-brown', 'soft-blue', 'royal-blue', 'royal-purple', 'purple'];

setTheme(theme: string) {
  if (!this.themes.includes(theme)) return; // Evita valores inválidos

  // Eliminar todas las clases de temas anteriores
  this.themes.forEach(t => document.body.classList.remove(t));

  // Agregar la nueva clase
  document.body.classList.add(theme);
  window.localStorage.setItem('theme', theme);

  }
}
