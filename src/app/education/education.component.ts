import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion : Array<any> = [] ;
  constructor() { }
  ngOnInit(): void {
  let escuela1 = {
    Nombre: "Escuela Primaria Leonardo Bravo",
    Ubicacion: "Huatusco, Ver",
    Promedio: "Promedio: "+8.0,
    Años_estudio: "Años de estudio: "+6
};

let escuela2 = {
  Nombre: "Escuela Secundaria Técnica Industrial No 144",
  Ubicacion: "Huatusco, Ver",
  Promedio: "Promedio: "+ 8.0,
  Años_estudio: "Años de estudio: "+3
};

let escuela3 = {
  Nombre: "Bachilleres Gral, Francisco J. Múgica",
  Ubicacion: "Huatusco, Ver",
  Promedio: "Promedio: "+8.0,
  Años_estudio: "Años de estudio: "+3
};

let escuela4 = {
  Nombre: "Universidad Veracruzana",
  Ubicacion: "Ixtaczoquitlán, Ver.",
  Promedio: "Promedio: "+8,
  Años_estudio: "Años de estudio: "+4
};

this.educacion.push(escuela1);
this.educacion.push(escuela2);
this.educacion.push(escuela3);
this.educacion.push(escuela4);

}
}
