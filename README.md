# 🍳 Desafio Cookfy

Projeto de uma página front-end utilizando **React + Vite**, com estilização em **HTML/CSS/JS**.  
Hospedado no GitHub Pages.

---

## 🚀 Demo

👉 [Acesse aqui o projeto rodando](https://lucas-coimbra.github.io/Desafio-Cookfy/)

---

## 📂 Estrutura das Branches

- **`main`** → contém o código-fonte completo (React, Vite, etc).  
- **`gh-pages`** → contém apenas os arquivos gerados pelo build, usados pelo GitHub Pages para exibir o site online.  

---

## 🛠️ Como rodar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada).  
- [Git](https://git-scm.com/) para clonar o repositório.

### Passo a passo
```bash
# 1. Clone o repositório
git clone https://github.com/lucas-coimbra/Desafio-Cookfy.git

# 2. Entre na pasta do projeto
cd Desafio-Cookfy

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173) (ou porta indicada pelo Vite).

---

## 📦 Como gerar o build

```bash
npm run build
```

Os arquivos finais serão gerados dentro da pasta `dist/`.

---

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy manual na branch `gh-pages`.  
Passos utilizados para publicar:

```bash
npm run build
git checkout gh-pages
git reset --hard
git clean -fd
cp -r dist/* .
git add .
git commit -m "Deploy"
git push origin gh-pages
git checkout main
```

---

## 📸 Layout

(Opcional: pode colocar prints ou GIFs da interface aqui)

---

## 📄 Licença
Este projeto é de uso pessoal/estudo.  
