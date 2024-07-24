"use client";

// import { IContract } from "@/hooks/useFetchArtByNumber";
import { ColumnDef } from "@tanstack/react-table";

export const columnsContractArtList: ColumnDef<[] | any>[] = [
  {
    id: "contrato",
    accessorKey: "numero",
    header: "Número",
  },
  {
    accessorKey: "valor",
    header: "Valor",
  },
  {
    accessorKey: "dataInicio",
    header: "Data início",
  },
  {
    accessorKey: "dataFim",
    header: "Data Fim",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "dataStatus",
    header: "Data de status",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsAtividadesArtList: ColumnDef<[] | any>[] = [
  {
    id: "nivel",
    accessorKey: "nivel",
    header: "Nível",
  },
  {
    accessorKey: "atividade",
    header: "Atividade",
  },
  {
    accessorKey: "atuacao",
    header: "Atividade Profissional",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsAtividadesProtocolos: ColumnDef<[] | any>[] = [
  {
    id: "numero",
    accessorKey: "numero",
    header: "Número/Ano",
  },
  {
    accessorKey: "assunto",
    header: "Assunto",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "setorOrigems",
    header: "Setor Origem",
  },
  {
    accessorKey: "setorDestino",
    header: "Setor Destino",
  },
  {
    accessorKey: "data",
    header: "Data cadastro",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsNotas: ColumnDef<[] | any>[] = [
  {
    id: "nivel",
    accessorKey: "nivel",
    header: "Nível",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];


export const columnsSituacaoStatus: ColumnDef<[] | any>[] = [
  {
    id: "data",
    accessorKey: "data",
    header: "Data",
  },
  {
    id: "hora",
    accessorKey: "hora",
    header: "Hora",
  },
  {
    id: "situacao",
    accessorKey: "stituacao",
    header: "Situação",
  },
  {
    id: "obs",
    accessorKey: "obs",
    header: "Observação",
  },
  {
    id: "invalidDocument",
    accessorKey: "invalidDocument",
    header: "Invalida documento",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsImpressoes: ColumnDef<[] | any>[] = [
  {
    id: "chave",
    accessorKey: "chave",
    header: "Chave",
  },
  {
    id: "data",
    accessorKey: "data",
    header: "Data",
  },
  {
    id: "hora",
    accessorKey: "hora",
    header: "Hora",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsArtVinculadosPorFormaDeRegistro: ColumnDef<[] | any>[] = [
  {
    id: "art",
    accessorKey: "art",
    header: "Art",
  },
  {
    id: "datadecadastro",
    accessorKey: "datadecadastro",
    header: "Data de cadastro",
  },
  {
    id: "formaderegistro",
    accessorKey: "formaderegistro",
    header: "Forma de registro",
  },
  {
    id: "artvinculada",
    accessorKey: "artvinculada",
    header: "Art vinculada",
  },
  {
    id: "cadartvinculada",
    accessorKey: "cadartvinculada",
    header: "Cad. ART vinculada",
  },
  {
    id: "comparar",
    accessorKey: "comparar",
    header: "Comparar",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsVinculadasPorParticipacaoTecnica: ColumnDef<[] | any>[] = [
  {
    id: "art",
    accessorKey: "art",
    header: "Art",
  },
  {
    id: "datacadastro",
    accessorKey: "datacadastro",
    header: "Data de cadastro",
  },
  {
    id: "obs",
    accessorKey: "obs",
    header: "Observação",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsVinculadasCertidoes: ColumnDef<[] | any>[] = [
  {
    id: "numero",
    accessorKey: "numero",
    header: "Número/Ano",
  },
  {
    id: "descricao",
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    id: "tipodecertidao",
    accessorKey: "tipodecertidao",
    header: "Tipo de certidão",
  },
  {
    id: "datadecadastro",
    accessorKey: "datadecadastro",
    header: "Data de cadastro",
  },
  {
    id: "datadeemissao",
    accessorKey: "datadeemissao",
    header: "Data de Emissão",
  },
  {
    id: "datavalidade",
    accessorKey: "datavalidade",
    header: "Data validade",
  },
  {
    id: "certidaocancelada",
    accessorKey: "certidaocancelada",
    header: "Certidão cancelada",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];

export const columnsAcompanhamento: ColumnDef<[] | any>[] = [
  {
    id: "descricao",
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "acao",
    header: "Ação",
    cell: () => (
      <p className="text-brand-50 cursor-pointer">Ver item</p>
    )
  },
];
