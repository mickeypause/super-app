# super-app

Expo Router app with a **`src/modules`** layout (thin routes under **`src/app`**) and shared primitives under **`src/ui`**. See **`AGENTS.md`** for conventions.

## Requirements

- [Bun](https://bun.sh) (this repo uses **`bun`** / **`bunx`**, not npm/npx)

## Setup

```bash
bun install
```

## Scripts

```bash
bun run start          # bunx expo start
bun run ios            # bunx expo start --ios
bun run android        # bunx expo start --android
bun run web            # bunx expo start --web
bun run lint           # bunx oxlint .
bun run format         # bunx oxfmt --write .
bun run format:check   # bunx oxfmt --check .
```

One-off Expo CLI (e.g. from docs): prefer **`bunx expo …`** instead of `npx expo …`.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
