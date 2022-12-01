export interface Entrega {
    id?: number;
    comandaId: number,
    dataPedido: Date,
    valorPedido?: number,
    endereco?: string,
    cidade?: string,
    pago : boolean
}