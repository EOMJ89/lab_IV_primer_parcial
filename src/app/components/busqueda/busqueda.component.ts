import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Auto, AutosService } from "src/app/services/autos.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit {
  @Output() public buscar = new EventEmitter<Auto[]>();
  public busquedaGroup: FormGroup;

  constructor(private http: AutosService) {}

  ngOnInit() {
    this.busquedaGroup = new FormGroup({
      apellido: new FormControl("", [Validators.required])
    });
  }

  public Buscar() {
    console.log(this.busquedaGroup.value);
    // console.log(apellido);
    const apellido: string = this.busquedaGroup.value.apellido;

    this.http.TraerAutos().subscribe((data: any) => {
      console.log(data);
      const arrAutos = data.rta;
      const auxArr: Array<Auto> = new Array<Auto>();

      for (const auto of arrAutos) {
        console.log(auto);
        if (auto.apellido === apellido) {
          auxArr.push(auto);
        }
      }

      this.buscar.emit(auxArr);
    });
  }
}
