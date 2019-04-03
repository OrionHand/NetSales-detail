import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class SumaryService {

    private bus : Tarjeta[] =[
        
    {
        id:"total",
        ydt: 43,
        ydtvsp:56,
        ydtvsya:34,
        fy:45,
        fyvsp:45,
        fyvsya:56,
        fyytg:34

    },
    {
        id:"afc",
        ydt: 40,
        ydtvsp:56,
        ydtvsya:34,
        fy:45,
        fyvsp:45,
        fyvsya:56,
        fyytg:34

    },
    {
        id:"bcc",
        ydt: 42,
        ydtvsp:56,
        ydtvsya:34,
        fy:45,
        fyvsp:45,
        fyvsya:56,
        fyytg:34

    },
    {
        id:"fc",
        ydt: 47,
        ydtvsp:56,
        ydtvsya:34,
        fy:45,
        fyvsp:45,
        fyvsya:56,
        fyytg:34

    }
];
private cdc : Tarjeta[] =[

   {  
    nombre:"Dependen Garments",
    ydt: 42,
    ydtvsp:56,
    ydtvsya:34,
    fy:45,
    fyvsp:45,
    fyvsya:56,
    fyytg:34

},
{
    nombre:"Poise Fem Inco",
    ydt: 47,
    ydtvsp:56,
    ydtvsya:34,
    fy:45,
    fyvsp:45,
    fyvsya:56,
    fyytg:34

}


];
getSumary(){
    return this.bus;

}

getBu(termino:string){

    let sumaryArr:Tarjeta[] = [];

    for ( let bu of this.bus){

        let id = bu.id;

        if( id.indexOf( termino) === 0){
            sumaryArr.push (bu)
        }
    }

    return sumaryArr;

}

getCDC(){
    return this.cdc;
}

}


export interface Tarjeta {
    nombre ?:string;
    id?: string;
    ydt:number;
    ydtvsp:number;
    ydtvsya:number;
    fy:number;
    fyvsp:number;
    fyvsya:number;
    fyytg:number;


  }