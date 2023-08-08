import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada= new EventEmitter<Persona>();
  nombreInput:string=""; 
  apellidoInput:string=""; 

  agregarPersonal(): void{

    let persona1=new Persona(this.nombreInput, this.apellidoInput);
    //this.Personas.push(persona1); 
     this.personaCreada.emit(persona1);
  }


}
