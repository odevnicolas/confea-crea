interface Endereco {
    cep: string;
    logradouro: string;
    ponto_referencia: string;
    complemento: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    tipo_coordenada: string;
    tipo_endereco: string;
    tipo_logradouro: string;
    latitude: string;
    longitude: string;
    telefone: string;
    pais: string;
  }
  
  export interface Contrato {
    contratante?: string;
    proprietario?: string;
    celebradoEm?: string;
    codigo_de_obra_publica?: string;
    cpfContratante?: string;
    cpfProprietario?: string;
    numero?: string;
    data_contrato?: string;
    data_ini_contrato?: string;
    data_fim_contrato?: string;
    valor_contrato?: string;
    tipo_vinculo?: string;
    endereco?: Endereco;
    unidadeAdministrativa?: string;
    indentificacao_cargoFuncao?: string;
  }
  
  interface Atividadescontratada {
    nivel: string;
    atividades_obraservico: string[];
    atividade_profissional: string;
    quantidade: string;
    unidade_medida: string;
  }
  interface Art {
    forma_registro: string;
    participacao_tecnica: string;
    titulos_profissional: string[];
    entidade_classe: string;
    finalidade: number;
    acao_institucional: string;
    atividades_contratadas: Atividadescontratada[];
    contrato: Contrato;
  }
  
  export type TCreateArtObraServico = {
    art: Art;
  }