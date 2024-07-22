# #9 - React: **<https://newdtmoney-aszurar.netlify.app>**

**OBS**: Essa é a branch main, aqui **simulamos uma API REST com json-server para consumir os dados**. Mas a versão publicada esta feita com o localStorage e dados locais para facilitar a publicação, para acessá-la, vá na branch **[feature/localstorage](https://github.com/Aszurar/DT-money/tree/feature/localstorage)**.

<div align="center">
    <img src="https://i.imgur.com/WH58UbA.png" width="1000" alt="Banner">
</div>

## DT Money

- O projeto tem o intuito de gerenciar seus gastos e ganhos. Podemos registrar entradas, saídas com categorias, valores e  por fim calcularmos seu saldo.

- O objetivo do projeto é entender e praticar os conceitos de como podemos consumir APIs, usar os métodos HTTP: GET, POST, PUT, PATCH e DELETE em conjunto com axios, assim como a própria configuração do axios. Além disso, praticamos mais sobre formulários com React Hook Form focando em componentes Controlados e focamos também em performance verificando as renderizações dos componentes no navegador por meio da extensão React Dev Tools e usamos hooks como useCallback, useMemo e métodos como memo para prevenir renderizações desnecessárias.

- O site foi publicado com CI/CD por meio da plataforma **[Netlify](https://www.netlify.com/)**.
- Acesse e teste o projeto em: **<https://redux-zustand-app.netlify.app>**

  <div align="center">
    <h3><a href="https://redux-zustand-app.netlify.app">Redux-Zustand App</a></h3>

    https://github.com/Aszurar/redux-and-zustand/assets/64987824/9206bf82-d9bc-4c8e-a9a0-93e005027544

  </div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/771472dd-d9ae-4c31-a90c-274c73c071c8/deploy-status)](https://app.netlify.com/sites/newdtmoney-aszurar/deploys) [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![React](https://img.shields.io/badge/-React-%2320232a.svg?style=for-the-badge&logo=react&link=https://react.dev)](https://react.dev/) [![TailwindCSS](https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/) [![Radix UI](https://img.shields.io/badge/Radix%20UI-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=for-the-badge&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/)
</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center">
    <img src="https://i.imgur.com/7qInlx1.gif" width="400" alt="Gif mostrando o projeto">
</div>

<div align="center" >

**[Vídeo no Youtube](https://www.youtube.com/watch?v=8NzPfT-74dM)**

</div>

---

## :information_source: Sobre

- O projeto tem o intuito de gerenciar seus gastos e ganhos. Podemos registrar entradas, saídas com categorias, valores e  por fim calcularmos seu saldo.

- O objetivo desse projeto é entender a forma como podemos **consumir APIs**, melhorar a performance **prevenindo renderizações desnecessária**s e praticar um pouco mais a construção de formulários.

- A acessibilidade foi levada em consideração, com o uso da lib **[axe-core](https://www.npmjs.com/package/@axe-core/react)** para testes e correções de acessibilidade assim como leitor de tela ChromeVox e o uso do **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis como Modais e Tooltips.

- Esse projeto é derivado da formação Reactda **[Rocketseat](https://www.rocketseat.com.br/)**.
  
- **Tela inicial**

<div align="center" >
      <img src="https://i.imgur.com/uvL1bRU.png" width="1000" alt="Tela Inicial">
</div>

---

## :interrobang: Motivo

- O objetivo do projeto é entender e praticar os conceitos de como podemos **consumir APIs**, usar os métodos HTTP: **GET, POST, PUT, PATCH e DELETE** em conjunto com **axios**, assim como a própria **configuração do axios**. Além disso, praticamos mais sobre formulários com React Hook Form focando em **componentes Controlados** e focamos também em performance verificando as renderizações dos componentes no navegador por meio da extensão **React Dev Tools** e usamos hooks como **useCallback**, **useMemo** e métodos como **memo** para **prevenir renderizações desnecessárias**.

### Funcionalidades:

  1. Listagem com todos os gastos e ganhos;
  2. Cadastro de movimentações financeiras com categorias, valores e data atual;
  3. Total de entradas, saídas e saldo;
  4. Responsividade para dispositivos móveis.
  5. Acessibilidade ampliada com o cumprimento de todas regras e avisos do axe-core permitindo a navegação completa de teclado e leitores de voz.

- **Pesquisa de movimentações**
<div align="center" >
      <img src="https://i.imgur.com/mnlSptp.png" width="1000" alt="Pesquisa de movimentações">
</div>

---

## :art: Design

- O Design foi disponibilizado pela Rocketseat, e pode ser acessado no link abaixo:
<div align="center">
  <h3><a href="https://www.figma.com/design/XaDRpS7QidcQyb1TFtM5jc/DT-Money-%E2%9C%85?node-id=0-1&t=eoK7W6icuo7wrhig-0">DT Money</a></h3>

  [![Design](https://i.imgur.com/frv6KX6.png)](https://www.figma.com/design/XaDRpS7QidcQyb1TFtM5jc/DT-Money-%E2%9C%85?node-id=0-1&t=eoK7W6icuo7wrhig-0)
</div>

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. ReactJS
  3. Vite
  4. Yarn(ou NPM)

- **Cadastro**

<div align="center" >
      <img src="https://i.imgur.com/GGz2NxE.png" width="400" alt="Modal de cadastro">_<img src="https://i.imgur.com/gU7cmYh.png" width="400" alt="Modal de cadastro preenchido">
</div>

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axios](https://axios-http.com/ptbr/docs/intro)**
  2. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  3. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  4. **[Json Server](https://github.com/typicode/json-server)**
  5. **[Netlify](https://www.netlify.com/)**
  6. **[NodeJS](https://nodejs.org/en/)**
  7. **[Phosphor Icons](https://phosphoricons.com/)**
  8. **[Radix UI](https://www.radix-ui.com/)**
  9. **[React](https://pt1.br.react.dev/)**
  10. **[React Hook Form](https://react-hook-form.com/)**
  11. **[Sonner](https://sonner.emilkowal.ski/)**
  12. **[TailwindCSS](https://tailwindcss.com/)**
  13. **[Tailwind Variants](https://www.tailwind-variants.org/)**
  14. **[TypeScript](https://www.typescriptlang.org/)**
  15. **[Vite](https://vitejs.dev/)**
  16. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**
  17. **[zod](https://zod.dev/)**

- **Responsividade**

<div align="center" >
      <img src="https://i.imgur.com/9ORJyNv.png" alt="Tela inicial no modo responsivo" width="280">_<img src="https://i.imgur.com/YMB4xba.png" width="280" alt="Pesquisa de itens na listagem">
      <img src="https://i.imgur.com/1N59DEX.png" alt="Cadastro de movimentações" width="280">_<img src="https://i.imgur.com/SgTQj1o.png" width="280" alt="Cadastro de movimentações">
</div>

---

## :truck: Entrega e distribuição continua

**<https://redux-zustand-app.netlify.app>**

- Para a publicação da aplicação foi por meio da plataforma **[Netlify](https://www.netlify.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
   <img src="https://i.imgur.com/EZKJNG5.png" width="1000" alt="Projeto publicado no Netlify">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/DT-money.git
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:
- Caso esteja na branch **```main```**:
  - Terminal 1: Executando front-end
    
    ```bash
      yarn dev
    ```

  - Terminal 2: Executando servidor json

    ```bash
      yarn dev:server
    ```

- Caso esteja na branch **```feature/localstorage```**:

    ```bash
      yarn dev
    ```

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
