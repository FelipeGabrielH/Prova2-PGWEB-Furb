
export interface Cadastro {
  id: number;
  nome: string;
  departamento: string;
  endereco: string;
  email: string;
}

export interface RespostaAPI {
  status: string;
  mensagem: string;
}
