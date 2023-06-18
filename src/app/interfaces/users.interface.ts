export interface Usuario {
    id: number;
    nomeCompleto: string; 
    email: string;
    senha?: string;
    telefone: string;
    data_nascmento: string;
}