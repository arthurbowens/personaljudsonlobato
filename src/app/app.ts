import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly currentYear = new Date().getFullYear();

  /**
   * Substitua pelo seu número em formato internacional (ex.: 5591999999999),
   * sem +, espaços ou traços.
   */
  readonly whatsappUrl =
    'https://wa.me/5599999999999?text=Ol%C3%A1%2C%20Judson!%20Quero%20saber%20mais%20sobre%20treino%20personalizado.';
}
