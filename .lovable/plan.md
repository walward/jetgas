
Objetivo: restaurar o scroll de roda do mouse no desktop sem quebrar o comportamento mobile nem as âncoras já corrigidas.

1) Diagnóstico técnico (já confirmado no código)
- O `touch-action` global já foi movido para mobile, então o bloqueio atual provavelmente não vem mais só do CSS.
- Ainda existe um `useEffect` em `src/pages/Index.tsx` que roda em desktop e faz manipulações agressivas no `html/body`:
  - altera meta viewport em runtime
  - força estilos inline no `html/body`
  - executa `window.scrollTo(0,0)` + `body display:none/block` para “reflow”
- Esse bloco é desnecessário no desktop e é o principal candidato a quebrar o comportamento do wheel.

2) Implementação proposta
- Arquivo: `src/pages/Index.tsx`
  - Refatorar o segundo `useEffect` para:
    - manter apenas `trackPageView` sempre
    - aplicar ajustes de viewport/layout somente em mobile (`max-width: 768px`)
    - remover no desktop as mutações inline de `html/body`
    - remover o hack de reflow (`display:none`, `offsetHeight`, `display=""`) que é frágil e pode afetar scroll
- Arquivo: `src/index.css`
  - Tornar explícito no desktop:
    - `html, body { overflow-y: auto; touch-action: auto; }`
  - Manter o comportamento mobile no media query (`touch-action: pan-y`)
  - Se necessário, limitar `overscroll-behavior: none` ao mobile para evitar interferência em desktop.

3) Compatibilidade com as âncoras
- Não alterar a lógica de âncoras nem os `span` âncora que foram criados.
- Manter `scroll-margin-top` e o offset atual para preservar o alinhamento dos títulos.

4) Validação (aceite)
- Desktop:
  - roda do mouse funciona para cima/baixo em toda a página
  - funciona inclusive com mouse sobre formulário e carrossel
- Mobile:
  - continua sem “arraste lateral” indesejado
  - âncoras continuam abrindo com o título logo abaixo do header
