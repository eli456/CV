import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievements: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

      let achievements1 = {
        fecha: "2018",
        ubicacion: "Huatusco, Ver",
        puesto: "Diseñador de logos",
        empresa: "Compu Hollerith" 
      };
      let achievements2 = {
        fecha: "2017",
        ubicacion: "Huatusco, Ver",
        puesto: "Administrador",
        empresa: "CHS" 
      };
      let achievements3 = {
        fecha: "2015",
        ubicacion: "Huatusco, Ver",
        puesto: "Informatica",
        empresa: "CHS"
      };
      let achievements4 = {
        fecha: "2015",
        ubicacion: "Huatusco, Ver",
        puesto: "Diseño web",
        empresa: "CHS"
      };
      let achievements5 = {
        fecha: "2013",
        ubicacion: "Huatusco, Ver",
        puesto: "navigation",
        empresa: "CHS"
      };
  
      this.achievements.push(achievements1);
      this.achievements.push(achievements2);
      this.achievements.push(achievements3);
      this.achievements.push(achievements4);
      this.achievements.push(achievements5);
    }
  }

