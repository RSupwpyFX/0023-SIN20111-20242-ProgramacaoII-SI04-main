import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cliente } from '../../models/cliente.model';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  standalone: true,
  imports: [CommonModule] // Adicione o CommonModule aqui
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }
}