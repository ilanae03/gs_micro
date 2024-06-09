import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Oceanos } from '../../interfaces/oceanos';
import { Especie } from '../../interfaces/especies';

@Component({
    selector: 'app-filters',
    standalone: true,
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css',
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class FiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<FormGroup>();
  oceanos: Oceanos[] = [];
  filteredOceanos: Oceanos[] = [];
  filtersForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.filtersForm = this.formBuilder.group({
      regiao: [''],
      especies: [''],
      statusConservacao: [''],
      temperaturaAgua: [''],
      pH: [''],
      nivelPoluicao: ['']
    });
  }

  ngOnInit(): void {
    this.getOceanos();
  }

  getOceanos(filters?: any, page: number = 1, pageSize: number = 20): void {
    this.apiService.getOceanos(filters, page, pageSize).subscribe(oceanos => {
      this.oceanos = oceanos;
      this.filteredOceanos = oceanos;
    });
  }

  applyFilters(): void {
    const filters = this.filtersForm.value;
    this.getOceanos(filters);
    this.filtersChanged.emit(this.filtersForm);
  }
}