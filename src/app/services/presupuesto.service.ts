import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number;
  restante: number;
  private gastos$= new Subject<any>(); // esto es un observable

  constructor() { 
    this.presupuesto= 0;
    this.restante= 0;
  }

  agregarGasto(gasto: any){
    this.restante= this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  getGastos(): Observable<any>{
      return this.gastos$.asObservable();
  }
}
