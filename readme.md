# Confea-Crea

## Visão Geral

Este repositório contém o código-fonte para o projeto Confea-Crea, desenvolvido durante o CONFEA Open Day Hackathon. O objetivo do projeto é unificar o registro profissional de engenheiros, agrônomos e geocientistas no Brasil, permitindo a prática profissional em todo o território nacional sem a necessidade de permissões regionais adicionais. A plataforma centraliza o registro profissional e a emissão de Anotações de Responsabilidade Técnica (ART).

## Funcionalidades

- **Registro Unificado**: Sistema centralizado para registro de profissionais.
- **Emissão de ARTs**: Ferramenta para emissão de Anotações de Responsabilidade Técnica.
- **Validação de Documentos**: Verificação e validação de documentos profissionais.
- **Interface Amigável**: Design intuitivo para fácil navegação e uso.
- **Segurança**: Implementações robustas para garantir a segurança dos dados.

## Tecnologias Utilizadas

- **Frontend**: ReactJS, TypeScript
- **Backend**: Node.js, NestJS
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker, Docker Compose
- **Autenticação**: AWS Cognito
- **Infraestrutura**: AWS

### Pré-requisitos

- Docker
- Docker Compose

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/odevnicolas/confea-crea.git
   cd confea-crea
   ```

2. Inicialize os containers:

   ```bash
   docker-compose up --build
   ```

3. Acesse a aplicação:

   - Frontend: `http://localhost:3000`

## Equipe

- **Nickolas Madeiro** - Líder de Projeto
- **Luan Mendes** - Desenvolvedor
- **Thiago Silva** - Designer
- **Engenheiro Antero** - Profissional Adimplente com o Confea

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
