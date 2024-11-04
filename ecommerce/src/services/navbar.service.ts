import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // O serviço é fornecido na raiz do aplicativo
})
export class NavbarService {
  private visibleSource = new BehaviorSubject<boolean>(false); // Inicializa a visibilidade como falsa
  visible$ = this.visibleSource.asObservable(); // Observable para permitir que os componentes se inscrevam na visibilidade da navbar

  constructor() {
    // Chama o método para garantir que a navbar comece como invisível
    this.resetNavbarVisibility();
  }

  // Método para definir a visibilidade da navbar
  setVisible(visible: boolean) {
    this.visibleSource.next(visible); // Atualiza a visibilidade

    // Armazena a visibilidade no localStorage, se estiver disponível
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('navbarVisible', JSON.stringify(visible));
    }
  }

  private resetNavbarVisibility() {
    // Garante que a navbar comece como invisível
    this.setVisible(false);
  }

  // Método para tratar o logout
  logout() {
    this.setVisible(false); // Torna a navbar invisível

    // Remove a visibilidade do localStorage, se estiver disponível
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('navbarVisible');
    }
  }
}
