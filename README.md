# e-zfi

To run the web app, clone this git repo to your local:

```bash
# Clone
$ git clone https://github.com/voiduserid/e-zfi
# Install dependencies
$ npm install
# Start development server
$ npm run dev
You should see: `Local: http://localhost:5173`
```


// eslint.config.js
#### Design goal:

Initial Design meeting & goal:

Level0: -> Aim for MVP, Build bare-bone frontend UI! 
tech stack:  TS+React+Framer Motion+Vanilla CSS/ExpressJS+PostgreSQL||MongoDB

#### Build repo structure
```bash
$ mkdir -p src/types src/utils src/services src/hooks src/data src/components src/pages src/context
```

Create these folders inside `src/` (the structure we'll fill in):
```bash
src/
├── types/
├── utils/
├── services/
├── hooks/
├── data/
├── components/
├── pages/
├── context/
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

#### Possible Full-stack

## 🎯 **Recommended Full Stack**

```
FRONTEND:
├── Vite              (Build tool)
├── React             (UI Framework)
├── TypeScript        (Type safety)
├── Framer Motion     (Animations)
└── Vanilla CSS       (Styling)

BACKEND:
├── Node.js           (Runtime)
├── Express.js        (API Framework)
├── PostgreSQL        (Database)
├── Prisma/TypeORM    (ORM) ← I recommend this
└── JWT/Passport      (Authentication)

TOOLS:
├── Axios/Fetch       (API calls)
├── ESLint            (Code quality)
└── Git/GitHub        (Version control)
```

#### Foreseeable full-stack structure

```bash
src/
├── components/
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   └── index.ts
│   └── Wallet/
│       ├── Wallet.tsx
│       ├── Wallet.css
│       └── index.ts
│
├── services/              ← ⭐ CRITICAL FOR BACKEND
│   ├── api.ts            (API client setup)
│   ├── cardService.ts    (Card endpoints)
│   ├── authService.ts    (Auth endpoints)
│   └── userService.ts    (User endpoints)
│
├── hooks/                 ← ⭐ CUSTOM HOOKS
│   ├── useCards.ts       (Fetch cards)
│   ├── useAuth.ts        (Authentication)
│   └── useFetch.ts       (Generic fetch hook)
│
├── types/
│   ├── card.types.ts
│   ├── user.types.ts
│   ├── api.types.ts      (API response types)
│   └── index.ts
│
├── utils/
│   ├── constants.ts      (API URLs, config)
│   ├── helpers.ts        (Utility functions)
│   └── errors.ts         (Error handling)
│
├── context/              ← ⭐ STATE MANAGEMENT
│   ├── AuthContext.tsx
│   ├── WalletContext.tsx
│   └── index.ts
│
├── pages/                ← ⭐ PAGE COMPONENTS
│   ├── Dashboard.tsx
│   ├── AddCard.tsx
│   ├── Login.tsx
│   └── index.ts
│
├── App.tsx
├── main.tsx
├── vite-env.d.ts
└── index.css
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```