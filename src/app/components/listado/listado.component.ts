import { Component, OnInit } from '@angular/core';
import { AutosService, Auto } from 'src/app/services/autos.service';
import { GrillaComponent } from './../grilla/grilla.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listado: Array<Auto>;
  constructor(private http: AutosService) {}

  ngOnInit() {
    console.log('Llamo a traerAutos');
    this.CargarLista();
  }

  public CargarLista() {
    this.http.TraerAutos().subscribe((data: any) => {
      // console.log(data);
      this.listado = data.rta;
    });
  }

  Recargar(event) {
    console.log('Event de listado' + event);

    if (event === true) {
      this.CargarLista();
    }
  }
}
