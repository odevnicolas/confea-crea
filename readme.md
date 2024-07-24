# Confea-Crea

## Visão Geral

Este repositório contém o código-fonte para o projeto Confea-Crea, desenvolvido durante o CONFEA Open Day Hackathon. O objetivo do projeto é unificar o registro profissional de engenheiros, agrônomos e geocientistas no Brasil, permitindo a prática profissional em todo o território nacional sem a necessidade de permissões regionais adicionais. A plataforma centraliza o registro profissional e a emissão de Anotações de Responsabilidade Técnica (ART).

## Funcionalidades

- **Login com GovBR**: Autenticação via GovBR para maior segurança e integração com sistemas governamentais.
- **Criação de ARTs com IA**: Utilização de Inteligência Artificial para facilitar e agilizar a criação de ARTs.
- **Centralização de ARTs em Sistema Único**: Todas as ARTs são centralizadas em um único sistema para fácil acesso e gerenciamento.
- **Criação de ART com um Clique**: Ferramenta intuitiva para criar ARTs rapidamente com apenas um clique.
- **Autenticação Centralizada sem Necessidade de Vistos**: Sistema de autenticação que elimina a necessidade de vistos regionais para a prática profissional.

## Estrutura do Projeto

```bash
confea-crea/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── common/
│   │   └── Loader/
│   ├── components/
│   ├── css/
│   ├── fonts/
│   ├── hooks/
│   ├── icons/
│   ├── images/
│   ├── js/
│   ├── layout/
│   ├── lib/
│   ├── pages/
│   ├── types/
│   └── ui/
│       ├── App.tsx
│       ├── jsvectormap.d.ts
│       ├── lib.d.ts
│       ├── main.tsx
│       └── react-app-env.d.ts
├── .gitignore
├── LICENSE.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── readme.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Stacks Utilizadas

- **Frontend**: ReactJS, TypeScript, Vite
- **Estilização**: TailwindCSS, PostCSS, Autoprefixer
- **Componentes e UI**: Radix UI (Checkbox, Dialog, Select), HeadlessUI, Lucide React, React Icons
- **Gráficos e Visualização**: ApexCharts, React ApexCharts, Jsvectormap
- **Autenticação e Notificações**: GovBR, React Hot Toast, React Toastify
- **Outras Dependências**: Match Sorter, Sort By, Class Variance Authority, Flatpickr

## Configuração e Execução

### Pré-requisitos

- Node.js (versão 20.11.1)
- Docker
- Docker Compose

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/odevnicolas/confea-crea.git
   cd confea-crea
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicialize os containers:

   ```bash
   docker-compose up --build
   ```

4. Execute o projeto:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação:

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:4000`
   - Documentação da API: `http://localhost:4000/api-docs`

## Equipe

- **Nickolas Madeiro** - Líder de Projeto
- **Luan Mendes** - Desenvolvedor
- **Thiago Silva** - Designer
- **Engenheiro Antero** - Profissional Adimplente com o Confea

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
