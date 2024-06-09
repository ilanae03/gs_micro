import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataTableComponent } from "../data-table/data-table.component";
import { ApiService } from '../../services/api.service';
import { Oceanos } from '../../interfaces/oceanos';
import { Especie } from '../../interfaces/especies';
import { ProjetoConservacao } from '../../interfaces/projetos';

@Component({
    selector: 'app-filters',
    standalone: true,
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, DataTableComponent]
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
    this.getOceanos();
    this.getEspecies();
    this.getStatusConservacao();

    this.filtersForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  getOceanos(): void {
    this.apiService.getOceanos().subscribe(oceanos => {
      this.oceanos = oceanos;
      this.filteredOceanos = oceanos;
    });
  }

  getEspecies(): void {
    this.apiService.getEspecies().subscribe(especies => this.especies = especies);
  }

  getStatusConservacao(): void {
    this.apiService.getStatusConservacao().subscribe(status => this.statusConservacao = status);
  }

  applyFilters(): void {

}
}