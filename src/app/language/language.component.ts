import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  Lenguaje : Array<any> = [] ;
  constructor() { }

  ngOnInit(): void {

    let Idioma1 = {
      Nombre_Idioma: "Ingles",
      Nivel_dominio: "Intermedio",
      Tiempo_Uso: "Tiempo que se lleva aprendiendo el Idioma: "+ 5  + " Años"
    };

    this.Lenguaje.push(Idioma1);
  }

}