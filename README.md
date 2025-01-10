# Biblioteca Interativa

## 📜 Descrição
Este projeto é um CRUD de uma biblioteca, focado no front-end, com manipulação de dados através do localStorage e modal/dialog.

## Funcionalidades
- Criação de Autor/Livro
- Exclusão de Autor/Livro

## 🛠 Tecnologias Utilizadas

- Vite
- React
- TypeScript
- Docker

## 🏁 Como Rodar o Projeto

Passo a passo:

1.  **Clone o repositório**:

```bash
git clone https://github.com/ItaloCanturil/the-books.git
cd the-books
```

2. **Instale as dependências**:

   O projeto usa o [pnpm](https://pnpm.io/), um gerenciador de pacotes rápido e eficiente.

   Se você ainda não tiver o `pnpm` instalado, instale-o globalmente com:

   ```bash
   npm install -g pnpm
   ```

   Agora, instale as dependências do projeto:

   ```bash
   pnpm install
   ```

3. **Rodando o servidor localmente**:

   Para rodar o servidor de desenvolvimento, execute o comando:

   ```bash
   pnpm dev
   ```

   O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

4. **Rodando o projeto com Docker** (opcional):

   Se preferir rodar o projeto dentro de um contêiner Docker, siga os passos abaixo:

   1. **Construa a imagem Docker**:

   ```bash
   docker build -t my-app .
   ```

   2. **Execute o contêiner Docker**:

   ```bash
   docker run -p 5173:5173 my-app
   ```

   O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

5. **Testando o projeto**:

   Se tudo estiver configurado corretamente, você pode acessar a aplicação em [http://localhost:5173](http://localhost:5173) no seu navegador. 

6. **Fechar o servidor**:

   Para parar o servidor de desenvolvimento local, use `CTRL + C` no terminal onde o servidor está rodando. Para parar o contêiner Docker, use o seguinte comando:

   ```bash
   docker stop <container-id>
   ```

Troubles: 
- OPTIONAL HANDLIGN doesn't work without vite-tsconfig-paths plugin
- Reatividade com context: inicialmente estava centralizando a manipulação dos dados dentro de classes porém ao colocar dentro do context perdia a reatividade, logo fiz a alteração para manipular dentro do próprio context e deu certo.
