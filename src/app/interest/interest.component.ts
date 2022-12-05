import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  Gustos : Array<any> = [] ;
  constructor() { }

  ngOnInit(): void {

    let Interes1 = {
      Nombre_gusto: "Videojuegos",
      Descripcion_gusto: "Por diversion",
      Tiempo_gusto: "Me gustan los videojuegos desde que tengo "+15+" años."
      };

      let Interes2= {
        Nombre_gusto: "Andar en bici",
        Descripcion_gusto: "Me gusta salir a tomar aire.",
        Tiempo_gusto: "Me gusta desde los "+6+" años."
        };

        let Interes3= {
          Nombre_gusto: "Dibujo en digital",
          Descripcion_gusto: "En la prepa lleva algo similar.",
          Tiempo_gusto: "Me gusta desde los"+16+" años."
          };

          let Interes4= {
            Nombre_gusto: "Anime",
            Descripcion_gusto: "Me gusta la voz de personajes.",
            Tiempo_gusto: "Me gusta desde los"+77+" años."
            };

        this.Gustos.push(Interes1);
        this.Gustos.push(Interes2);
        this.Gustos.push(Interes3);
        this.Gustos.push(Interes4);
  }

}