export interface Comanda {
    id?: number;
    dataAtendimento? : Date,
    nomeCliente: string,
    valor: number,
    comida?: string,
    bebida?: string,
    sobremesa?: string,
    funcionarioId : number
}