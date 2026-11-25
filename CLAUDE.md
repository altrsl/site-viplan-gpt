# Instruções do projeto — VIplan

## Missão

Desenvolver o site institucional da VIplan Vidros Temperados neste repositório, com qualidade visual e técnica, administração de conteúdo segura e evolução incremental.

## Regras obrigatórias de trabalho

- Antes de programar, leia `README.md`, `STATUS.md` e os documentos em `docs/`.
- Respeite a etapa registrada em `STATUS.md`. Não antecipe funcionalidades de etapas futuras.
- Não faça alterações destrutivas nem substitua decisões já aprovadas sem registrar a justificativa.
- Trabalhe em mudanças pequenas, coesas e verificáveis.
- Após cada etapa: revisar o código, executar testes pertinentes, corrigir problemas, atualizar documentação e registrar commit com mensagem clara.
- Ao concluir uma tarefa, informe o que foi feito, o que ficou pendente, verificações executadas e a próxima tarefa.
- Não afirme que testes, deploys ou integrações foram executados se isso não ocorreu.

## Identidade e experiência

- Preservar o logotipo oficial da VIplan exatamente como fornecido: sem redesenhar, reinterpretar, distorcer, recortar indevidamente ou alterar cores e proporções.
- Seguir a paleta aprovada: azul profundo/azul, ciano, verde e amarelo.
- Usar com critério faixas diagonais, transparências, sobreposições, recortes geométricos, gradientes sutis e referências visuais ao vidro.
- Buscar uma interface acolhedora, dinâmica, contemporânea e profissional.
- Evitar aparência rígida, excessivamente quadrada, grandes blocos monocromáticos e padrões repetitivos de cards.
- Não criar uma segunda navegação com ícones circulares imitando destaques do Instagram.
- Priorizar fotografia de qualidade e composições editoriais/assimétricas, sem sacrificar legibilidade ou usabilidade.
- Animações devem ser discretas, funcionais e respeitar preferência por redução de movimento.
- Em imagens com pessoas, evitar rostos identificáveis; preferir costas, mãos, silhuetas ou enquadramentos parciais.

## Conteúdo e dados

- Não inventar história da empresa, datas, certificações, números, endereços, telefones, e-mails, redes sociais, depoimentos, clientes, obras ou especificações.
- Quando uma informação não estiver disponível, marcar como pendente e solicitar confirmação.
- Identificar claramente imagens e textos provisórios que precisem ser substituídos ou validados.
- Não publicar conteúdo fictício como se fosse real.

## Segurança

- Nunca inserir chaves, tokens, senhas ou credenciais no código ou em commits.
- Usar variáveis de ambiente e manter apenas um arquivo `.env.example` com nomes e valores ilustrativos não secretos.
- Aplicar autorização no servidor e validar permissões em toda operação administrativa.
- Não confiar em controles de interface como única barreira de segurança.
- Validar e sanitizar entradas; proteger formulários contra abuso; tratar uploads com validação de tipo, tamanho e acesso.
- Senhas e sessões devem ser geridas por solução de autenticação apropriada, sem implementação criptográfica caseira.
- Não expor dados administrativos ou chaves privadas no cliente.

## Qualidade

- Usar TypeScript com tipagem rigorosa se a stack proposta for confirmada.
- Manter componentes e módulos coesos, reutilizáveis e acessíveis.
- Garantir navegação por teclado, foco visível, contraste adequado, HTML semântico e textos alternativos úteis.
- Verificar responsividade em desktop, tablet e mobile.
- Considerar SEO técnico, metadados por página, Open Graph, sitemap e robots.txt.
- Documentar decisões arquiteturais relevantes e mudanças de dependências.

## Processo e comunicação

- A branch de trabalho definida atualmente é `main`; não criar ou trocar branches sem necessidade ou autorização.
- Commits devem representar unidades lógicas concluídas.
- Atualizar `STATUS.md` sempre que houver mudança de etapa, entrega, bloqueio ou próxima tarefa.
- Atualizar este arquivo quando decisões de arquitetura, estrutura, segurança ou convenções forem confirmadas.
- Se houver ambiguidade que afete segurança, custo, identidade ou conteúdo institucional, interromper e pedir confirmação em vez de presumir.
