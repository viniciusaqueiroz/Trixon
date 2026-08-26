# Trixon - Guia de Design da Landing Page

> Documento de referencia para qualquer alteracao visual, de conteudo ou de experiencia na landing page da Trixon.
> Descreve o estado atual e as regras que devem ser preservadas nas proximas evolucoes.

## 1. Identidade do produto

- Produto: landing page institucional B2B para servicos de tecnologia e consultoria de TI.
- Publico: pequenas e medias empresas que precisam de infraestrutura, seguranca, suporte e consultoria.
- Objetivo primario: gerar contato comercial.
- Objetivos secundarios: transmitir confianca tecnica, seguranca, estabilidade e clareza.
- Idioma: portugues do Brasil (pt-BR).
- Direcao visual: tecnologia profissional, confiavel e acessivel, com energia visual moderada.
- Personalidade: tecnica, segura, direta, moderna e consultiva.
- Tema: claro, com superficies brancas e fundos em gradientes frios.

Nao transformar a pagina em dashboard, em interface excessivamente futurista ou em apresentacao generica de agencia. Toda decisao deve reforcar confianca e conversao.

## 2. Arquitetura e fluxo

App.js monta uma unica pagina nesta ordem:

1. Navbar
2. Hero
3. Services
4. About
5. Benefits
6. Testimonials
7. CTA
8. ContactForm
9. Footer

### IDs publicos

| ID | Componente | Funcao |
| --- | --- | --- |
| top | Navbar | Retorno ao topo pelo logo |
| servicos | Services | Lista de servicos |
| sobre | About | Posicionamento institucional |
| beneficios | Benefits | Resultados para o cliente |
| depoimentos | Testimonials | Prova social |
| cta | CTA | Chamada comercial intermediaria |
| contato | ContactForm | Conversao principal |
| footer | Footer | Informacoes finais |

Nao remover ou renomear um ID sem atualizar Navbar, CTA e Footer. A pagina usa scroll suave e o header e fixo.

### Hierarquia de conversao

- Hero: proposta de valor e primeiro CTA.
- Services: capacidades da Trixon.
- About: contexto e posicionamento.
- Benefits: resultados para o cliente.
- Testimonials: prova social.
- CTA: oportunidade comercial repetida.
- ContactForm: conversao final.
- Footer: contato e navegacao auxiliar.

Manter a progressao problema -> capacidade -> beneficio -> confianca -> contato.

## 3. Sistema visual atual

### Cores

Tokens em tailwind.config.js:

| Token | Valor | Uso |
| --- | --- | --- |
| primary | #1e3a8a | CTA, titulos, icones e cards de servico |
| secondary | #64748b | Texto auxiliar do Header legado |
| accent | #ffffff | Branco de destaque |

Cores recorrentes:

- Azul interativo: #2563eb, blue-600 e blue-700.
- Roxo decorativo: #7c3aed e purple-600.
- Verde WhatsApp: green-500 e green-600.
- Texto principal: #0f172a e gray-700.
- Texto secundario: gray-500, gray-200 e blue-100.
- Fundos: white, gray-50, gray-100, gray-200, blue-50 e blue-100.
- Rodape: gray-800.

Regras:

- Usar tokens semanticos antes de inserir hex direto em componentes.
- Preservar azul profundo como cor de confianca e acao.
- Usar roxo somente como acento ou gradiente de marca.
- Reservar verde para WhatsApp ou feedback de sucesso.
- Texto normal deve atingir contraste WCAG AA de 4.5:1.
- Nao comunicar estado apenas por cor.
- Qualquer dark mode deve ser desenhado como par completo, nunca como inversao simples.

### Tipografia

Fontes carregadas por Google Fonts em src/index.css:

| Papel | Familia | Uso |
| --- | --- | --- |
| Corpo | Manrope | Paragrafos, labels e titulos menores |
| Titulos | Sora | h1, h2, display e heading |
| Marca | Orbitron | Logo e destaques da marca |

Classes: font-body, font-heading, font-display e font-orbitron.

Escala observada:

| Elemento | Mobile | Desktop |
| --- | --- | --- |
| Logo do Hero | text-5xl | text-7xl |
| Subtitulo do Hero | text-xl | text-2xl |
| Descricao do Hero | text-base | text-lg |
| Titulos de secao | text-3xl | text-4xl em secoes selecionadas |
| Titulos de cards | text-lg a text-xl | igual |
| Corpo | aproximadamente 16px | text-lg em blocos institucionais |

Regras:

- Corpo com pelo menos 16px em mobile e line-height aproximado de 1.5.
- Paragrafos longos: 35-60 caracteres por linha no mobile e 60-75 no desktop.
- Peso 400 para corpo, 500-600 para labels e 700-800 para titulos/CTAs.
- Orbitron e assinatura visual; usar com parcimonia.
- Nao usar caixa alta em paragrafos longos.
- Todo texto novo deve ser UTF-8 e revisado para evitar caracteres corrompidos.

## 4. Layout e responsividade

### Containers e breakpoints

- Container principal: max-w-6xl com gutters px-4, px-6 ou px-8.
- CTA: max-w-4xl.
- Hero: max-w-3xl.
- Breakpoints Tailwind: md em 768px e lg em 1024px.
- Services: 1 coluna mobile, 2 tablet, 4 desktop.
- Benefits: 1 coluna mobile, 3 desktop.
- About e ContactForm: 1 coluna mobile, 2 desktop.
- Testimonials: 1 slide mobile, 2 a partir de 768px, 3 a partir de 1024px.

### Ritmo e camadas

- Secoes principais: py-20.
- Services: py-16.
- Grids: gap-8 a gap-12.
- Cards: p-6 ou p-8.
- CTAs: px-6 py-3.
- Navbar fixo: z-50.
- Conteudo do Hero: z-10.
- Backgrounds, overlays e particulas: z-0.
- Offset manual atual do scroll: aproximadamente 85px.

Usar escala de 4/8px. Qualquer mudanca na altura do Navbar exige revisar o offset. Nao criar z-index arbitrario sem atualizar este documento.

## 5. Regras por componente

### Navbar

- Header fixo, largura total, branco no topo.
- Depois de 20px de scroll: bg-white/70, blur e sombra.
- Logo TRIXON em Orbitron, gradiente azul/roxo e gradiente animado.
- Menu desktop a partir de md.
- Menu mobile controlado por botao com aria-label, aria-expanded e aria-controls.
- Links sao ancoras internas com scroll suave e compensacao do header.
- CTAs do menu devem ser visualmente mais fortes que links comuns.

### Hero

- Altura h-screen e conteudo centralizado.
- Fundo src/assets/images/hero-bg.png com cover e center.
- Camadas: imagem, gradiente radial animado, particulas, overlay escuro e conteudo.
- Texto branco e proposta de valor curta.
- CTA principal aponta para #cta.
- Indicador inferior aponta para #servicos.
- Nao aumentar efeitos sem verificar legibilidade, reduced motion e performance.

### Services

- Fundo branco.
- Quatro cards azuis usando primary.
- Icones react-icons/fa centralizados, aproximadamente 40px.
- Cards com raio medio, sombra e elevacao discreta no hover.
- Titulo curto e descricao objetiva por servico.

### About

- Gradiente frio gray -> blue -> gray.
- Texto e imagem em duas colunas no desktop.
- Entradas por motion lateral, uma vez por elemento.
- Imagem: src/assets/images/about-icon.png, visual de 256x256.

### Benefits

- Gradiente frio e tres cards brancos.
- Heroicons outline de aproximadamente 48px na cor primary.
- Beneficios devem ser resultados para o cliente, nao apenas nomes tecnicos.

### Testimonials

- Gradiente frio.
- Swiper com autoplay de 3000ms, pausa no hover e paginacao clicavel.
- 1/2/3 cards conforme breakpoint.
- Cards brancos, rounded-xl, sombra e elevacao no hover.
- Estrelas preenchidas indicam rating.
- Cada item precisa de nome, funcao, empresa, texto e rating.
- Se a interacao crescer, adicionar controles e suporte de teclado; nao depender apenas de autoplay.

### ScrollFloat

- Aplicado aos headings principais de Services, About, Benefits, Testimonials, CTA e ContactForm para introduzir movimento durante a navegacao vertical.
- Nao aplicar em Navbar, menus, botoes, formularios, paragrafo, Footer ou titulos internos de cards.
- Deve preservar a tipografia, cor, alinhamento, tamanho e espacamento do heading hospedeiro.
- Parametros atuais: animationDuration 1, ease back.inOut(2), scrollStart center bottom+=50%, scrollEnd bottom bottom-=40% e stagger 0.03.
- Usa GSAP/ScrollTrigger com scrub suavizado de 2.4s e cleanup no desmontar do componente, para manter a progressao perceptivel em scrolls rapidos.
- Com reduced motion, as letras devem permanecer imediatamente visiveis e estaticas.

### CTA

- Fundo em gradiente azul escuro e texto branco.
- Acao primaria: #contato em botao branco.
- Acao secundaria: WhatsApp em verde.
- Links externos devem usar target=_blank e rel=noopener noreferrer.

### ContactForm

- Fundo em gradiente blue-50 -> white -> gray-100.
- Formulario e painel de seguranca em duas colunas no desktop.
- Formulario branco, rounded-xl, sombra e espacamento vertical.
- Campos atuais: nome, email e mensagem.
- Foco usa gradient-border.
- Submit atual e local: valida, escreve no console, limpa e exibe status.
- Integracao real deve ter loading, sucesso, erro, retry e protecao contra envio duplicado.
- Todo campo novo precisa de label visivel, name, tipo semantico e estado de erro acessivel.

### Footer

- Fundo gray-800 com texto branco.
- Tres colunas no desktop: contato, links rapidos e creditos.
- Uma coluna natural no mobile.
- Ano dinamico.

## 6. Movimento e interacao

Animacoes atuais:

- Framer Motion em Hero, About, Benefits, Testimonials e painel de seguranca.
- Entradas combinam opacity com translate ou scale.
- Menu mobile: fade-in-down de 500ms.
- Logo: gradiente em loop de 7s.
- Gradientes radiais do Hero: loop de 12s.
- Particulas: movimento continuo.
- Icone de seguranca: pulso em loop de 2s.
- Hover: translacao vertical aproximada de 1px e sombra.

Regras:

- Animar preferencialmente transform e opacity.
- Microinteracoes futuras: 150-300ms; transicoes complexas: ate 400ms.
- Animacoes devem ser interrompiveis e nunca bloquear clique, scroll ou teclado.
- Implementar prefers-reduced-motion para reduzir particulas, pulso, bounce, parallax e entradas.
- Nao depender de hover para informacao ou acao essencial.
- Evitar muitos elementos animados na mesma viewport.
- Reservar espaco para imagens e conteudo dinamico para evitar CLS.

## 7. Acessibilidade e UX

Requisitos:

- Manter lang=pt-BR.
- Ordem de headings: h1 -> h2 -> h3/h4 sem saltos arbitrarios.
- Imagens informativas com alt descritivo; decorativas com alt vazio.
- Icones isolados com nome acessivel ou contexto equivalente.
- Botoes com tipo explicito, foco visivel e alvo minimo de 44x44px.
- Foco nunca deve ser removido sem substituto visual.
- Teclado deve alcançar Navbar, links, menu, Swiper e formulario em ordem logica.
- Contraste minimo AA: 4.5:1 para texto normal e 3:1 para texto grande.
- Mensagens de formulario proximas do campo e anunciaveis por tecnologia assistiva.
- Nao usar placeholder como substituto de label.
- Links com destinos validos e texto compreensivel fora de contexto.
- Nao desabilitar zoom ou escalonamento de texto.
- Testar 375px, desktop e landscape.

Lacunas conhecidas que nao devem ser repetidas:

- Formulario ainda nao envia dados para um servico real.
- Ha sinais de encoding corrompido em textos existentes; normalizar para UTF-8.
- Icones decorativos devem ser marcados quando necessario.
- Swiper precisa de revisao para teclado, foco e reduced motion.
- Particulas e loops infinitos precisam de estrategia de reduced motion.
- Header.jsx e ParticlesBackground.jsx parecem legados nao usados; confirmar antes de reutilizar.
- ScrollFloat deve manter o texto visivel e sem transformacao quando reduced motion estiver ativo.

## 8. Performance e assets

- hero-bg.png tem aproximadamente 2MB; avaliar WebP/AVIF e imagens responsivas.
- about-icon.png tem aproximadamente 33KB.
- Existem duplicatas em public/images/, src/assets/images/ e src/hero-bg.png; nao criar novas copias.
- Importar assets usados pelo componente a partir de src/assets/images/.
- Imagens abaixo da primeira dobra devem considerar loading=lazy e dimensoes/aspect-ratio.
- Particulas, Framer Motion, GSAP/ScrollTrigger e Swiper sao os maiores pontos de complexidade visual.
- Evitar novas bibliotecas de icones quando Heroicons ou react-icons resolverem o caso.
- Manter componentes apresentacionais e sem estado quando possivel.

## 9. Conteudo e tom de voz

- Portugues brasileiro claro, sem jargao desnecessario.
- Falar de estabilidade, seguranca, eficiencia, escala e suporte.
- Preferir beneficios concretos a listas de tecnologia.
- CTAs com verbo de acao e proximo passo claro.
- Manter termos: infraestrutura, seguranca da informacao, suporte, consultoria de TI e LGPD.
- Nao publicar depoimentos ficticios como comprovados; validar origem.
- Revisar acentos e UTF-8 antes de release.

## 10. Convencoes de implementacao

- Stack: React 19, Create React App, Tailwind CSS 3, PostCSS, Framer Motion, GSAP/ScrollTrigger, Swiper, Heroicons, react-icons e tsParticles.
- Composicao em src/App.js; secoes em src/components/; tokens em tailwind.config.js; CSS global em src/index.css.
- Preferir Tailwind e tokens existentes a CSS local novo.
- Padrao repetido em tres ou mais componentes deve ser avaliado para extracao.
- Arrays de conteudo devem ser separados da estrutura quando crescerem.
- Nao usar Header.jsx como substituto do Navbar sem atualizar App.js e este guia.
- Ao migrar para Vercel ou trocar bundler, preservar o comportamento visual e atualizar esta secao.

## 11. Checklist de futuras alteracoes

Antes de codificar:

- A mudanca tem funcao clara na hierarquia de conversao?
- O componente correto foi identificado?
- Texto novo esta em UTF-8 e revisado?
- Elemento segue tokens de cor, tipografia e espacamento?
- Ha impacto em IDs, scroll, header fixo ou CTA?

Antes de entregar:

- Testar 375px, tablet, desktop e landscape.
- Testar teclado e foco visivel.
- Verificar contraste e nomes acessiveis.
- Verificar reduced motion.
- Confirmar ausencia de scroll horizontal.
- Confirmar que imagens nao causam CLS.
- Executar npm test e npm run build.
- Se dependencias mudaram, executar npm audit e separar producao de desenvolvimento.
- Atualizar este design.md quando tokens, ordem, componentes, breakpoints ou comportamento global mudarem.

## 12. Arquivos de referencia

- Composicao: src/App.js
- Componentes: src/components/
- Tokens: tailwind.config.js
- CSS global: src/index.css
- Pipeline CSS: postcss.config.js
- Assets React: src/assets/images/
- Metadados: public/index.html e public/manifest.json
- Mapa tecnico: docs/PROJECT_MAP.md
