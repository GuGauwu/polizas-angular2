import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Módulos de PrimeNG
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-lista-polizas',
  standalone: true, 
  imports: [CommonModule,
    FormsModule, 
    TableModule, //
    DropdownModule,
    ButtonModule,
    InputTextModule],
  templateUrl: './lista-polizas.component.html',
  styleUrl: './lista-polizas.component.css'
})
export class ListaPolizasComponent {
   // Variables para los dropdowns
  centrosContables = [
    { nombre: '11101 - OFICINA DEL RECTOR' },
    { nombre: '11102 - DEPARTAMENTO X' }
  ];
  selectedCentro = this.centrosContables[0];

  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
  mesInicial = 'Abril';
  mesFinal = 'Abril';

  tipos = ['Todos', 'Ingreso', 'Egreso'];
  tipoSeleccionado = 'Todos';

  status = ['Todos', 'Aplicada', 'Pendiente'];
  statusSeleccionado = 'Todos';

  tiposCaptura = ['--Todos--', 'Manual', 'Automática'];
  tipoCapturaSeleccionado = '--Todos--';

  registrosMostrar = ['5 registros', '10 registros', '20 registros'];
  mostrarSeleccionado = '5 registros';

  clasificaciones = ['TODOS', 'Contable', 'Fiscal'];
  clasificacionSeleccionada = 'TODOS';

  // Datos de ejemplo para la tabla
  polizas = [
    {
      cc: '11101',
      numero: '04E0001',
      tipo: 'Ingreso',
      fecha: new Date('2025-04-01'),
      status: 'Aplicada Manual MC',
      concepto: 'REGISTRO DE INTERESES GENERADOS...',
      cargo: 851.09,
      abono: 852.09
    },
    // Puedes añadir más pólizas aquí...
  ];
}


