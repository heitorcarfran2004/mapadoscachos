# +100 Penteados para Cabelos Cacheados Infantis — página de vendas

Rodar local: `node server.cjs` → http://localhost:3121

Copy do Heitor (21/10/2026), seção por seção. Layout modelado da LP de Guias de Contas (`funis/guias-de-contas`),
com a identidade desta página (rosa #E2457A, lilás #5B3FA0/#7C5CC4, menta #3FB8A6, creme, Fredoka).
Concorrente modelado: `site.cabelodescomplicado.shop` (análise em `pesquisa/biblioteca-penteados/`).

## Imagens (26/10/2026)

Todas em `assets/`, webp com srcset, `width`/`height` e `loading="lazy"` (o hero entra com preload + `fetchpriority="high"`).
Originais do ChatGPT em `_geracao/geradas/` (conversa de cada uma em `_geracao/geradas/conversas.txt`), prompts em
`_geracao/prompts/`, anexos usados em `_geracao/refs/`. A troca dos `.ph` foi feita por `_geracao/trocar-imagens.cjs`
(cópia do HTML de antes em `_geracao/index.antes-imagens.html`).

| bloco | arquivo | de onde vem |
|---|---|---|
| Hero (1:1) | `hero-460/760/1200.webp` | ChatGPT (`hero2.png`): tablet com a capa real, celular com a pág. 097-p1, folhas impressas 046-p1 e 021-p2. A 1ª versão (`hero.png`) cortava a capa no tablet e foi refeita. |
| Carrossel do material (6 págs, 2 levas) | `paginas/*.webp` (620 px) + `paginas-sm/*.webp` (340 px) | páginas REAIS: 097-p1, 021-p2, 046-p1, 089-p2, Preparação expressa, 080-p1. Mantêm a proporção A4 (620x876), sem corte. |
| Exemplo | `paginas/024-p2.webp` + `024-p2-1055.webp` (2x) | página REAL: passo a passo do 024 (Dois Topinhos com Laços), 7 fotos. Sem marcações: redesenhar a página no ChatGPT estragaria o texto miúdo. |
| 6 fotos "Penteado pronto" | `fotos/p1-097 … p6-094.webp` (436x368) | recorte da foto grande das p1 reais: 097 puffs com flor, 024 topinhos com laço, 089 rede de liguinhas, 046 puff com faixa, 080 escama de peixe, 094 duas tranças |
| Tudo incluso (4:3) | `mockup-tudo-620/1240.webp` | ChatGPT (`tudo.png`, 1536x1024 recortado nas laterais para 4:3): livro com a capa real + celular com a pág. 001-p2 |
| 4 bônus (16:9) | `bonus/b1..b4-520/1040.webp` | ChatGPT: mockup sobre lilás (`mock-bN.png`), a partir das capas planas geradas antes (`capa-bN.png`) |
| Capas planas dos bônus | `bonus/capa-b1..b4.webp` (600 px; PNG A4 em `_geracao/geradas/capa-bN.png`) | ChatGPT, no padrão da capa principal. Não estão na página: servem para o cadastrador (bumps) e o entregador. |
| Plano Essencial | — | **sem imagem** (pedido do Heitor, 26/10). `planos/essencial-*.webp` ficou na pasta, sem uso. |
| Plano Completo, versão em uso | `planos/completo-transp-460/920.webp` | ChatGPT (`completo-transparente.png`, RGBA): os mesmos 5 livros do `completo.png` com **fundo transparente**, sem mesa, pente e elásticos. |
| Plano Completo (4:3) | `planos/completo-460/920.webp` | ChatGPT (`completo.png`, 1448x1086): guia na frente + os 4 bônus em leque, com as capas planas anexadas. A 1ª versão (16:9, `completo-v1-16x9.png`) não cabia em 4:3 e tinha texto errado numa caixinha do bônus 02. |

Para refazer uma imagem: `bash _geracao/fila.sh "nome|prompt.txt|anexo1.png,anexo2.png"` (gera em aba própria
do Chrome 9222 pelo `scripts/pit-gpt-imagem.cjs`; pula o que já existe em `geradas/`).
Conferência: `node _geracao/conferir-tela.cjs 390 _geracao/prints/celular-390.jpg` (e `1440 …desktop-1440.jpg`):
rolagem horizontal, imagens quebradas/esticadas, ids duplicados e print da página inteira.

Trocar página do carrossel = trocar nas DUAS levas (a segunda é a emenda do loop).

## Falta preencher
- **Depoimentos:** os 5 `.ph` de `#deps-trilho` continuam reservados (9:16) para os prints reais do Heitor.
  Salvar em `assets/depoimentos/dep-01.webp`… (~560 px de largura) e trocar cada `<div class="ph">` por
  `<img src="assets/depoimentos/dep-01.webp" width="560" height="…" loading="lazy" decoding="async" alt="…">`
  (precisa de uma regra `.dep-slide img{width:100%;height:auto;border-radius:16px}`).
- **Bônus:** os 4 bônus ainda NÃO existem como material. As capas estão prontas; o conteúdo é fila do `entregador`.
- **Preços:** os dois `R$ __,__` (procure o comentário `PRECO`).
- **Checkout Wiapy:** `.js-checkout-essencial` (Plano Essencial) e `.js-checkout-completo` (Plano Completo e fechamento).
  Os botões do hero e do rodapé levam para `#oferta`.
- **Rastreio:** Meta Pixel e UTMify nos comentários do `<head>`.
- **Rodapé:** links de Termos e Política com `href="#"`.

`.vercelignore` deixa `_geracao/`, os .md e o HTML antigo fora do deploy. Não publicado na Vercel.
