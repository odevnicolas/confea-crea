export type AuthModel = {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }
  
  export type UserLoginModel = {
    tipo_pessoa: string;
    cpfcnpj: string;
    senha: string;
  }
  
  export type UserModel = {
    cpf?: string;
    cnpj?: string;
    nome?: string;
    razaoSocial?: string;
    registroNacional?: string;
    dataRegistro?: string;
    situacaoRegistroAtual?: string;
    ultimaAnuidadePaga?: string;
    tituloPrincipal?: string;
    email?: string;
    firsttime?: string;
    situacaoAnuidade?: string;
    categoria?: string;
    registroRegional?: string;
    processoDeRegistro?: string;
    tipoDeRegistro?: string;
    situacaoDeRegistro?: string;
    ultimoAnoPago?: string;
    titulos?: string;
    atribuicao?: string;
    restricao?: string;
  }