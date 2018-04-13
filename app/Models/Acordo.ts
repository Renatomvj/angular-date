import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Acordo {

    dataInicio: Date = new Date();
    dataFim: Date = new Date();
    faixa1: number = 0;

    private _faixa1Total: number = 0;
    public get faixa1Total(): number {        
        if ( typeof this.dataFim === 'string' ||
             typeof this.dataInicio === 'string') { return 0; }
        return this.faixa1 * (this.dataFim.getMonth() - this.dataInicio.getMonth());
    }
    public set faixa1Total(v: number) {
        this._faixa1Total = v;
    }

}