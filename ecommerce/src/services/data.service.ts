import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Cliente } from '../models/cliente.model';
import { Endereco } from '../models/endereco.model';
import { Funcionario } from '../models/funcionario.model';
import { Produto } from '../models/produto.model'; // Importa o modelo de Produto

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Lista de usuários pré-definidos
  private usuarios: Usuario[] = [
    { idUsuario: 1, tipoUsuario: 'Cliente' },
    { idUsuario: 2, tipoUsuario: 'Administrador' },
  ];

  // Lista de endereços pré-definidos
  private enderecos: Endereco[] = [
    { idEndereco: 1, cep: '12345-678', endereco: 'Rua A', numero: '100', bairro: 'Centro', cidade: 'Brusque', estado: 'SC', celular: '47998765432' },
    { idEndereco: 2, cep: '98765-432', endereco: 'Rua B', numero: '200', bairro: 'Bairro Alto', cidade: 'Blumenau', estado: 'SC', celular: '47987654321' },
  ];

  // Lista de clientes pré-definidos
  private clientes: Cliente[] = [
    { idCliente: 1, idPessoa: 2, idUsuario: 1, endereco: this.enderecos[0] },
    { idCliente: 2, idPessoa: 4, idUsuario: 1, endereco: this.enderecos[1] },
  ];

  // Lista de funcionários pré-definidos
  private funcionarios: Funcionario[] = [
    { idFuncionario: 1, idPessoa: 1, idUsuario: 2, funcao: 'Gerente', nivelPermissao: 1 },
    { idFuncionario: 2, idPessoa: 3, idUsuario: 2, funcao: 'Atendente', nivelPermissao: 2 },
  ];

  // Lista de produtos pré-definidos
  private produtos: Produto[] = [
    {
      nome: 'Camiseta Básica Branca',
      descricao: 'Camiseta básica em 100% algodão, ideal para o dia a dia.',
      imagens: ['../assets/produto-1.png', '../assets/produto-1.png', '../assets/produto-1.png', '../assets/produto-1.png', '../assets/produto-1.png'],
      material: 'Algodão',
      dimensoes: '50cm x 60cm',
      preco: 89.99,
      instrucoesLavagem: 'Lavar à mão com água fria.'
    },
    {
      nome: 'Camiseta Estampada',
      descricao: 'Camiseta estampada com tema tropical, perfeita para o verão.',
      imagens: ['../assets/produto-2.png', '../assets/produto-2.png', '../assets/produto-2.png', '../assets/produto-2.png', '../assets/produto-2.png'],
      material: 'Algodão',
      dimensoes: '50cm x 60cm',
      preco: 99.99,
      instrucoesLavagem: 'Lavar à mão com água fria.'
    },
    {
      nome: 'Camiseta de Manga Longa',
      descricao: 'Camiseta de manga longa, ideal para dias mais frios.',
      imagens: ['../assets/produto-3.png', '../assets/produto-3.png', '../assets/produto-3.png', '../assets/produto-3.png', '../assets/produto-3.png'],
      material: 'Algodão',
      dimensoes: '50cm x 60cm',
      preco: 119.99,
      instrucoesLavagem: 'Lavar à mão com água fria.'
    },
    {
      nome: 'Camiseta Colorida de Verão',
      descricao: 'Camiseta colorida, perfeita para usar em dias ensolarados.',
      imagens: ['../assets/produto-4.png', '../assets/produto-4.png', '../assets/produto-4.png', '../assets/produto-4.png', '../assets/produto-4.png'],
      material: 'Algodão',
      dimensoes: '50cm x 60cm',
      preco: 94.99,
      instrucoesLavagem: 'Lavar à mão com água fria.'
    },
    {
      nome: 'Camiseta com Decote V',
      descricao: 'Camiseta com decote em V, elegante e confortável.',
      imagens: ['../assets/produto-5.png', '../assets/produto-5.png', '../assets/produto-5.png', '../assets/produto-5.png', '../assets/produto-5.png'],
      material: 'Algodão',
      dimensoes: '50cm x 60cm',
      preco: 89.99,
      instrucoesLavagem: 'Lavar à mão com água fria.'
    },
  ];

  constructor() {}

  // Métodos para obter dados como Observable
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

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos);
  }
}
