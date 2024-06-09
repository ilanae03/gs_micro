import { Especie } from "./especies";
import { ProjetoConservacao } from "./projetos";


export interface Oceanos {
    regiao: string;
    temperaturaAgua: number;
    pH: number;
    nivelPoluicao: string;
    especies: Especie[];
    projetosConservacao: ProjetoConservacao[];
}
  


  

