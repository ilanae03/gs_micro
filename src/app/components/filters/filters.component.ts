import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Oceanos } from '../../interfaces/oceanos';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<FormGroup>();
  oceanos: Oceanos[] = [];
  especies: string[] = [];
  statusConservacao: string[] = [];
  filtersForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.filtersForm = this.formBuilder.group({
      regiao: [''],
      especie: [''],
      statusConservacao: [''],
      temperaturaAgua: [''],
      pH: [''],
      niveisPoluicao: ['']
    });
  }

  ngOnInit(): void {
    this.getOceanos();
  }

  getOceanos(): void {
    this.apiService.getDados().subscribe(oceanos => {
      this.oceanos = oceanos;

      // Map species and conservation statuses
      this.especies = [...new Set(oceanos.flatMap(oceano => oceano.especies.map(especie => especie.nome)))];
      this.statusConservacao = [...new Set(oceanos.flatMap(oceano => oceano.especies.map(especie => especie.status)))];
    });
  }

  applyFilters(): void {
    this.filtersChanged.emit(this.filtersForm.value);
  }

  trackByFunction(index: number, item: any): number {
    return item.id; // Substitua 'id' pelo identificador único adequado do item
}

  
}