export class Producto{

    

    id:number | undefined;
    nombre:string;
    valor:number;
    cantidad:number;

    constructor(name: string, valor: number, cantidad: number){
        this.nombre = name;
        this.valor = valor;
        this.cantidad = cantidad;
    }

   
}