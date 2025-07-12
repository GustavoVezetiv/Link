# Link Wallet - Aplicativo de Gerenciamento de Links

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-green.svg?style=for-the-badge)



## 📋 Sobre o Projeto

**Link Wallet** é um aplicativo móvel desenvolvido para ajudar usuários a salvar, organizar e acessar seus links importantes de forma rápida e eficiente. Com ele, é possível categorizar links, gerar QR Codes para compartilhamento fácil e arquivar links que não são mais de uso frequente, mantendo sua lista principal sempre limpa e organizada.

O projeto foi construído utilizando tecnologias modernas de desenvolvimento mobile para garantir uma experiência de usuário fluida e uma base de código manutenível.

---

## ✨ Funcionalidades

- **Adicionar e Salvar Links:** Adicione novos links com título, URL e categoria.
- **Organização por Categorias:** Filtre e visualize seus links por categorias personalizadas.
- **Geração de QR Code:** Crie um QR Code para qualquer link salvo para compartilhamento rápido.
- **Arquivamento de Links:** Mova links para uma área de arquivados para manter sua lista principal organizada.
- **Exclusão Permanente:** Remova links da lista de arquivados de forma definitiva.
- **Armazenamento Local:** Todos os dados são salvos de forma segura no dispositivo do usuário.
- **Navegação Intuitiva:** Interface simples e direta, construída com Expo Router.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicativos móveis nativos.
- **[Expo](https://expo.dev/)**: Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
- **[Expo Router](https://expo.github.io/router/)**: Sistema de navegação baseado em arquivos para aplicativos Expo.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)**: Sistema de armazenamento local (key-value) para React Native.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para realizar requisições à API (usado para gerar QR Code).
- **[Zod](https://zod.dev/)**: Biblioteca para validação de esquemas e tipos.

---

## 🔧 Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

Antes de começar, você precisará ter o seguinte software instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)
- [EAS CLI](https://docs.expo.dev/eas/cli/) (CLI global do Expo):
  ```bash
  npm install -g eas-cli
  ```
- Um emulador Android (via Android Studio) ou iOS (via Xcode), ou um dispositivo físico com o aplicativo **Expo Go** instalado.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GustavoVezetiv/Link.git](https://github.com/GustavoVezetiv/Link.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd Link
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure a API (Passo Crucial):**
    O serviço de geração de QR Code depende de uma API externa. Você precisa configurar o endereço base da sua API.

    -   Abra o arquivo `src/services/api.ts`.
    -   Substitua o valor `"SEUIP:SUAPORTA"` pela URL da seu IP e porta:
    ```typescript
    // src/services/api.ts
    import axios from "axios";

    export const api = axios.create({
        baseURL: 'http://SEUIP:SUAPORTA', <-- Altere esta linha
    });
    ```
 <p>E depois de "npm run dev"</p>
5.  **Execute o projeto:**
    ```npx expo start
    ```

Após executar o comando acima, o **Metro Bundler** será iniciado e abrirá uma nova aba no seu navegador. A partir dela, você pode:
-   **Escanear o QR Code** com o aplicativo Expo Go no seu celular.
-   Pressionar a tecla `a` no terminal para iniciar o aplicativo no emulador Android.
-   Pressionar a tecla `i` no terminal para iniciar o aplicativo no simulador iOS.

---

## 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

```
Link/
├── src/
│   ├── app/                # Telas e rotas (Expo Router)
│   │   ├── (tabs)/         # Layout principal com abas
│   │   └── ...
│   ├── assets/             # Imagens, fontes e outros arquivos estáticos
│   ├── components/         # Componentes reutilizáveis (Botões, Links, etc.)
│   ├── services/           # Configuração de serviços externos (ex: api.ts)
│   ├── storage/            # Lógica de armazenamento local (AsyncStorage)
│   ├── styles/             # Estilos globais (cores, fontes)
│   └── utils/              # Funções utilitárias e constantes
│
├── .gitignore
├── app.json                # Configurações do projeto Expo
├── package.json            # Dependências e scripts do projeto
└── tsconfig.json           # Configurações do TypeScript
```

---

## 📄 Licença

Este projeto está distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📫 Contato

**Gustavo Vezeti**

-   GitHub: [@GustavoVezetiv](https://github.com/GustavoVezetiv)
-   Email: [gustavovezetiv8@gmail.com
](mailto:sgustavovezetiv8@gmail.com
)
