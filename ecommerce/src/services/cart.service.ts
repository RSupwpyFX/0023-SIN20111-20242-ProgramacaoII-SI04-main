import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  private cartItemsSubject = new BehaviorSubject<any[]>([]); // Novo BehaviorSubject

  cartItemCount$ = this.cartItemCount.asObservable();
  cartItems$ = this.cartItemsSubject.asObservable(); // Observable para os itens do carrinho

  addToCart(produto: any): void {
    const item = this.cartItems.find(p => p.nome === produto.nome);
    if (item) {
      item.quantidade += 1;
    } else {
      this.cartItems.push({ ...produto, quantidade: 1 });
    }
    this.updateCartItemCount();
    this.cartItemsSubject.next(this.cartItems); // Atualiza a lista de itens do carrinho
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartItemCount();
    this.cartItemsSubject.next(this.cartItems); // Atualiza a lista de itens do carrinho
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartItemCount();
    this.cartItemsSubject.next(this.cartItems); // Atualiza a lista de itens do carrinho
  }

  private updateCartItemCount(): void {
    const itemCount = this.cartItems.reduce((count, item) => count + item.quantidade, 0);
    this.cartItemCount.next(itemCount);
  }
}
