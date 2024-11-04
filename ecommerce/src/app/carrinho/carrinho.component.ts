import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((itens) => {
      this.produtos = itens; // Atualiza a lista de produtos sempre que mudar
    });
  }

  removerDoCarrinho(index: number): void {
    this.cartService.removeFromCart(index);
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
  }

  finalizarCompra(): void {
    console.log('Compra finalizada!');
    // Adicione a lógica para concluir a compra
  }

  cancelarCompra(): void {
    console.log('Compra cancelada!');
    this.cartService.clearCart(); // Limpar o carrinho
  }
}
