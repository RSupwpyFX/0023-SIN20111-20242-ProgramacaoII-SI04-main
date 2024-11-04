import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service'; // Importar o DataService
import { Produto } from '../../models/produto.model';        // Importar o modelo de Produto

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  imagemPrincipal!: string;
  showInfo: boolean = false;

  nome!: string;
  descricao!: string;
  quantidade: number = 1;
  imagens!: string[];
  cep!: string;
  material!: string;
  dimensoes!: string;
  preco!: number;
  instrucoesLavagem!: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nome = params['nome'];
      this.carregarProduto(this.nome);
    });
  }

  carregarProduto(nome: string) {
    this.dataService.getProdutos().subscribe(produtos => {
      const produto = produtos.find(p => p.nome === nome);
      if (produto) {
        this.descricao = produto.descricao;
        this.imagens = produto.imagens;
        this.material = produto.material;
        this.dimensoes = produto.dimensoes;
        this.preco = produto.preco;
        this.instrucoesLavagem = produto.instrucoesLavagem;
        this.imagemPrincipal = this.imagens[0];
      }
    });
  }

  adicionarAoCarrinho() {
    console.log(`Produto adicionado ao carrinho: ${this.nome}, quantidade: ${this.quantidade}`);
  }

  comprar() {
    console.log(`Compra realizada para o produto: ${this.nome}, quantidade: ${this.quantidade}`);
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  calcularFrete() {
    console.log('CEP informado:', this.cep);
  }
}
