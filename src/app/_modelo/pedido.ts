export class Pedido{

    private _idPedido: number;    
    private _idCliente: number;    
    private _nombreCliente: string;    
    private _totalProductos: number;    
    private _importeTotal: number;   
    static idp: number =0;
    
    constructor(idCliente: number,nombreCliente: string, totalProductos: number,importeTotal: number){
        Pedido.idp++;
        this._idPedido = Pedido.idp;
        this._idCliente = idCliente;
        this._nombreCliente = nombreCliente;
        this._totalProductos = totalProductos;
        this._importeTotal = importeTotal;
    }

    public get idPedido(): number {
        return this._idPedido;
    }
    public set idPedido(value: number) {
        this._idPedido = value;
    }
    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }
    public get nombreCliente(): string {
        return this._nombreCliente;
    }
    public set nombreCliente(value: string) {
        this._nombreCliente = value;
    }
    public get totalProductos(): number {
        return this._totalProductos;
    }
    public set totalProductos(value: number) {
        this._totalProductos = value;
    }
    public get importeTotal(): number {
        return this._importeTotal;
    }
    public set importeTotal(value: number) {
        this._importeTotal = value;
    }
}