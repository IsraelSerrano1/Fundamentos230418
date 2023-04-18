import { tipoProducto } from "./tipoProducto";
export class Producto{

    private _id: number;    
    private _nombre: string;    
    private _cantidad: number;    
    private _precio: number;    
    private _tipoProducto: tipoProducto;  
    static idc: number=0;    

    constructor(nombre: string, cantidad: number, precio: number, tipoProducto: tipoProducto){
        Producto.idc++;
        this._id= Producto.idc;
        this._nombre= nombre;
        this._cantidad= cantidad;
        this._precio= precio;
        this._tipoProducto= tipoProducto;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get tipoProducto(): tipoProducto {
        return this._tipoProducto;
    }
    public set tipoProducto(value: tipoProducto) {
        this._tipoProducto = value;
    }
    public get tipoProducto_1(): tipoProducto {
        return this._tipoProducto;
    }
    public set tipoProducto_1(value: tipoProducto) {
        this._tipoProducto = value;
    }
}