# Agent notes — super-app

Conventions for navigating and extending this Expo Router (React Native) codebase.

## Layout

- **`src/app/`** — **Routes only** (layouts + thin re-exports). No feature implementation here. Expo Router scans this tree; non-route files here are easy to mis-pick up as routes.
- **`src/modules/<slug>/`** — **Feature code** for that area: `screens/`, `components/`, `hooks/`, `utils/`. **Not** route entries.
- **`src/`** shared — **`src/ui/`** (small primitives: `Text`, `Button`, `TextInput`), **`src/constants/`**, **`src/utils/`**, etc. **Not** full screens.

## 1:1 mapping — `app` groups ↔ `modules`

- **`src/app/(<slug>)/`** pairs with **`src/modules/<slug>/`** using the **same** `<slug>` (e.g. `(auth)` → `modules/auth/`). Parentheses only exist under `app/`.
- **Route file** and **screen** share the same **stem**: `login.tsx` ↔ `LoginScreen`, `register.tsx` ↔ `RegisterScreen`.
- Route files stay **lowercase** (`login.tsx`, `index.tsx`). Screen files in modules use **PascalCase**.

## PascalCase screens

- Screens live under **`src/modules/<slug>/screens/`** with **PascalCase** + **`Screen` suffix**: `LoginScreen.tsx`, `RegisterScreen.tsx`, `HomeScreen.tsx`.
- Route file is a one-line re-export, e.g.  
  `export { default } from "@/modules/auth/screens/LoginScreen";`

### Root `/`

- **`src/app/index.tsx`** pairs with **`src/modules/root/`** (e.g. **`screens/HomeScreen.tsx`** for the home UI).

### Dynamic routes

- Keep the route file name Expo expects (e.g. **`[id].tsx`**). The screen file can be **`DetailScreen.tsx`** (or similar) in the matching module.

## Shared folders (`src/`)

| Area             | Role                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| `src/ui/`        | Small reusable primitives (text, inputs, buttons). Not full screens. |
| `src/constants/` | App-wide constants and stable route paths                            |
| `src/utils/`     | Pure helpers shared across modules                                   |

Promote code from a module into `src/` **only** when a second module needs it.

## Imports

Path alias: `@/*` → `./src/*` (see `tsconfig.json`). Prefer `@/modules/...`, `@/ui/...`, `@/constants/...`.

## Tooling

- Lint: `npm run lint` (oxlint)
- Format: `npm run format` / `npm run format:check` (oxfmt)
- Pre-commit: Lefthook runs oxfmt and oxlint on staged files (`lefthook.yml`)
