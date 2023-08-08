import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'List of People';
  Personas: Persona[]= [new Persona ( 'Juan' , 'Perez'), new Persona( 'Laura', 'Juarez')]
 
  personaAgregada(persona: Persona){
    this.Personas.push(persona); 
  }
   
}
