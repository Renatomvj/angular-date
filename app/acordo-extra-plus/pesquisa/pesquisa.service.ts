import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PesquisaService {

  emitirCursoCriado = new EventEmitter<string>();
  acordos: string[] = ['acordo1', 'acordo2', 'acordo3'];


  constructor() { }

  getAcordos()
  {
    return this.acordos;
  }

  addAcordo(acordo:string )
  {
    this.acordos.push(acordo);
    this.emitirCursoCriado.emit(acordo);
  }
}
