
export interface ExMilitar {
  id: string;
  type: 'military';
  nome: string;
  ramo_militar: 'Exército' | 'Marinha' | 'Aeronáutica';
  tempo_servico: string;
  experiencias: string[];
  habilidades: string[];
  contatos: {
    email: string;
    linkedin?: string;
    telefone: string;
  };
  fotoUrl: string;
}

export interface Empresa {
  id: string;
  type: 'company';
  nome: string;
  area_atuacao: string;
  vagas: Vaga[];
  contatos: {
    email: string;
    telefone: string;
    site?: string;
  };
  logoUrl: string;
}

export interface Vaga {
    id: string;
    titulo: string;
    descricao: string;
    localizacao: string;
    habilidadesRequeridas: string[];
}

export interface Mensagem {
  id: string;
  remetente_id: string;
  destinatario_id: string;
  conteudo: string;
  timestamp: Date;
  lida: boolean;
}

export type User = ExMilitar | Empresa;
