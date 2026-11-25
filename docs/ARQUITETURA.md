# Arquitetura técnica — desenvolvimento em etapas

## 1. Estratégia aprovada

O desenvolvimento será dividido em duas grandes frentes:

1. **Primeiro: front-end e apresentação visual.** Construir e validar a experiência pública do site, suas páginas, navegação, componentes, imagens, responsividade e interações de interface.
2. **Depois: infraestrutura e funcionalidades de produção.** Quando a apresentação estiver próxima da expectativa aprovada, avaliar hospedagem, backend, banco de dados, autenticação, painel administrativo, armazenamento, e-mail e integrações.

A segunda frente está adiada intencionalmente e não deve bloquear o trabalho visual.

## 2. Base candidata do front-end

| Camada | Opção candidata | Situação |
|---|---|---|
| Framework | Next.js com React | Candidata |
| Linguagem | TypeScript | Candidata |
| Estilização | Tailwind CSS ou equivalente | A confirmar na fundação |
| Componentes | Componentes reutilizáveis e acessíveis | Diretriz |
| Versionamento | GitHub | Confirmado |

A escolha final da base deve favorecer iteração rápida, boa organização, responsividade, acessibilidade e possibilidade de integração posterior com serviços de backend.

## 3. Escopo técnico da fase visual

Nesta fase, o projeto pode incluir:
- estrutura de páginas e navegação;
- cabeçalho, rodapé e componentes compartilhados;
- layouts responsivos;
- identidade visual, tipografia, paleta e grafismos;
- galerias e áreas de apresentação de produtos/projetos;
- estados visuais de botões, links, menus e formulários;
- microinterações e animações moderadas;
- dados locais demonstrativos para alimentar componentes;
- conteúdo e imagens provisórios, claramente identificados;
- ajustes de acessibilidade e desempenho do front-end.

Formulários poderão ter apenas apresentação e validação local, sem prometer envio real. Botões de WhatsApp, redes sociais e outros destinos só devem apontar para dados oficiais confirmados; enquanto isso, usar estados demonstrativos ou deixar a integração pendente.

## 4. Preparação para integração futura

Mesmo sem implementar backend agora:
- manter conteúdo e dados demonstrativos separados dos componentes visuais;
- evitar acoplar componentes a um fornecedor de banco ou autenticação;
- definir interfaces e tipos que possam receber dados reais posteriormente;
- separar elementos de apresentação de regras de negócio;
- documentar pontos que futuramente precisarão de integração;
- não simular segurança ou persistência real.

O painel administrativo funcional, login real e publicação de conteúdo não fazem parte da fase visual.

## 5. Infraestrutura — adiada

As seguintes decisões serão retomadas quando o front-end estiver próximo da aprovação visual:
- provedor de hospedagem;
- banco de dados e backend;
- autenticação e autorização;
- armazenamento de imagens;
- e-mail transacional;
- integração real de formulários e solicitações de orçamento;
- domínio, publicação e monitoramento;
- backups, retenção, privacidade e custos operacionais.

Não contratar serviços, criar contas pagas ou inserir credenciais nesta etapa.

## 6. Segurança e qualidade durante o front-end

- Não versionar tokens, senhas ou arquivos de ambiente com segredos.
- Não inserir dados pessoais ou institucionais fictícios como se fossem reais.
- Não criar formulários que aparentem enviar mensagens se não houver integração.
- Garantir navegação por teclado, foco visível, contraste e HTML semântico.
- Respeitar preferência por redução de movimento.
- Testar desktop, tablet e celular.
- Otimizar imagens e evitar dependências desnecessárias.

## 7. Registro de decisão

**Prioridade atual:** front-end e apresentação visual.  
**Stack candidata:** Next.js + React + TypeScript, com Tailwind CSS ou alternativa adequada.  
**Backend e hospedagem:** adiados para fase posterior, por decisão do responsável pelo projeto.  
**Critério para retomar infraestrutura:** apresentação visual do site próxima da expectativa aprovada.
