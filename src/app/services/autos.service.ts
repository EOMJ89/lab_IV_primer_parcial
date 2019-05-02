import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Auto {
  _id: string;
  // id: string;
  nombre: string;
  apellido: string;
  email: string;
  legajo: number; // Validar entre 1000 y 2000
  sueldo: number; // Validar entre 10000 y 150000
  sexo: string; // Validar "femenino", "masculino", "otro"
  RutaDeFoto: string;
}

@Injectable({
  providedIn: "root"
})
export class AutosService {
  constructor(private httpClient: HttpClient) {}

  public TraerAutos() {
    return this.httpClient.get("http://192.168.2.30:3003/empleados");
  }

  public AñadirAuto(data: any) {
    return this.httpClient.post("http://192.168.2.30:3003/empleados/", data);
  }

  public EliminarAuto(idAux: any) {
    return this.httpClient.delete("http://192.168.2.30:3003/empleados/" + idAux);
  }
}
