export class Kardex{

    

    id:number | undefined;
    producto:string;
    operacion:string;
    cantidad:number;
    fecha:Date;

    constructor(producto: string,operacion: string,  cantidad: number, fecha:Date){
        this.producto = producto;
        this.operacion = operacion;
        this.cantidad = cantidad;
        this.fecha = fecha;
    }

   
}