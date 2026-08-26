# Mapa Operacional do Projeto Trixon

> Documento principal de consulta antes de qualquer comando, alteracao ou decisao tecnica.
> Para regras visuais e UX, consultar tambem design.md.

## 1. Identificacao

- Projeto: Trixon
- Tipo: landing page institucional B2B para tecnologia e consultoria de TI
- Repositorio: https://github.com/viniciusaqueiroz/Trixon
- Branch principal: main
- Hospedagem atual: Vercel em https://trixonjf.vercel.app/
- GitHub Pages: fluxo legado mantido apenas pelo script gh-pages
- Caminho local: C:\Users\supor\Desktop\meu-portfolio\Trixon
- Backend, banco e API de formulario: inexistentes
- Aplicacao: pagina unica, estatica no frontend

## 2. Consulta obrigatoria

Antes de executar qualquer comando ou editar qualquer arquivo:

1. Ler este mapa e identificar a area afetada.
2. Ler design.md se a mudanca envolver visual, layout, interacao, acessibilidade ou conteudo.
3. Consultar docs/PROJECT_MAP.md para detalhes tecnicos complementares.
4. Verificar o Git com git status --short --branch.
5. Localizar imports, referencias, IDs e dependencias com rg.
6. Definir o menor conjunto de arquivos necessario.
7. Editar usando apply_patch.
8. Validar com testes e build proporcionais ao risco.
9. Atualizar este mapa e design.md quando a arquitetura ou uma regra mudar.

## 3. Linguagens e formatos

| Tecnologia | Uso | Local |
| --- | --- | --- |
| JavaScript ES Modules | Logica, estado e composicao React | src/**/*.js |
| JSX | Markup dos componentes | src/**/*.jsx e src/App.js |
| CSS | Estilos globais, Tailwind e animacoes | src/index.css e src/App.css |
| PostCSS | Pipeline CSS | postcss.config.js |
| JSON | Dependencias, manifest e metadados | package.json, package-lock.json |
| HTML | Documento base e SEO | public/index.html |
| SVG | Favicon e icones inline | public/favicon.svg e componentes |
| Markdown | Documentacao | README.md, docs/, design.md, mapa.md |
| PowerShell | Terminal local no Windows | comandos de desenvolvimento |

## 4. Tecnologias atuais

### Aplicacao
- React 19.2.x e React DOM 19.2.x
- Create React App via react-scripts 5.0.1
- React Strict Mode
- Node.js e npm

### Estilos
- Tailwind CSS 3.4.x
- PostCSS 8.5.x
- Autoprefixer 10.5.x
- postcss-nesting antes de Tailwind
- CSS global em src/index.css

### UI, movimento e recursos
- Framer Motion para entradas, transicoes e pulsos
- GSAP + ScrollTrigger para ScrollFloat orientado por scroll
- Swiper para o carrossel de depoimentos
- react-tsparticles e tsparticles-slim para particulas do Hero
- react-icons para Font Awesome
- @heroicons/react para icones outline e solid

### Testes e qualidade
- React Testing Library
- Jest e ESLint fornecidos pelo Create React App
- npm audit para vulnerabilidades

### Publicacao
- gh-pages permanece para o fluxo antigo
- homepage: removido para que o CRA gere assets na raiz, compativel com Vercel
- Projeto Vercel: https://vercel.com/vinieprojects/trixonjf
- Build Vercel esperado: npm run build, com saida build/
- Saida de build: build/

## 5. Fluxo da aplicacao

1. public/index.html define idioma, viewport, SEO e o elemento root.
2. src/index.js cria a raiz React, importa index.css e renderiza App.
3. src/App.js monta a pagina nesta ordem:

Navbar -> Hero -> Services -> About -> Benefits -> Testimonials -> CTA -> ContactForm -> Footer

### IDs publicos

| ID | Componente | Funcao |
| --- | --- | --- |
| top | Navbar | Voltar ao topo pelo logo |
| servicos | Services | Lista de servicos |
| sobre | About | Posicionamento institucional |
| beneficios | Benefits | Resultados para o cliente |
| depoimentos | Testimonials | Prova social |
| cta | CTA | Chamada comercial |
| contato | ContactForm | Conversao final |
| footer | Footer | Informacoes finais |

O Navbar intercepta as ancoras e aplica scroll suave com offset aproximado de 85px. Alteracoes de altura do header exigem revisar esse offset.

## 6. Estrutura de pastas

    /
    |- public/
    |  |- index.html       Documento base, SEO e metadados
    |  |- manifest.json    Manifesto legado do CRA
    |  |- robots.txt       Regras de crawlers
    |  |- favicon.svg      Favicon
    |  '  - images/         Assets publicos duplicados/legados
    |- src/
    |  |- App.js           Composicao da landing
    |  |- App.css           Vazio atualmente
    |  |- index.js          Entrada React
    |  |- index.css         Tailwind, fontes e animacoes
    |  |- App.test.js       Teste inicial do CRA
    |  |- setupTests.js     Setup do Jest DOM
    |  |- reportWebVitals.js Metricas opcionais
    |  |- assets/images/    Assets importados pelos componentes
    |  '  - components/      Secoes e controles
    |- docs/PROJECT_MAP.md  Mapa tecnico complementar
    |- design.md           Contrato visual e UX
    |- mapa.md             Este mapa operacional
    |- package.json        Scripts e dependencias
    |- package-lock.json   Arvore exata de dependencias
    |- tailwind.config.js  Tokens Tailwind
    |- postcss.config.js   Plugins CSS
    '  - README.md           Documentacao legada do CRA

## 7. Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| src/App.js | Ordem e composicao da pagina |
| components/Navbar.jsx | Header fixo, menu mobile, scroll e logo |
| components/Hero.jsx | Primeira dobra, imagem, overlay, particulas e CTA |
| components/Services.jsx | Quatro servicos em grid |
| components/About.jsx | Texto institucional e imagem |
| components/Benefits.jsx | Tres beneficios orientados a resultados |
| components/Testimonials.jsx | Depoimentos em carrossel |
| components/CTA.jsx | Chamada comercial e WhatsApp |
| components/ContactForm.jsx | Formulario e painel de seguranca |
| components/Footer.jsx | Contato, links e creditos |
| components/ScrollFloat.jsx | Animacao de headings por scroll, com GSAP/ScrollTrigger |
| components/ScrollFloat.css | CSS isolado do ScrollFloat, herdando o visual do heading |
| tailwind.config.js | Cores, fontes e conteudo Tailwind |
| src/index.css | Fontes, diretivas Tailwind e animacoes globais |
| postcss.config.js | Ordem dos plugins de CSS |

Header.jsx e ParticlesBackground.jsx parecem legados e nao sao usados por App.js. Confirmar referencias antes de reutilizar ou remover.

## 8. Estado e dados

- Nao existe roteamento, contexto ou estado global.
- Navbar possui menuOpen e isScrolled.
- ContactForm possui formData e status.
- Services, Benefits e Testimonials sao apresentacionais.
- Benefits e Testimonials mantem arrays locais de conteudo.
- Textos comerciais estao embutidos nos componentes.
- O formulario valida no cliente, escreve no console e exibe sucesso local.
- O formulario nao envia para backend, email, CRM ou API.
- WhatsApp e o unico destino externo de conversao.
- ScrollFloat usa GSAP/ScrollTrigger para animar headings principais de Services, About, Benefits, Testimonials, CTA e ContactForm durante o scroll.

## 9. Design e responsividade

Os parametros completos ficam em design.md. Resumo operacional:

- Tema claro, azul profundo, gradientes frios e superficies brancas.
- Manrope para corpo, Sora para headings e Orbitron para marca.
- Token primary: #1e3a8a; secondary: #64748b; accent: #ffffff.
- Containers principais max-w-6xl; CTA max-w-4xl; Hero max-w-3xl.
- Breakpoints: md 768px e lg 1024px.
- Services: 1/2/4 colunas por faixa.
- Benefits: 1/3 colunas.
- About e ContactForm: 1/2 colunas.
- Testimonials: 1/2/3 slides.
- Secoes geralmente usam py-20; cards usam p-6 ou p-8.
- Navbar z-50; overlays e fundos z-0; conteudo do Hero z-10.
- Animar transform e opacity; respeitar teclado e reduced motion.
- Alvos interativos devem ter no minimo 44px.
- Contraste minimo WCAG AA e foco visivel sao obrigatorios.

## 10. Assets

Assets em uso:

- src/assets/images/hero-bg.png: fundo do Hero, aproximadamente 2MB.
- src/assets/images/about-icon.png: imagem do About, aproximadamente 33KB.
- public/favicon.svg: favicon.

Possiveis duplicatas:

- public/images/hero-bg.png
- public/images/hero-bg copy.png
- public/images/about-icon.png
- public/images/about-icon copy.png
- src/hero-bg.png

Nao remover, mover ou otimizar sem verificar referencias com rg. Avaliar WebP/AVIF, dimensoes e loading lazy antes de adicionar midia.

## 11. Comandos oficiais

Executar a partir do caminho local do projeto.

### Diagnostico

    git status --short --branch
    git remote -v
    rg --files -g '!node_modules' -g '!build'
    rg -n "termo" src public

### Dependencias

    npm ci
    npm outdated
    npm audit
    npm audit --omit=dev
    npm ls --depth=0

Usar npm ci para reproduzir package-lock. Nao aplicar npm audit fix --force automaticamente: avaliar breaking changes e validar build/testes.

### Desenvolvimento

    npm start

URL atual:

    http://localhost:3000

O projeto usa a raiz no desenvolvimento e na Vercel. O sufixo /Trixon pertence apenas ao fluxo antigo do GitHub Pages.

### Validacao

    npm test
    npm run build
    git diff --check
    git status --short --branch

Quando o servidor estiver ativo, confirmar resposta HTTP local e revisar o terminal para warnings.

### Deploy legado

    npm run predeploy
    npm run deploy

Nao executar deploy ou push sem solicitacao explicita.

## 12. Processo de alteracao

### Conteudo
1. Identificar o componente dono.
2. Conferir tom de voz e regras em design.md.
3. Editar em UTF-8 e revisar acentuacao.
4. Testar mobile, desktop e build.

### Visual
1. Ler design.md.
2. Identificar token, componente e breakpoint afetados.
3. Reutilizar Tailwind e tokens antes de criar CSS ou hex novos.
4. Verificar contraste, foco, reduced motion e ausencia de scroll horizontal.
5. Executar npm run build.

### Interacao
1. Mapear estado e efeitos colaterais atuais.
2. Confirmar teclado, foco, touch target e feedback.
3. Preservar IDs publicos e fluxo de conversao.
4. Testar estados inicial, ativo, erro, sucesso e mobile.
5. Adicionar teste para logica relevante.

### Dependencia
1. Rodar npm audit, npm outdated e npm ls.
2. Classificar como runtime, build ou teste.
3. Atualizar package.json e package-lock juntos.
4. Rodar npm ci, npm test e npm run build.
5. Separar vulnerabilidades de producao e desenvolvimento.
6. Registrar breaking changes e warnings restantes.

### Remocao
1. Confirmar imports e referencias com rg.
2. Confirmar que o alvo e realmente legado.
3. Remover somente o alvo autorizado.
4. Rodar testes/build e revisar Git.
5. Atualizar este mapa.

## 13. Regras de seguranca

- Nunca usar git reset --hard ou git checkout -- sem autorizacao explicita.
- Nunca apagar pastas amplas ou alterar arquivos nao relacionados.
- Nunca commitar credenciais, tokens, .env ou dados de clientes.
- Nunca inserir credenciais na URL do remoto.
- Nao fazer push, deploy ou alterar servicos externos sem solicitacao.
- Nao usar npm audit fix --force sem plano de migracao.
- Preservar alteracoes existentes de um worktree sujo.

## 14. Migracao para Vercel

Antes da migracao:

- Decidir se CRA sera mantido ou substituido.
- Manter homepage removido para que os assets sejam resolvidos a partir da raiz na Vercel.
- Confirmar build npm run build e output build/.
- Definir dominio, redirects, headers e variaveis de ambiente.
- Integrar o formulario a endpoint seguro.
- Decidir se gh-pages sera removido.
- Atualizar mapa e design.md apos a decisao.

## 15. Definition of done

Uma alteracao esta pronta quando:

- Este mapa e design.md foram consultados.
- Arquivos afetados e escopo estao claros.
- O diff nao tem mudancas acidentais.
- Mobile, desktop e landscape foram avaliados quando aplicavel.
- Foco, teclado, contraste e nomes acessiveis foram verificados.
- npm test foi executado quando aplicavel.
- npm run build passou.
- npm audit foi revisado quando dependencias mudaram.
- O servidor local responde quando a mudanca toca runtime.
- Este mapa foi atualizado se uma regra ou tecnologia mudou.
