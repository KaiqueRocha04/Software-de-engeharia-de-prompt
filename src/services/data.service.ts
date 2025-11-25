
import { Injectable } from '@angular/core';
import { ExMilitar, Empresa, User, Vaga, Mensagem } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private exMilitares: ExMilitar[] = [
    {
      id: 'user1',
      type: 'military',
      nome: 'Carlos Souza',
      ramo_militar: 'Exército',
      tempo_servico: '10 anos',
      experiencias: ['Liderança de pelotão em missões de paz.', 'Especialista em logística e suprimentos.', 'Instrutor de táticas de combate.'],
      habilidades: ['Liderança', 'Gestão de Crises', 'Logística', 'Segurança Patrimonial', 'Primeiros Socorros'],
      contatos: { email: 'carlos.souza@email.com', linkedin: 'linkedin.com/in/carlossouza', telefone: '(11) 98765-4321' },
      fotoUrl: 'https://picsum.photos/seed/user1/200/200'
    },
    {
      id: 'user2',
      type: 'military',
      nome: 'Ana Pereira',
      ramo_militar: 'Marinha',
      tempo_servico: '8 anos',
      experiencias: ['Operadora de sistemas de radar.', 'Analista de inteligência naval.', 'Manutenção de equipamentos eletrônicos.'],
      habilidades: ['Inteligência', 'Análise de Dados', 'Comunicações', 'Operador de Radar', 'Eletrônica'],
      contatos: { email: 'ana.p@email.com', telefone: '(21) 91234-5678' },
      fotoUrl: 'https://picsum.photos/seed/user2/200/200'
    },
  ];

  private empresas: Empresa[] = [
    {
      id: 'company1',
      type: 'company',
      nome: 'SegPro Brasil',
      area_atuacao: 'Segurança Patrimonial e Corporativa',
      vagas: [
        { id: 'vaga1', titulo: 'Supervisor de Segurança', descricao: 'Supervisionar equipe de vigilantes em complexo industrial.', localizacao: 'São Paulo, SP', habilidadesRequeridas: ['Liderança', 'Gestão de Equipes'] },
        { id: 'vaga2', titulo: 'Analista de Riscos', descricao: 'Analisar e mitigar riscos de segurança para clientes corporativos.', localizacao: 'Rio de Janeiro, RJ', habilidadesRequeridas: ['Análise de Dados', 'Gestão de Riscos'] }
      ],
      contatos: { email: 'contato@segpro.com', telefone: '(11) 5555-1000', site: 'segpro.com' },
      logoUrl: 'https://picsum.photos/seed/company1/200/200'
    },
    {
        id: 'company2',
        type: 'company',
        nome: 'TechGuard Solutions',
        area_atuacao: 'Cibersegurança e Proteção de Dados',
        vagas: [
            { id: 'vaga3', titulo: 'Analista de Cibersegurança Jr.', descricao: 'Monitorar redes e responder a incidentes de segurança.', localizacao: 'Remoto', habilidadesRequeridas: ['Cibersegurança', 'Redes'] },
        ],
        contatos: { email: 'rh@techguard.com', telefone: '(41) 5555-2000', site: 'techguard.com' },
        logoUrl: 'https://picsum.photos/seed/company2/200/200'
    }
  ];
  
  private mensagens: Mensagem[] = [
    { id: 'msg1', remetente_id: 'company1', destinatario_id: 'user1', conteudo: 'Olá Carlos, vimos seu perfil e gostaríamos de conversar sobre a vaga de Supervisor. Você tem interesse?', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), lida: false },
    { id: 'msg2', remetente_id: 'user1', destinatario_id: 'company1', conteudo: 'Olá! Tenho sim, muito interesse. Qual o melhor horário para conversarmos?', timestamp: new Date(Date.now() - 1000 * 60 * 30), lida: true },
  ];

  getExMilitares(): ExMilitar[] {
    return this.exMilitares;
  }

  getEmpresas(): Empresa[] {
    return this.empresas;
  }

  getExMilitarById(id: string): ExMilitar | undefined {
    return this.exMilitares.find(u => u.id === id);
  }
  
  getEmpresaById(id: string): Empresa | undefined {
    return this.empresas.find(c => c.id === id);
  }

  getUserById(id: string): User | undefined {
      return [...this.exMilitares, ...this.empresas].find(u => u.id === id);
  }
  
  getVagas(): (Vaga & { empresa: Empresa })[] {
      return this.empresas.flatMap(empresa => 
        empresa.vagas.map(vaga => ({ ...vaga, empresa }))
      );
  }

  getMessagesForUser(userId: string): Mensagem[] {
    return this.mensagens.filter(m => m.destinatario_id === userId || m.remetente_id === userId)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

}
