import { Endereco } from '../models/endereco.model';

export interface Cliente {
    idCliente: number;
    idPessoa: number;
    idUsuario: number;
    endereco: Endereco;
}
