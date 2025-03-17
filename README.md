# Gustavo Aragão | Portifolio

## 📝 About the Project

This is my personal portfolio, developed with Next.js, TailwindCSS, and TypeScript, and hosted on Vercel. It showcases my projects, experiences, and contact methods in a modern and responsive way.

💡 Use this portfolio as a foundation to create your own and enhance your web development skills! Feel free to explore the code, modify it, and adapt it to your needs.

It includes:

> - The technologies I specialize in.
> - Sections for my projects and experiences.
> - Contact details and links to social media.

The goal of this portfolio is to serve as a digital business card for recruiters, clients, and potential collaborators.

## 🖥️ Technologies Used

This project was built using the following technologies:

### **🛠️ Main Dependencies:**

- [Next.js 15.2.1](https://nextjs.org/) – React framework for web applications.
- [tsparticles](https://github.com/tsparticles) – Library for particle effects.

### **🖌️ Styling and Tools:**

- [Tailwind CSS 4](https://tailwindcss.com/) – Utility-first CSS framework.
- [React Icons](https://react-icons.github.io/react-icons/) – Icon library for React.

### **⚙️ Development and Code Quality:**

- [TypeScript 5](https://www.typescriptlang.org/) – JavaScript superset with static typing.
- [ESLint 9](https://eslint.org/) – Linting tool for code analysis and standardization.
- [Prettier 3.5.3](https://prettier.io/) – Code formatting tool.

### **🌍 Internationalization:**

- [Next-Intl 3.26.5](https://next-intl-docs.vercel.app/) – Library for language management.

### **📦 Package Manager:**

- [pnpm](https://pnpm.io/) – Fast and efficient alternative to npm.

## 📥 Installation and Usage

### **Prerequisites**

Before starting, make sure you have installed:

- [Node.js](https://nodejs.org/) (recommended: LTS version)
- [pnpm](https://pnpm.io/) (package manager)

### **▶️ Running the project in development mode**

To start the local server, run:

```sh
pnpm dev
```

The site will be available at: [http://localhost:3000](http://localhost:3000)

### **📦 Building for Production**

To create an optimized production build, run:

```sh
pnpm build
pnpm start
```

## 📂 Code Structure

The project is organized as follows:

```sh
📦 portfolio/
├── 📁 .next/             # Next.js build (automatically generated)
├── 📁 messages/          # Translation files (en.json, pt-br.json)
├── 📁 node_modules/      # Project dependencies
├── 📁 public/            # Static files (images, fonts, favicon, etc.)
│   ├── 📁 fonts/         # Project fonts
│   ├── 📁 img/           # Images used in the site
├── 📁 src/               # Main source code
│   ├── 📁 app/           # Next.js App Router structure
│   │   ├── 📁 (locale)/  # Localization configuration
│   │   ├── layout.tsx    # Global site layout
│   │   ├── page.tsx      # Main page
│   ├── 📁 components/    # Reusable components
│   │   ├── 📁 bg/        # Background-related components
│   │   ├── 📁 labelbox/  # Components for displaying labels
│   │   ├── 📁 li/        # Reusable lists and items
│   │   ├── 📁 popbutton/ # Interactive buttons
│   ├── 📁 section/       # Main portfolio sections
│   │   ├── 📁 contact/   # Contact section
│   │   ├── 📁 experiences/ # Professional experience section
│   │   ├── 📁 projects/  # Projects showcase
│   │   ├── 📁 technologystack/ # Technologies used
│   │   ├── component.tsx # Main component for sections
│   │   ├── index.tsx     # Index file for sections
│   ├── 📁 i18n/          # Internationalization configuration
│   ├── 📁 styles/        # Global styles
├── middleware.ts         # Next.js middleware
├── .gitignore            # Files ignored by Git
├── eslint.config.mjs     # ESLint configuration
├── next-env.d.ts         # Global TypeScript definitions for Next.js
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # pnpm lock file
├── postcss.config.mjs    # PostCSS configuration
├── README.md             # Project documentation
├── tsconfig.json         # TypeScript configuration
```

### **📌 Explanation of Key Folders**

- **`/public`** → Contains images, fonts, and other static files.
- **`/src/app`** → Page and layout structure using **Next.js App Router**.
- **`/src/components`** → Reusable components categorized for better organization.
- **`/src/section`** → Specific site sections such as **Projects, Contact, and Technologies**.
- **`/messages`** → JSON files containing translated text for different languages.
- **`/i18n`** → Configuration for multiple language support using **Next-Intl**.
- **`/styles`** → Styling files (if not fully handled by TailwindCSS).

## 🚀 Deployment

This project is hosted on **[Vercel](https://vercel.com/)** and can be accessed at:

🔗 **[Gustavo Aragão | Portfolio](https://gustavo-aragao.vercel.app)**

### **📦 How Deployment Works**

The deployment is done automatically whenever there is a push to the `main` branch. Vercel detects changes and publishes the updated version of the site without manual configuration.

---

## 📝 Sobre o projeto

Este é o meu portfólio pessoal, desenvolvido com Next.js, TailwindCSS e TypeScript, e hospedado na Vercel. Ele apresenta meus projetos, experiências e formas de contato de maneira moderna e responsiva.

💡 Use este portfólio como uma base para criar o seu próprio e aprender mais sobre desenvolvimento web! Sinta-se à vontade para explorar o código, modificar e adaptar para suas necessidades.

Ele inclui:

> - As tecnologias que domino.
> - Seções para meus projetos e experiências.
> - Meios de contato e links para redes sociais.

O objetivo deste portfólio é servir como um cartão de visitas digital para recrutadores, clientes e colaboradores em potencial.

## 🖥️ Tecnologias Usadas

Este projeto foi desenvolvido com as seguintes tecnologias:

### **🛠️ Dependências Principais:**

- [Next.js 15.2.1](https://nextjs.org/) – Framework React para aplicações web.
- [tsparticles](https://github.com/tsparticles) – Biblioteca para efeitos de partículas.

### **🖌️ Ferramentas e Estilização:**

- [Tailwind CSS 4](https://tailwindcss.com/) – Framework de CSS utilitário.
- [React Icons](https://react-icons.github.io/react-icons/) – Biblioteca de ícones para React.

### **⚙️ Desenvolvimento e Qualidade de Código:**

- [TypeScript 5](https://www.typescriptlang.org/) – Superset do JavaScript para tipagem estática.
- [ESLint 9](https://eslint.org/) – Ferramenta para análise e padronização de código.
- [Prettier 3.5.3](https://prettier.io/) – Formatação automática de código.

### **🌍 Internacionalização:**

- [Next-Intl 3.26.5](https://next-intl-docs.vercel.app/) – Biblioteca para gerenciamento de idiomas.

### **📦 Gerenciador de Pacotes:**

- [pnpm](https://pnpm.io/) – Alternativa rápida e eficiente ao npm.

## 📥 Instalação e Uso

### **Pré-requisitos**

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

### **▶️ Rodando o projeto em ambiente de desenvolvimento**

Para iniciar o servidor local, execute:

```sh
pnpm dev
```

O site ficará disponível em: [http://localhost:3000](http://localhost:3000)

### **📦 Gerando versão de produção**

Se quiser criar uma versão otimizada para produção, rode:

```
pnpm build
pnpm start
```

## 📂 Estrutura do Código

O projeto está organizado da seguinte forma:

```sh
📦 portfolio/
├── 📁 .next/             # Build do Next.js (gerado automaticamente)
├── 📁 messages/          # Arquivos de tradução (en.json, pt-br.json)
├── 📁 node_modules/      # Dependências do projeto
├── 📁 public/            # Arquivos estáticos (imagens, fontes, favicon, etc.)
│   ├── 📁 fonts/         # Fontes usadas no projeto
│   ├── 📁 img/           # Imagens utilizadas no site
├── 📁 src/               # Código-fonte principal do projeto
│   ├── 📁 app/           # Estrutura do App Router do Next.js
│   │   ├── 📁 (locale)/  # Configuração de localização (internacionalização)
│   │   ├── layout.tsx    # Layout global do site
│   │   ├── page.tsx      # Página principal do site
│   ├── 📁 components/    # Componentes reutilizáveis
│   │   ├── 📁 bg/        # Componentes relacionados ao background
│   │   ├── 📁 labelbox/  # Componentes para exibição de rótulos
│   │   ├── 📁 li/        # Listas e itens reutilizáveis
│   │   ├── 📁 popbutton/ # Botões interativos
│   ├── 📁 section/       # Seções principais do portfólio
│   │   ├── 📁 contact/   # Seção de contato
│   │   ├── 📁 experiences/ # Seção de experiências profissionais
│   │   ├── 📁 projects/  # Seção com projetos realizados
│   │   ├── 📁 technologystack/ # Tecnologias utilizadas
│   │   ├── component.tsx # Componente principal das seções
│   │   ├── index.tsx     # Arquivo de indexação das seções
│   ├── 📁 i18n/          # Configuração de internacionalização
│   ├── 📁 styles/        # Arquivos de estilos globais
├── middleware.ts         # Middleware do Next.js
├── .gitignore            # Arquivos ignorados pelo Git
├── eslint.config.mjs     # Configuração do ESLint
├── next-env.d.ts         # Tipagens globais do Next.js
├── next.config.ts        # Configuração do Next.js
├── package.json          # Dependências e scripts do projeto
├── pnpm-lock.yaml        # Arquivo de lock do pnpm
├── postcss.config.mjs    # Configuração do PostCSS
├── README.md             # Documentação do projeto
├── tsconfig.json         # Configuração do TypeScript
```

### **📌 Explicação das principais pastas**

- **`/public`** → Contém imagens, fontes e outros arquivos estáticos.
- **`/src/app`** → Estrutura de páginas e layout utilizando **App Router** do Next.js.
- **`/src/components`** → Componentes reutilizáveis organizados em categorias.
- **`/src/section`** → Seções específicas do site, como **Projetos, Contato e Tecnologias**.
- **`/messages`** → Arquivos JSON contendo textos traduzidos para diferentes idiomas.
- **`/i18n`** → Configuração para suporte a múltiplos idiomas usando **Next-Intl**.
- **`/styles`** → Arquivos de estilização (se não for tudo via TailwindCSS).

## 🚀 Deploy

Este projeto está hospedado na **[Vercel](https://vercel.com/)** e pode ser acessado em:

🔗 **[Gustavo Aragão | Portfólio](https://gustavo-aragao.vercel.app)**

### **📦 Como funciona o deploy**

O deploy é feito automaticamente sempre que há um push para o branch `main`. A Vercel detecta as mudanças e publica a nova versão do site sem necessidade de configuração manual.
