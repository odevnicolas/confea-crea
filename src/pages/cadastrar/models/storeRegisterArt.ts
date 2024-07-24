import { Contrato } from './art-create-payload.model';
import { create } from 'zustand';

export interface Atividade {
  atividades_obraservico: string[];
  nivel: string;
  atividade_profissional: string;
  unidade_medida: string;
  quantidade: string;
}

interface IRegisterArt {
  forma_registro: string;
  participacao_tecnica: string;
  artNumber: string;
  titulos_profissional: string[];
  descricao: string;
  artNumberToSearch: string;
  entidade_classe: string;
  finalidade: string;
  celebradoEm: string;
  acao_institucional: string;
  registered_date: string;
  empresa: string;
  observacao: string;
  tipo_de_art: string;
  atividades_contratadas: Atividade[];
  empresa_contratada: string;
  motivationDocumentFiscalization: boolean;
  contrato: Contrato;
  searchRefeerComplementArtNumber: string;
  action: {
    storeObservacao: (store: string) => void;
    storeEmpresa: (store: string) => void;
    storeRegisteredDate: (store: string) => void;
    storeArtNumber: (store: string) => void;
    storeFormaDeRegistro: (store: string) => void;
    storemotivationDocumentFiscalization: (store: boolean) => void;
    storeArtType: (store: string) => void;
    storePaticipacao: (store: string) => void;
    storeDescricao: (store: string) => void;
    storeArtNumberToSearch: (store: string) => void;
    storeTitulosProfissional: (store: string[]) => void;
    storeEntidadeDeClasse: (store: string) => void;
    storeFinalidade: (store: string) => void;
    storeAcaoInstitucional: (store: string) => void;
    storeEmpresaContratada: (store: string) => void;
    storeAtividade: (store: Atividade[]) => void;
    storeContrato: (store: Contrato) => void;
    storeSearchRefeerComplementArtNumber: (store: string) => void;
    resetAll: () => void;
  };
}

export const useRegisterArt = create<IRegisterArt>(
  (set: any) => ({
    forma_registro: '',
    participacao_tecnica: '',
    titulos_profissional: [],
    artNumber: '',
    descricao: '',
    artNumberToSearch: '',
    entidade_classe: '1',
    celebradoEm: '',
    registered_date: '',
    motivationDocumentFiscalization: false,
    finalidade: '',
    tipo_de_art: '',
    observacao: '',
    empresa: '',
    acao_institucional: '1',
    atividades_contratadas: [],
    empresa_contratada: '',
    searchRefeerComplementArtNumber: '',
    contrato: {
      cpfContratante: '',
      cpfProprietario: '',
      codigo_de_obra_publica: '',
      contratante: '',
      proprietario: '',
      numero: '',
      data_contrato: '',
      data_ini_contrato: '',
      data_fim_contrato: '',
      tipo_vinculo: '',
      valor_contrato: '',
      endereco: {
        cep: '',
        cidade: '',
        complemento: '',
        bairro: '',
        logradouro: '',
        numero: '',
        uf: '',
        latitude: '',
        longitude: '',
        ponto_referencia: '',
        tipo_coordenada: '',
        pais: '',
        telefone: '',
        tipo_endereco: '',
        tipo_logradouro: '',
      },
    },
    action: {
      storeObservacao: (store) =>
        set(() => ({ observacao: store })),
      storemotivationDocumentFiscalization: (store) => set(() => ({ motivationDocumentFiscalization: store })),
      storeEmpresa: (store) =>
        set(() => ({ empresa: store })),
      storeRegisteredDate: (store) =>
        set(() => ({ registered_date: store })),
      storeArtNumber: (store) =>
        set(() => ({ artNumber: store })),
      storeTitulosProfissional: (store) =>
        set(() => ({ titulos_profissional: store })),
      storePaticipacao: (store) =>
        set(() => ({ participacao_tecnica: store })),
      storeDescricao: (store) =>
        set(() => ({ descricao: store })),
      storeArtNumberToSearch: (store) => set(() => ({ artNumberToSearch: store })),
      storeFormaDeRegistro: (store) =>
        set(() => ({ forma_registro: store })),
      storeEntidadeDeClasse: (store) =>
        set(() => ({ entidade_classe: store })),
      storeFinalidade: (store) =>
        set(() => ({ finalidade: store })),
      storeAcaoInstitucional: (store) =>
        set(() => ({ acao_institucional: store })),
      storeAtividade: (store) =>
        set(() => ({ atividades_contratadas: store })),
      storeContrato: (store) =>
        set((state: any) => ({
          contrato: { ...state.contrato, ...store },
        })),
      storeArtType: (store) =>
        set(() => ({ tipo_de_art: store })),
      storeEmpresaContratada: (store) =>
        set(() => ({ empresa_contratada: store })),
      storeSearchRefeerComplementArtNumber: (store) => set(() => ({ searchRefeerComplementArtNumber: store })),
      resetAll: () =>
        set(() => ({
          acao_institucional: '',
          artNumber: '',
          atividades_contratadas: [],
          celebradoEm: '',
          contrato: {
            celebradoEm: '',
            codigo_de_obra_publica: '',
            contratante: '',
            cpfContratante: '',
            cpfProprietario: '',
            data_contrato: '',
            data_fim_contrato: '',
            data_ini_contrato: '',
            numero: '',
            proprietario: '',
            tipo_vinculo: '',
            valor_contrato: '',
            empresa_contratada: '',
            endereco: {
              bairro: '',
              cep: '',
              cidade: '',
              complemento: '',
              latitude: '',
              logradouro: '',
              longitude: '',
              numero: '',
              pais: '',
              ponto_referencia: '',
              telefone: '',
              tipo_coordenada: '',
              tipo_endereco: '',
              tipo_logradouro: '',
              uf: '',
            },
          },
          descricao: '',
          entidade_classe: '',
          empresa: '',
          finalidade: '',
          forma_registro: '',
          observacao: '',
          participacao_tecnica: '',
          registered_date: '',
          tipo_de_art: '',
          titulos_profissional: [],
        })),
    },
  })
);
