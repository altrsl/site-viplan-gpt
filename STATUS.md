# Status do projeto — VIplan

**Etapa atual:** 2 — Página inicial e refinamento da linguagem visual  
**Situação:** primeira proposta visual da home registrada; validação em navegador pendente  
**Repositório:** `altrsl/site-viplan-gpt`  
**Branch:** `main`

## Direcionamento

Prioridade aprovada: desenvolver e validar primeiro a apresentação visual do site. Hospedagem, backend, banco de dados, autenticação, painel administrativo funcional, armazenamento definitivo, e-mail e integrações de produção permanecem adiados.

## Entregas registradas

- [x] Planejamento, arquitetura mínima e diretrizes visuais documentados.
- [x] Base inicial Next.js + React + TypeScript.
- [x] Tailwind CSS 4 configurado.
- [x] Layout global, cabeçalho, rodapé e página inicial.
- [x] Cabeçalho responsivo com menu móvel acessível.
- [x] Nova proposta visual da página inicial com composição editorial, transparências, faixas diagonais, paleta aprovada e chamadas para navegação.
- [x] Seções de apresentação institucional, áreas do site, qualidade e contato.
- [x] Estados de foco visíveis e suporte a preferência por redução de movimento.
- [ ] Executar instalação, lint, TypeScript e build em ambiente local.
- [ ] Validar a página em navegadores e larguras reais.
- [ ] Aplicar o arquivo oficial de logotipo após resolver a dependência externa do SVG.
- [ ] Receber e integrar fotografias institucionais/produtos/projetos aprovadas.

## Logotipo — observação técnica

Os arquivos `logo/Logo Viplan.svg` e `logo/Logo Viplan.pdf` estão presentes na branch `main`.

O SVG contém uma referência a uma imagem raster externa chamada `Logo Viplan_Images\\Logo Viplan_ImgID1.png`, que não está presente no diretório versionado. Portanto, o SVG não é autossuficiente para uso direto no navegador. O PDF foi mantido como original de referência. Não foi redesenhado nem alterado o logotipo. O cabeçalho ainda usa lettering provisório até que seja possível aplicar o ativo oficial completo.

## Pendências e limites

- A proposta da página inicial é uma primeira direção para avaliação, não uma versão final aprovada.
- As rotas internas ainda precisam ser implementadas.
- Os textos são introdutórios e deverão ser validados pela VIplan antes da publicação.
- Não há imagens reais de fabricação, produtos ou projetos integradas.
- Os links internos da navegação apontam para páginas a serem construídas nas próximas etapas.
- Nenhum teste local foi executado neste ambiente; não declarar build ou lint aprovados.

## Próxima tarefa

Revisar visualmente a página inicial em navegador, recolher feedback e ajustar a composição. Em paralelo, solicitar/exportar uma versão autossuficiente do logotipo (SVG com imagem incorporada ou PNG transparente) para aplicação fiel no cabeçalho.
