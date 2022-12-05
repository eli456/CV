import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Array<any> = [] ;

  constructor() { }

  ngOnInit(): void {


  let habilidad1 = {
    Nombre_Habilidad: "Java",
    Descripcion: "conocimiento basico del uso de Java",
    Anos_experiencia: "Años de experiencia: "+2,
    PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+60+"%"
  };

  let habilidad2 = {
  Nombre_Habilidad: "JavaScript",
  Descripcion: "Tengo conocimiento basico del uso de JavaScript",
  Anos_experiencia: "Años de experiencia: "+1,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
  };

  let habilidad3 = {
  Nombre_Habilidad: "HTML",
  Descripcion: "Tengo conocimiento basico del uso de HTML",
  Anos_experiencia: "Años de experiencia: "+2,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
  };


  let habilidad4 = {
  Nombre_Habilidad: "Diseño",
  Descripcion: "Conocimiento basico del uso de diseño",
  Anos_experiencia: "Años de experiencia: "+2,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
  };

 
    this.skills.push(habilidad1);
    this.skills.push(habilidad2);
    this.skills.push(habilidad3);
    this.skills.push(habilidad4);

}
}