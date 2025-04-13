<h1 align="center">ByteBank</h1>

### ✨ Sobre

<h4>Frontend do Tech Challenge da Pós Tech FIAP</h4>

<b>Versão:</b> 2.0.0 [(ver atualizações)](#atualizações)

### 📌 Stack de Desenvolvimento

- [nextJs](https://nextjs.org/);
- [@ant-design/icons](https://ant.design/components/icon) para biblioteca padrão de ícones;
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/) para alertas;
- [swr](https://swr.vercel.app/pt-BR) e [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) para requisições;
- [date-fns](https://date-fns.org/) para lidar com datas;
- [money-flow](https://github.com/beatrizsantiago/money-flow): Design System utilizado;
- [tailwind](https://tailwindcss.com/) para estilização de componentes;

### 🛠️ Ferramentas
- IDE: [VSCode](https://code.visualstudio.com/)

### 🎲 API
- [bytebank-api](https://github.com/beatrizsantiago/bytebank-api)

### ▶ Projeto melhorado (Fase 1)
- [bytebank-1.0.0](https://github.com/beatrizsantiago/bytebank-1.0.0)

### 🎯 Getting Started

Verificar Instalação do Node.js

- Abra um terminal e execute o comando:
    
  ```bash
  node -v
  ```
    
- Se aparecer uma versão como a listada abaixo significa que o Node.js está instalado corretamente. Caso contrário, baixe e instale-o a partir do [site oficial](https://nodejs.dev/en/learn/) ou procure "Node.js" no Google.
    
  ```bash
  v20.18.0
  ```

Instalar as dependências

```bash
npm install
```

Iniciar projeto no modo dev:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador.

### Atualizações

## 📁 Estrutura de Pastas e Organização do Código

A estrutura de pastas alterada para seguir os princípios da **Clean Architecture**, promovendo maior separação de responsabilidades, reutilização de código e escalabilidade.

| **Antes** | **Depois** |
|-----------|------------|
| `app/`<br>├── dashboard/page.tsx<br>├── perfil/page.tsx<br>├── layout.tsx<br>├── not-found.tsx<br>└── page.tsx | `src/app/`<br>├── dashboard/ *(inclui componentes e gerenciamento de estado)*<br>├── perfil/ *(inclui componentes e gerenciamento de estado)*<br>├── layout.tsx<br>├── not-found.tsx<br>└── page.tsx |
| `components/`<br>├── Landing<br>├── dashboard/ *(componentes específicos da dashboard)*<br>├── perfil/ *(componentes específicos do perfil)*<br>├── Header.tsx<br>├── InlineMenu.tsx<br>├── Modal.tsx<br>├── NavigationMenu.tsx<br>└── Sidebar.tsx | `src/components/`<br>├── Landing<br>├── Header.tsx<br>├── InlineMenu.tsx<br>├── Modal.tsx<br>├── NavigationMenu.tsx<br>└── Sidebar.tsx<br><sub>*Apenas componentes realmente reutilizáveis*</sub> |
| `public/` | `public/` *(sem alterações)* |
| `services/`<br>├── api.ts<br>├── authentication.ts<br>├── dashboard.ts<br>├── localStorage.ts<br>├── transaction.ts<br>└── user.ts | `src/infrastructure/`<br>├── api/<br>│ ├── api.ts<br>│ ├── authApi.ts<br>│ ├── dashboardApi.ts<br>│ ├── transactionApi.ts<br>│ └── userApi.ts<br>└── services/<br>  └── localStorage.ts |
| `styles/` | `src/styles/` |
| `utils/`<br>└── formats.ts *(formatos diversos juntos)* | `src/utils/`<br>├── currencyFormats.ts *(valores monetários)*<br>├── formatDate.ts *(datas)*<br>└── transactionOptions.ts *(lista centralizada de opções de transações)* |
| *(não existia)* | `src/domain/`<br>├── entities/<br>│ ├── Transaction.ts<br>│ └── User.ts<br>├── repositories/<br>│ ├── AuthRepository.ts<br>│ ├── DashboardRepository.ts<br>│ ├── TransactionRepository.ts<br>│ └── UserRepository.ts |
| *(não existia)* | `src/usecases/`<br>├── auth/<br>│ ├── login.ts<br>│ └── register.ts<br>├── dashboard/<br>│ └── getDashboardData.ts<br>├── transaction/<br>│ ├── addTransaction.ts<br>│ ├── listTransactions.ts<br>│ ├── removeTransaction.ts<br>│ └── updateTransaction.ts<br>└── user/<br>  └── updateProfile.ts |
| *(não existia)* | `src/types/`<br>├── auth.ts<br>├── global.ts<br>├── transaction.ts<br>└── user.ts<br><sub>*Para reutilização de types, evitando duplicações*</sub> |

## ⚙️ Gerenciamento de Estado

Na página **dashboard**, está implementado o gerenciamento de estado global utilizando **Context API** junto com **useReducer()**. Isso faz com que centralize a lógica de estado da página dashboard e permite o código ficar mais escalável e de fácil integração com outras ferramentas de gerenciamento de estado, caso necessário (como o Redux).

## 🚀 Performance

- **Compressão de imagens**: todas as imagens utilizadas foram comprimidas, reduzindo o peso total da página.
- **Carregamento inteligente (Lazy Loading) de imagens**: o componente `<Image />` do Next.js aplica lazy loading por padrão, carregando as imagens apenas quando entram na viewport.  
  🔗 [Saiba mais](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- **Carregamento Dinâmico de Componentes**: uso do `next/dynamic` para realizar o lazy loading de componentes, carregando-os apenas quando necessário. Isso reduz o tamanho inicial do bundle enviado ao cliente e melhora a performance geral.  
  🔗 [Saiba mais](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading)
- **Cache**: No arquivo `next.config.js`, há configurações de cabeçalhos HTTP personalizados usando a função `headers()` para os arquivos que estão na pasta `/public` ou que são gerados estaticamente pelo Next.js.
- **Otimização de Requisições com SWR**: uso da biblioteca SWR (Stale While Revalidate) para otimizar o consumo de dados na aplicação Next.js, aproveitando o cache inteligente e garantindo carregamentos rápidos e atualizações em segundo plano.