import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Cliente } from '../models/cliente.model';
import { Endereco } from '../models/endereco.model';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    private usuarios: Usuario[] = [
        { idUsuario: 1, tipoUsuario: 'Cliente' },
        { idUsuario: 2, tipoUsuario: 'Administrador' },
    ];

    private enderecos: Endereco[] = [
        { idEndereco: 1, cep: '12345-678', endereco: 'Rua A', numero: '100', bairro: 'Centro', cidade: 'Brusque', estado: 'SC', celular: '47998765432' },
        { idEndereco: 2, cep: '98765-432', endereco: 'Rua B', numero: '200', bairro: 'Bairro Alto', cidade: 'Blumenau', estado: 'SC', celular: '47987654321' },
    ];

    private clientes: Cliente[] = [
        { idCliente: 1, idPessoa: 2, idUsuario: 1, endereco: this.enderecos[0] },
        { idCliente: 2, idPessoa: 4, idUsuario: 1, endereco: this.enderecos[1] },
    ];

    private funcionarios: Funcionario[] = [
        { idFuncionario: 1, idPessoa: 1, idUsuario: 2, funcao: 'Gerente', nivelPermissao: 1 },
        { idFuncionario: 2, idPessoa: 3, idUsuario: 2, funcao: 'Atendente', nivelPermissao: 2 },
    ];

    constructor() {}

    getUsuarios(): Observable<Usuario[]> {
        return of(this.usuarios);
    }

    getClientes(): Observable<Cliente[]> {
        return of(this.clientes);
    }

    getEnderecos(): Observable<Endereco[]> {
        return of(this.enderecos);
    }

    getFuncionarios(): Observable<Funcionario[]> {
        return of(this.funcionarios);
    }
}
