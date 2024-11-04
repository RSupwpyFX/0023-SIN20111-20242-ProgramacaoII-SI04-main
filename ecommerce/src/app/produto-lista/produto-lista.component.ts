import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { DataService } from './../../services/data.service'; // Importar o DataService
import { Produto } from '../../models/produto.model'; // Importar o modelo de Produto

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'] // Corrigido de styleUrl para styleUrls
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private cartService: CartService, private dataService: DataService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.dataService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  adicionarAoCarrinho(produto: Produto) {
    this.cartService.addToCart(produto);
  }
}
