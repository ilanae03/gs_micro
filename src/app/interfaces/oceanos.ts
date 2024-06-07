export interface Oceanos {
    regiao: string;
    temperaturaAgua: number;
    pH: number;
    niveisPoluicao: string;
    especies: Especie[];
    projetosConservacao: ProjetoConservacao[];
}

export interface Especie {
    nome: string;
    status: string;
}

export interface ProjetoConservacao {
    nomeProjeto: string;
    tipoProjeto: string;
    tipoParticipacao: string;
}

