# Mapa Tecnico do Projeto Trixon

## 1. Visao geral

O projeto Trixon e uma landing page institucional de pagina unica feita com React.

- Base: Create React App
- Estilizacao: Tailwind CSS + CSS global em `src/index.css`
- Animacoes: Framer Motion
- Elementos visuais: `react-icons`, `@heroicons/react`, `react-tsparticles`
- Carrossel: Swiper
- Publicacao prevista: GitHub Pages

O fluxo da pagina e linear. O componente `App` monta todas as secoes na ordem em que aparecem na tela:

```text
Navbar
  -> Hero
  -> Services
  -> About
  -> Benefits
  -> Testimonials
  -> CTA
  -> ContactForm
  -> Footer
```

## 2. Estrutura de pastas

```text
/
|- public/
|  |- index.html
|  |- manifest.json
|  |- robots.txt
|  `- images/
|- src/
|  |- assets/images/
|  |- components/
|  |- App.js
|  |- App.css
|  |- App.test.js
|  |- index.js
|  |- index.css
|  |- reportWebVitals.js
|  `- setupTests.js
|- package.json
|- tailwind.config.js
`- postcss.config.js
```

### O que mora onde

| Caminho | Funcao |
| --- | --- |
| `src/index.js` | Ponto de entrada do React. Renderiza `App` dentro de `#root`. |
| `src/App.js` | Composicao principal da pagina e ordem das secoes. |
| `src/components/` | Componentes visuais e secoes da landing page. |
| `src/assets/images/` | Imagens importadas diretamente pelos componentes React. |
| `public/images/` | Imagens estaticas acessiveis por URL publica, hoje sem uso aparente no fluxo atual. |
| `src/index.css` | Tailwind, fontes e animacoes globais. |
| `tailwind.config.js` | Tokens estendidos, hoje principalmente cores `primary`, `secondary` e `accent`. |

## 3. Fluxo da aplicacao

### Inicializacao

1. `public/index.html` fornece o elemento `#root`.
2. `src/index.js` cria a raiz React e renderiza `App`.
3. `src/App.js` importa e empilha todas as secoes da landing page.

### Navegacao

O `Navbar` controla:

- menu mobile aberto/fechado;
- mudanca visual ao rolar a pagina;
- scroll suave para secoes por `id`;
- compensacao manual de `85px` para evitar que o header fixo cubra o destino.

As secoes navegaveis atuais sao:

| ID | Componente |
| --- | --- |
| `servicos` | `Services` |
| `sobre` | `About` |
| `beneficios` | `Benefits` |
| `depoimentos` | `Testimonials` |
| `cta` | `CTA` |
| `contato` | `ContactForm` |

## 4. Mapa dos componentes

| Componente | Responsabilidade | Dependencias principais | Observacoes de manutencao |
| --- | --- | --- | --- |
| `Navbar.jsx` | Header fixo, links e menu mobile | React hooks, `react-icons/fa` | Centraliza a navegacao e o offset do scroll. |
| `Hero.jsx` | Primeira dobra da pagina | Framer Motion, `react-tsparticles`, imagem `hero-bg.png` | Tem background, overlay, particulas e CTA principal. |
| `Services.jsx` | Grade de servicos | `react-icons/fa` | Conteudo estatico diretamente no JSX. |
| `About.jsx` | Bloco institucional | Framer Motion, `about-icon.png` | Texto institucional + imagem. |
| `Benefits.jsx` | Lista de beneficios | Framer Motion, Heroicons | Usa array local `benefits`, mais simples de manter que JSX repetido. |
| `Testimonials.jsx` | Carrossel de depoimentos | Swiper, Framer Motion, Heroicons | Usa array local `testimonials`; autoplay e breakpoints ficam aqui. |
| `CTA.jsx` | Chamada comercial | SVG inline | Contem link direto para WhatsApp. |
| `ContactForm.jsx` | Formulario de contato e painel de confianca | React state, Framer Motion, Heroicons | Hoje valida localmente, apenas registra no console e nao envia dados para backend. |
| `Footer.jsx` | Rodape institucional | React | Ano dinamico via `new Date().getFullYear()`. |
| `Header.jsx` | Header alternativo nao utilizado | Nenhuma externa relevante | Parece legado; `App.js` usa `Navbar`, nao `Header`. |
| `ParticlesBackground.jsx` | Fundo de particulas isolado nao utilizado | `react-tsparticles`, `tsparticles` | Parece tentativa anterior; `Hero.jsx` ja implementa particulas internamente. |

## 5. Dados e estado

O projeto quase nao possui estado global.

| Local | Estado |
| --- | --- |
| `Navbar.jsx` | `menuOpen`, `isScrolled` |
| `ContactForm.jsx` | `formData`, `status` |

Os demais componentes sao essencialmente apresentacionais.

### Conteudo embutido no codigo

Os textos comerciais estao diretamente nos componentes:

- servicos em `Services.jsx`;
- beneficios em `Benefits.jsx`;
- depoimentos em `Testimonials.jsx`;
- textos institucionais em `Hero.jsx`, `About.jsx`, `CTA.jsx`, `ContactForm.jsx` e `Footer.jsx`.

Para manutencoes futuras frequentes de texto, pode valer a pena mover esse conteudo para:

- arquivos de dados em `src/data/`; ou
- um CMS/API, se o site deixar de ser puramente estatico.

## 6. Estilos e identidade visual

### Fontes

- `Orbitron` e carregada via Google Fonts em `src/index.css`.
- A classe utilitaria `.font-orbitron` aplica a fonte aos pontos de marca.

### Cores

As cores customizadas estao em `tailwind.config.js`:

- `primary`: azul escuro
- `secondary`: cinza azulado
- `accent`: branco

### Animacoes globais

`src/index.css` define:

- `animate-fade-in-down` para menu mobile;
- `animate-gradient` para o texto da marca;
- `focus:gradient-border` para inputs do formulario.

## 7. Assets

### Assets efetivamente usados

| Arquivo | Uso |
| --- | --- |
| `src/assets/images/hero-bg.png` | Fundo do `Hero`. |
| `src/assets/images/about-icon.png` | Imagem do `About`. |

### Assets duplicados ou possivelmente ociosos

Existem copias em:

- `public/images/hero-bg.png`
- `public/images/hero-bg copy.png`
- `public/images/about-icon.png`
- `public/images/about-icon copy.png`
- `src/hero-bg.png`

Como o fluxo atual importa imagens a partir de `src/assets/images/`, essas copias merecem revisao antes de novas otimizacoes de bundle e organizacao.

## 8. Dependencias relevantes

| Dependencia | Uso atual |
| --- | --- |
| `react`, `react-dom` | Base da aplicacao |
| `react-scripts` | Scripts do Create React App |
| `tailwindcss`, `postcss`, `autoprefixer` | Pipeline de estilos |
| `framer-motion` | Animacoes de entrada e pulso |
| `react-tsparticles`, `tsparticles-slim` | Particulas do Hero |
| `swiper` | Carrossel de depoimentos |
| `react-icons`, `@heroicons/react` | Icones |
| `gh-pages` | Deploy |

## 9. Pontos de manutencao por tipo de alteracao

### Alterar ordem da pagina

Editar `src/App.js`.

### Alterar links do menu

Editar o array `links` em `src/components/Navbar.jsx`.

### Alterar conteudo comercial

- Servicos: `Services.jsx`
- Beneficios: `Benefits.jsx`
- Depoimentos: `Testimonials.jsx`
- Texto institucional: `Hero.jsx`, `About.jsx`, `CTA.jsx`, `ContactForm.jsx`, `Footer.jsx`

### Alterar identidade visual

- Tokens globais: `tailwind.config.js`
- Fonte e animacoes: `src/index.css`
- Ajustes locais: classes Tailwind dentro dos componentes

### Alterar imagens

- Hero: `src/assets/images/hero-bg.png`
- Sobre: `src/assets/images/about-icon.png`

### Evoluir formulario

O ponto principal e `src/components/ContactForm.jsx`.

Hoje ele:

- valida campos obrigatorios no cliente;
- escreve os dados no console;
- exibe uma mensagem de sucesso local;
- nao integra com e-mail, banco, CRM ou API.

Para uso real, a proxima etapa natural seria ligar `handleSubmit` a um endpoint ou servico de formularios.

## 10. Oportunidades de otimizacao

### Prioridade alta

1. Corrigir os textos com acentuacao quebrada nos arquivos JSX.
2. Ligar o formulario a um destino real ou deixar claro no produto que ainda e demonstrativo.
3. Remover ou consolidar arquivos nao usados (`Header.jsx`, `ParticlesBackground.jsx`, assets duplicados), apos confirmar que nao ha uso planejado.

### Prioridade media

1. Extrair listas de conteudo repetitivo para `src/data/`.
2. Avaliar lazy loading de componentes mais pesados se a pagina crescer.
3. Revisar o uso simultaneo de `react-tsparticles`, `tsparticles` e `tsparticles-slim`; hoje ha sinal de dependencia redundante.
4. Melhorar a cobertura de testes alem do arquivo inicial do CRA.

### Prioridade baixa

1. Padronizar raios de borda e escalas de espacamento entre secoes.
2. Trocar SVG inline do `CTA` por biblioteca de icones ja adotada, se houver interesse em consistencia.

## 11. Riscos tecnicos observados

- O README ainda preserva majoritariamente o texto padrao do Create React App e explica pouco do projeto real.
- Ha caracteres corrompidos em varios textos renderizados, indicando problema de encoding.
- O formulario pode transmitir uma expectativa de envio real sem backend configurado.
- Existem componentes e assets aparentemente sem uso, o que aumenta custo cognitivo em manutencoes futuras.
- A navegacao usa offset fixo de `85px`; mudancas no tamanho do header podem exigir ajuste manual.

## 12. Checklist rapido para futuras alteracoes

Antes de alterar:

1. Confirmar se a mudanca e de conteudo, layout, comportamento ou identidade visual.
2. Comecar pelo componente dono daquela responsabilidade.
3. Verificar se a secao possui `id` usado pela navegacao.
4. Conferir responsividade em mobile e desktop.
5. Rodar `npm test` e `npm run build` quando a mudanca tocar comportamento, imports ou estilos globais.

Depois de alterar:

1. Revisar se a ordem em `App.js` continua correta.
2. Conferir se os links do `Navbar` ainda apontam para secoes existentes.
3. Validar se imagens e imports continuam necessarios.
4. Atualizar este mapa se a arquitetura mudar.
