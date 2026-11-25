# Planejamento do site institucional VIplan

## 1. Objetivo

Criar um site institucional para a VIplan Vidros Temperados que apresente a empresa e seus serviços de forma profissional, acolhedora, contemporânea e acessível. O site deverá permitir atualização de conteúdo por pessoas autorizadas, sem depender de alterações diretas no código para tarefas editoriais comuns.

## 2. Público e objetivos de comunicação

O site deve apoiar visitantes que desejam:
- conhecer a empresa e sua atuação;
- entender o processo de fabricação;
- consultar produtos e informações técnicas aprovadas;
- visualizar projetos e aplicações;
- conhecer compromissos de qualidade;
- entrar em contato ou solicitar orçamento.

A comunicação deve transmitir confiança e clareza, sem exageros promocionais ou afirmações não comprovadas.

## 3. Mapa do site

### Início
Apresentação institucional, proposta de valor, destaques de produtos/serviços, chamadas para conhecer projetos e canais de contato. A composição visual deve priorizar fotografia e narrativa visual.

### Sobre a VIplan
História, atuação, estrutura, valores e informações institucionais, todos dependentes de conteúdo fornecido e validado.

### Fabricação
Apresentação do processo produtivo, etapas, equipamentos e cuidados. Não publicar dados técnicos ou alegações sobre capacidade sem validação.

### Produtos
Catálogo organizado por categorias, com páginas ou detalhes individuais quando necessário.

Campos previstos para cada produto:
- nome;
- categoria;
- descrição;
- galeria de imagens;
- especificações técnicas aprovadas;
- status de publicação;
- metadados básicos para SEO.

### Projetos
Galeria de aplicações e projetos, com imagens, títulos, descrições e categorias quando houver informação confirmada. Não atribuir clientes, locais ou autoria sem autorização.

### Qualidade
Conteúdo sobre processos, critérios e compromissos de qualidade. Certificações e conformidades só poderão ser mencionadas mediante comprovação.

### Contato
Canais oficiais, formulário, chamada para WhatsApp e solicitação de orçamento. Endereço, telefone, e-mail, redes sociais e mapa só serão incluídos após confirmação.

## 4. Painel administrativo

Área independente e protegida, com autenticação real e autorização aplicada no servidor.

### Perfis previstos
- **Administrador principal:** controle integral, incluindo usuários e permissões.
- **Administrador de conteúdo:** gerenciamento amplo do conteúdo, sem necessariamente administrar contas e configurações críticas.
- **Editor:** edição e preparação de conteúdo dentro das permissões concedidas.

A matriz exata de permissões deverá ser detalhada antes da implementação.

### Módulos previstos
- painel inicial;
- gerenciamento das páginas e textos;
- produtos e categorias;
- projetos;
- banners e imagens;
- biblioteca de mídia;
- rodapé, redes sociais e informações de contato;
- configurações de SEO;
- usuários e permissões;
- auditoria de ações administrativas.

### Fluxo editorial
- criar e editar conteúdo;
- salvar como rascunho;
- visualizar prévia;
- publicar ou retirar de publicação;
- registrar ações relevantes em auditoria.

### Biblioteca de mídia
Upload, visualização, substituição, exclusão e organização de arquivos, com identificação dos conteúdos que utilizam cada mídia. A exclusão deverá evitar deixar referências quebradas.

## 5. Funcionalidades comerciais

- botão ou integração de WhatsApp, usando número oficial confirmado;
- formulário de contato com validação e proteção contra abuso;
- solicitação de orçamento;
- links para redes sociais oficiais;
- mapa, somente se endereço e estratégia de privacidade forem confirmados.

O destino das mensagens, serviço de e-mail e tratamento de dados pessoais deverão ser definidos antes da implementação.

## 6. Requisitos não funcionais

### Responsividade
Experiência planejada para desktop, tablet e celular, incluindo navegação, imagens, formulários e painel administrativo.

### Acessibilidade
HTML semântico, contraste suficiente, navegação por teclado, foco visível, textos alternativos e respeito à preferência por redução de movimento.

### SEO
URLs amigáveis, títulos e descrições editáveis, metadados, Open Graph, sitemap, robots.txt e estrutura semântica.

### Desempenho
Imagens otimizadas, carregamento eficiente, dependências controladas e atenção aos indicadores de experiência.

### Segurança
Autenticação robusta, autorização no servidor, validação de entradas, proteção de formulários, controle de uploads, gestão segura de sessão e segredos exclusivamente em variáveis de ambiente.

### Privacidade
Coletar somente dados necessários, informar o propósito dos formulários e definir retenção e acesso aos dados recebidos. Avaliar requisitos aplicáveis da LGPD antes da publicação.

## 7. Fora do escopo inicial

Não está prevista, neste primeiro ciclo, a construção de e-commerce, pagamento online, cálculo automático de preço, ERP, integração industrial ou área de cliente, salvo aprovação posterior com escopo próprio.

## 8. Etapas de desenvolvimento

O projeto será conduzido em duas fases maiores. A primeira é dedicada à apresentação visual e deve ser validada antes de investir na infraestrutura de produção.

### Fase A — Front-end e apresentação

0. Planejamento, arquitetura mínima e documentação.
1. Fundação do front-end, configuração de ferramentas e identidade visual.
2. Página inicial e refinamento da linguagem visual.
3. Páginas internas, navegação, responsividade e interações de apresentação.
4. Revisão visual geral, acessibilidade e desempenho do front-end.

Durante esta fase, poderão ser usados dados locais e imagens provisórias claramente identificados. Não implementar persistência, autenticação ou envio real de formulários.

### Fase B — Infraestrutura e produção (adiada)

5. Avaliar e escolher hospedagem, backend, banco de dados, autenticação e armazenamento.
6. Implementar painel administrativo e fluxo editorial.
7. Implementar integrações comerciais, formulários e e-mail.
8. Testes integrados, segurança, SEO técnico e preparação para publicação.

A Fase B será replanejada quando a apresentação visual estiver próxima da expectativa aprovada pelo responsável pelo projeto. Hospedagem e serviços externos não devem ser contratados antes dessa revisão.

Cada etapa deve terminar com revisão, testes pertinentes, correções, atualização documental e commit.

## 9. Critérios de aceite gerais

- Requisitos implementados conforme escopo aprovado.
- Conteúdo real validado, sem dados inventados.
- Responsividade verificada.
- Acessibilidade básica verificada.
- Segurança revisada para a funcionalidade entregue.
- Testes pertinentes executados e resultados registrados.
- Documentação e status atualizados.
- Nenhum segredo ou credencial incluído no repositório.
