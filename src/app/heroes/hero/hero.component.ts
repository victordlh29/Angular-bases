import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string { return this.name.toUpperCase() };

  getHeroDescription(): string { return `${this.name} - ${this.age}` };

  changeHero(): void {
    this.name = 'Linterna verde';
  }

  changeAge(): void {
    this.age = 35;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

   /*  document.getElementAll('h1').array.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>';
    }); */
  }
}
