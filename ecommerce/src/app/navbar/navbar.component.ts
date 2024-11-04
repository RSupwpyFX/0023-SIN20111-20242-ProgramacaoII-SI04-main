import { Component, OnInit } from '@angular/core'; // Adicionado OnInit
import { NavbarService } from './../../services/navbar.service';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  // Implementando OnInit
  isVisible: boolean = false;
  cartItemCount: number = 0; // Quantidade de itens no carrinho

  constructor(
    private navbarService: NavbarService,
    private cartService: CartService, // Serviço de carrinho
    private router: Router
  ) {}

  ngOnInit() {
    // Subscreve para atualizações de visibilidade da navbar
    this.navbarService.visible$.subscribe(visible => {
      this.isVisible = visible;
    });

    // Subscreve para atualizações da contagem de itens no carrinho
    this.cartService.cartItemCount$.subscribe((count: number) => {
      this.cartItemCount = count;
    });
  }

  logout() {
    this.navbarService.logout(); // Chama o método logout do serviço
    this.router.navigate(['/login']);
  }
}
