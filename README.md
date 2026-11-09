<div align="center">

# ♠ Gustavo Aragão ♥

### Cyber Security & Full-Stack Developer

Personal portfolio built as a card table: four suits, four sections, one deck.

[**gustavo-aragao.vercel.app**](https://gustavo-aragao.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[English](#-english) · [Português](#-português)

</div>

---

# 🇺🇸 English

## The idea

The whole site follows one metaphor: **a hand of playing cards**. Each section is a suit, and the content is dealt as cards.

| Suit | Section | What the cards are |
| :-: | --- | --- |
| ♥ | **Stack** | Technologies. Suit = field, rank = proficiency. |
| ♣ | **Experience** | Jobs, from the most recent (Ace) to the oldest. |
| ♦ | **Projects** | Selected work, each one a link. |
| ♠ | **Contact** | E-mail, WhatsApp, LinkedIn and GitHub. |

In the **Stack** section, the suit of a card is the field (♥ front-end, ♠ back-end, ♣ security and tooling, ♦ desktop and automation) and the rank is the proficiency: `A` = 100%, `K` = 80–99%, `Q` = 70%, `J` = 60%, `10` = 50%.

## Look and feel

- **Black, white and red** only. Dark mode is a black table with white cards; light mode inverts it. The red is the single accent color.
- **Motion everywhere, restrained:** letters rise out of a mask, cards are dealt in with a stagger, and link cards tilt in 3D following the pointer with a red glare. A red ring follows the cursor, a spotlight follows the mouse, and a marquee of suits runs along the bottom.
- **Names never break.** The `Fit` component shrinks text to the width of its container (CSS container query units) instead of breaking a word in half.
- **Accessible motion:** everything respects `prefers-reduced-motion`. The cursor ring is hidden on touch devices.
- **No flash on load:** the saved theme is applied by an inline script before the first paint.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack in dev) · [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) + CSS variables for the theme |
| i18n | [next-intl 4](https://next-intl.dev/) (`pt-br` default, `en`) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Fonts | Montserrat (local) · Playfair Display (`next/font`) |
| Quality | ESLint 9 · Prettier |
| Package manager | [pnpm](https://pnpm.io/) |

There are no animation or particle libraries: every effect is CSS plus a few small `requestAnimationFrame` and pointer handlers.

## Getting started

**Requirements:** [Node.js](https://nodejs.org/) (LTS) and [pnpm](https://pnpm.io/) (`corepack enable` picks the right version).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Serves the production build |
| `pnpm lint` | Runs ESLint |

> ⚠️ Don't run `pnpm build` while `pnpm dev` is running: both write to `.next/` and the dev server breaks with `ENOENT` errors. If it happens, stop it, run `rm -rf .next` and start again.

## Languages

Routes are prefixed by locale, with Portuguese as the default and no prefix:

| URL | Language |
| --- | --- |
| `/` | Português (default) |
| `/en` | English |

- The **PT | EN** switch (bottom right) keeps the active section when you change language.
- The active section is also kept in the URL hash (`#exp`, `#proj`…).
- Page title, description, `hreflang` and Open Graph are generated per language in `generateMetadata`.

## Editing the content

Almost everything is data, so you rarely need to touch the layout.

| I want to change… | Edit |
| --- | --- |
| Texts, role, job titles, project descriptions | `messages/pt-br.json` and `messages/en.json` |
| Technologies, levels and suits | `src/components/section/technologystack/component.tsx` |
| Jobs, ranks and links | `src/components/section/experiences/component.tsx` |
| Projects, names and links | `src/components/section/projects/component.tsx` |
| Contact links | `src/components/section/contact/component.tsx` |
| Colors and theme | CSS variables at the top of `src/styles/globals.css` |

**Adding a project:** add an entry to `PROJECTS` (key, rank, name, `kind` = `site` or `repo`, url) and add `Projects.items.<key>.type` and `.desc` to **both** message files.

**Adding a language:** add it to `locales` in `src/i18n/routing.ts`, create `messages/<locale>.json`, and add its label to `ToggleLang`.

## Project structure

```text
portifolio/
├── messages/                  # Translations (pt-br.json, en.json)
├── public/img/icon.svg        # Favicon
└── src/
    ├── app/[locale]/
    │   ├── layout.tsx         # Fonts, theme script, metadata, i18n provider
    │   └── page.tsx           # Header, navigation and active section
    ├── components/
    │   ├── bg/                # Grid, grain, spotlight, giant spade and cursor ring
    │   ├── card/              # Playing card (3D tilt), suits and the aces fan
    │   ├── fit/               # Text that shrinks to fit instead of breaking
    │   ├── split/             # Letter-by-letter reveal, grouped by word
    │   ├── li/                # Navigation item
    │   ├── marquee/           # Scrolling ticker
    │   ├── popbutton/         # Language switch and theme toggle
    │   └── section/           # Section shell + stack, experience, projects, contact
    ├── i18n/                  # next-intl routing, request config and navigation
    ├── middleware.ts          # Locale detection and redirects
    └── styles/                # globals.css (tokens, cards, motion) and fonts.css
```

## Deploy

Hosted on [Vercel](https://vercel.com/). Any push to the main branch triggers a new deploy. To run it elsewhere, use `pnpm build && pnpm start`.

## Contact

[E-mail](mailto:gus.aragao26@gmail.com) · [LinkedIn](https://www.linkedin.com/in/gustavo-aragao-dev/) · [GitHub](https://github.com/KaoreSactra/)

---

# 🇧🇷 Português

## A ideia

O site inteiro segue uma metáfora: **uma mão de cartas de baralho**. Cada seção é um naipe e o conteúdo é "distribuído" em cartas.

| Naipe | Seção | O que são as cartas |
| :-: | --- | --- |
| ♥ | **Stack** | Tecnologias. Naipe = área, valor = nível de domínio. |
| ♣ | **Experiências** | Empregos, do mais recente (Ás) ao mais antigo. |
| ♦ | **Projetos** | Trabalhos selecionados, cada um é um link. |
| ♠ | **Contato** | E-mail, WhatsApp, LinkedIn e GitHub. |

Na seção **Stack**, o naipe da carta é a área (♥ front-end, ♠ back-end, ♣ segurança e ferramentas, ♦ desktop e automação) e o valor é o nível: `A` = 100%, `K` = 80–99%, `Q` = 70%, `J` = 60%, `10` = 50%.

## Visual e movimento

- **Só preto, branco e vermelho.** O modo escuro é uma mesa preta com cartas brancas; o claro inverte. O vermelho é a única cor de destaque.
- **Movimento em todo lugar, com contenção:** as letras sobem de uma máscara, as cartas são distribuídas em sequência e as cartas com link inclinam em 3D seguindo o ponteiro, com brilho vermelho. Um anel vermelho segue o cursor, um spotlight segue o mouse e um letreiro de naipes corre no rodapé.
- **Nomes nunca quebram.** O componente `Fit` encolhe o texto até caber na largura do container (unidades de container query) em vez de quebrar a palavra no meio.
- **Movimento acessível:** tudo respeita `prefers-reduced-motion`. O anel do cursor some em telas de toque.
- **Sem flash ao carregar:** o tema salvo é aplicado por um script inline antes da primeira pintura.

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack no dev) · [React 19](https://react.dev/) |
| Linguagem | [TypeScript 5](https://www.typescriptlang.org/) |
| Estilo | [Tailwind CSS 4](https://tailwindcss.com/) + variáveis CSS para o tema |
| i18n | [next-intl 4](https://next-intl.dev/) (`pt-br` padrão, `en`) |
| Ícones | [React Icons](https://react-icons.github.io/react-icons/) |
| Fontes | Montserrat (local) · Playfair Display (`next/font`) |
| Qualidade | ESLint 9 · Prettier |
| Gerenciador de pacotes | [pnpm](https://pnpm.io/) |

Não há bibliotecas de animação nem de partículas: todo efeito é CSS mais alguns pequenos handlers de `requestAnimationFrame` e de ponteiro.

## Como rodar

**Requisitos:** [Node.js](https://nodejs.org/) (LTS) e [pnpm](https://pnpm.io/) (`corepack enable` usa a versão certa).

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | Servidor de desenvolvimento com Turbopack |
| `pnpm build` | Build de produção |
| `pnpm start` | Serve o build de produção |
| `pnpm lint` | Roda o ESLint |

> ⚠️ Não rode `pnpm build` enquanto o `pnpm dev` estiver aberto: os dois escrevem em `.next/` e o servidor de desenvolvimento quebra com erros `ENOENT`. Se acontecer, pare o servidor, rode `rm -rf .next` e suba de novo.

## Idiomas

As rotas têm prefixo de idioma, com português como padrão e sem prefixo:

| URL | Idioma |
| --- | --- |
| `/` | Português (padrão) |
| `/en` | English |

- O seletor **PT | EN** (canto inferior direito) mantém a seção ativa ao trocar de idioma.
- A seção ativa também fica no hash da URL (`#exp`, `#proj`…).
- Título, descrição, `hreflang` e Open Graph são gerados por idioma no `generateMetadata`.

## Editando o conteúdo

Quase tudo é dado, então raramente é preciso mexer no layout.

| Quero mudar… | Edite |
| --- | --- |
| Textos, cargo, funções, descrição dos projetos | `messages/pt-br.json` e `messages/en.json` |
| Tecnologias, níveis e naipes | `src/components/section/technologystack/component.tsx` |
| Empregos, valores das cartas e links | `src/components/section/experiences/component.tsx` |
| Projetos, nomes e links | `src/components/section/projects/component.tsx` |
| Links de contato | `src/components/section/contact/component.tsx` |
| Cores e tema | Variáveis CSS no topo de `src/styles/globals.css` |

**Adicionar um projeto:** inclua uma entrada em `PROJECTS` (key, rank, name, `kind` = `site` ou `repo`, url) e adicione `Projects.items.<key>.type` e `.desc` nos **dois** arquivos de mensagens.

**Adicionar um idioma:** inclua em `locales` no `src/i18n/routing.ts`, crie `messages/<locale>.json` e adicione o rótulo em `ToggleLang`.

## Estrutura do projeto

```text
portifolio/
├── messages/                  # Traduções (pt-br.json, en.json)
├── public/img/icon.svg        # Favicon
└── src/
    ├── app/[locale]/
    │   ├── layout.tsx         # Fontes, script de tema, metadata, provider de i18n
    │   └── page.tsx           # Cabeçalho, navegação e seção ativa
    ├── components/
    │   ├── bg/                # Grade, grão, spotlight, espadas gigante e anel do cursor
    │   ├── card/              # Carta de baralho (tilt 3D), naipes e leque de ases
    │   ├── fit/               # Texto que encolhe para caber em vez de quebrar
    │   ├── split/             # Revelação letra por letra, agrupada por palavra
    │   ├── li/                # Item de navegação
    │   ├── marquee/           # Letreiro rolante
    │   ├── popbutton/         # Seletor de idioma e alternador de tema
    │   └── section/           # Casca da seção + stack, experiências, projetos, contato
    ├── i18n/                  # Roteamento, configuração de request e navegação do next-intl
    ├── middleware.ts          # Detecção de idioma e redirecionamentos
    └── styles/                # globals.css (tokens, cartas, movimento) e fonts.css
```

## Deploy

Hospedado na [Vercel](https://vercel.com/). Qualquer push na branch principal dispara um novo deploy. Para rodar em outro lugar, use `pnpm build && pnpm start`.

## Contato

[E-mail](mailto:gus.aragao26@gmail.com) · [LinkedIn](https://www.linkedin.com/in/gustavo-aragao-dev/) · [GitHub](https://github.com/KaoreSactra/)
