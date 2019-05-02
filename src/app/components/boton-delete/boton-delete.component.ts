import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-boton-delete',
  templateUrl: './boton-delete.component.html',
  styleUrls: ['./boton-delete.component.css']
})
export class BotonDeleteComponent {
  @Input() idAuto: string;
  @Output() public borrar = new EventEmitter<boolean>();

  constructor(private http: AutosService) { }

  public Eliminar(id: string) {
    // console.log('Eliminaré el id: ' + id);
    this.http.EliminarAuto(id).subscribe((rta: any) => {
      console.log('Respuesta de eliminar ', rta.rta);
      if (rta.rta.ok === 1) {
        console.log('Emito el evento desde Button');
        this.borrar.emit(true);
      }
    });
  }
}
