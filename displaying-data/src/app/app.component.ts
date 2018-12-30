import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `<h1>Tour of heroes: {{title}}</h1>
                <h2>{{myHero.name}}
                <ul>
                  <li *ngFor = "let hero of heroes">
                  {{hero.name}}
                  </li>
                </ul>
                <p *ngIf="heroes.length>3">There are many heroes!!!</p>
                <button (click)="deleteRequest()">Click me!</button>
                <input #another (keyup)="onKey(another.value)">
                <p>{{text}}</p>


                <input #box (keyup)="0">
                {{box.value}}


                <input #what (keyup.enter)="pressEnter(what.value)" (blur)="pressEnter(what.value)">
                <p>{{text}};

                <app-profile-editor></app-profile-editor>

                `,
  inputs: ['hero'],
  outputs: [''],
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  
  
  title = 'displaying-data';
  text = '';



  heroes = [
    new Hero(1, 'alpgha'),
    new Hero(2, 'beata'),
    new Hero(3, 'charles'),
    new Hero(4, 'dimbulb'),
  ]
  myHero = this.heroes[0];


  deleteRequest() {
    this.title = "Delete Request clicked!!!";
  }

  onKey(value: string) {
    this.text += value + "||";
  }

  pressEnter(value: string) {
    this.text += value;
  }
}

