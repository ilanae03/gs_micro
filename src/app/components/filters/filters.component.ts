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
export class FiltersComponent {

  @Output() filtersChanged = new EventEmitter<FormGroup>();
  oceanos: Oceanos[] = [];
  filteredOceanos: Oceanos[] = [];
  especies: Especie[] = [];
  statusConservacao: Especie[] = [];
  filtersForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.filtersForm = this.formBuilder.group({
      regiao: ['', Validators.required],
      especies: ['', Validators.required],
      statusConservacao: ['', Validators.required],
      temperaturaAgua: ['', Validators.required],
      pH: ['', Validators.required],
      niveisPoluicao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getOceanos()
  }

  getOceanos(): void {
    this.apiService.getOceanos().subscribe(oceanos => {this.oceanos = oceanos});
  }

  applyFilters(): void {

  }
}