# Arquitetura técnica — proposta e decisões

## 1. Objetivo deste documento

Registrar a arquitetura candidata para o site VIplan, distinguir propostas de decisões confirmadas e listar validações necessárias antes de iniciar a aplicação.

## 2. Arquitetura candidata

A proposta inicial é uma aplicação web moderna com renderização otimizada, conteúdo institucional público e uma área administrativa protegida.

| Camada | Proposta inicial | Situação |
|---|---|---|
| Framework web | Next.js com React | Candidata |
| Linguagem | TypeScript | Candidata |
| Estilização | Tailwind CSS | Candidata |
| Banco de dados | PostgreSQL | Candidata |
| Backend gerenciado | Supabase | Candidato |
| Autenticação | Supabase Auth | Candidata |
| Arquivos | Supabase Storage | Candidato |
| Hospedagem | A definir | Em avaliação |
| E-mail transacional | A definir | Em avaliação |
| Versionamento | GitHub | Confirmado |

A combinação Next.js + Supabase é uma hipótese de trabalho, não uma obrigação. A escolha final deve considerar compatibilidade de runtime, recursos necessários, limites dos planos gratuitos, custo de produção e facilidade de manutenção.

## 3. Diretrizes de aplicação

- Separar claramente a experiência pública da área administrativa.
- Manter componentes de interface reutilizáveis e acessíveis.
- Separar apresentação, regras de negócio e acesso a dados.
- Validar dados no servidor, mesmo quando houver validação no cliente.
- Aplicar autorização em cada operação administrativa.
- Utilizar políticas de acesso no banco/armazenamento quando suportadas.
- Não expor chaves privilegiadas no navegador.
- Usar migrações versionadas para alterações no banco.
- Manter configurações específicas por ambiente fora do código.

## 4. Modelo funcional preliminar

Entidades que provavelmente serão necessárias:
- usuários e perfis de acesso;
- páginas e blocos de conteúdo;
- categorias e produtos;
- projetos;
- arquivos de mídia;
- configurações gerais e SEO;
- registros de auditoria;
- mensagens e solicitações de orçamento.

O esquema definitivo será elaborado durante a etapa de backend, após validação do fluxo editorial e das permissões.

## 5. Segurança e permissões

- Autenticação por serviço consolidado.
- Perfis e permissões com princípio do menor privilégio.
- Verificação de autorização no servidor em todas as rotas e ações sensíveis.
- Proteção contra acesso indevido a registros e arquivos.
- Validação de tipo, tamanho e conteúdo dos uploads.
- Rate limiting e medidas anti-spam nos formulários.
- Logs sem dados pessoais desnecessários ou segredos.
- Processo documentado para recuperação e revogação de acesso.

## 6. Hospedagem e custos — decisão pendente

A hospedagem não será escolhida apenas pelo preço anunciado. A avaliação deverá considerar:
- uso comercial permitido nos termos do plano;
- suporte ao runtime e às funcionalidades do framework;
- limites de tráfego, execução, armazenamento e build;
- comportamento ao atingir cotas;
- disponibilidade, backups e recuperação;
- região e latência;
- custos de domínio, e-mail e serviços adicionais;
- facilidade de migração e dependência do fornecedor.

Planos gratuitos podem ter limites, suspensão por inatividade ou restrições de uso comercial. Confirmar os termos vigentes diretamente na documentação oficial antes de decidir.

## 7. Decisões necessárias antes da Etapa 1

1. Confirmar framework e estratégia de renderização.
2. Confirmar backend, banco, autenticação e armazenamento.
3. Comparar hospedagem compatível com a arquitetura escolhida e uso comercial.
4. Definir limite aceitável de custo mensal e quem será responsável pelas contas.
5. Definir serviço de e-mail e destino dos formulários.
6. Definir domínio e estratégia de publicação.
7. Confirmar política de backup, retenção e recuperação.

## 8. Gestão de segredos

- Nunca versionar arquivos `.env` reais.
- Manter `.env.example` somente com nomes de variáveis e valores fictícios ou vazios.
- Configurar segredos diretamente no ambiente de hospedagem.
- Separar chaves públicas de chaves privadas.
- Rotacionar imediatamente qualquer credencial exposta.

## 9. Registro de decisão

**Estado:** arquitetura em avaliação.  
**Stack candidata:** Next.js + TypeScript + Tailwind CSS + Supabase/PostgreSQL.  
**Hospedagem:** não definida.  
**Motivo para manter em aberto:** evitar escolher serviço incompatível ou gerar custo recorrente sem conhecer o orçamento e os limites de uso.
