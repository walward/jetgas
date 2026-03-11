

## Correção do Scroll no Desktop

### Problema
As propriedades CSS `touch-action: pan-y` aplicadas no `html` e `body` em `src/index.css` estão restringindo o scroll para apenas gestos de toque (touch), bloqueando o scroll via roda do mouse no desktop. Essas propriedades foram adicionadas para corrigir problemas de scroll horizontal no mobile, mas acabaram afetando o desktop.

### Solução
Aplicar `touch-action: pan-y` apenas em dispositivos mobile usando media query, mantendo o comportamento padrão (`touch-action: auto`) no desktop.

### Detalhes Técnicos

#### Arquivo: `src/index.css`

**Mudanças no seletor `html` (linhas 100-107):**
- Remover `touch-action: pan-y` do escopo global
- Mover para dentro de uma media query `@media (max-width: 768px)`

**Mudanças no seletor `body` (linhas 109-118):**
- Remover `touch-action: pan-y` e `-ms-touch-action: pan-y` do escopo global
- Mover para dentro da mesma media query mobile

**Resultado final no CSS:**
```css
html {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  -webkit-overflow-scrolling: touch;
  -webkit-text-size-adjust: 100%;
}

body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  overscroll-behavior: none;
  -webkit-text-size-adjust: 100%;
  /* safe-area padding mantido */
}

@media (max-width: 768px) {
  html, body {
    touch-action: pan-y;
    -ms-touch-action: pan-y;
  }
}
```

#### Arquivo: `src/pages/Index.tsx`
Nenhuma mudanca necessaria neste arquivo.

### Resultado Esperado
- O scroll via roda do mouse funcionara normalmente no desktop
- O comportamento no mobile continuara funcionando corretamente
- As ancoragens existentes nao serao afetadas
