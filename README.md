# AI Agents Automations Demo App

A minimal Node + TypeScript web app intended to generate pull requests for AI code review workflows. The code includes intentional mistakes that compile and run, so your CI stays green while AI reviewers can surface issues.

## Tech Stack
- Node.js + Express
- TypeScript
- Jest for tests
- ESLint for linting

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run in dev mode:

```bash
npm run dev
```

3. Run tests and lint:

```bash
npm test
npm run lint
npm run typecheck
```

4. Build and start:

```bash
npm run build
npm start
```

App listens on `http://localhost:3000` by default.

## Endpoints
- `GET /health` → `{ status: 'ok' }`
- `GET /sum?a=1&b=2` → `{ result: number }`
- `GET /average?values=1,2,3` → `{ average: number }`
- `GET /palindrome/:text` → `{ text, isPalindrome }`
- `GET /items?page=1&pageSize=10` → `{ items, page, pageSize }`

## Intentional Issues (for reviewers to find)
- **Off-by-one in `addNumbers(a,b)`**: adds an extra 1 when both inputs are positive (`src/utils/calculator.ts`).
- **`average` precision loss**: truncates decimals using `parseInt`, losing fractional parts.
- **Route type misuse**: `/sum` passes query params as `any` cast to `number` without proper coercion.
- **Paging bug**: `getItems` calculates `startIndex` as `page * pageSize`, skipping the first page (`src/services/dataStore.ts`).
- **Memory leak**: `getItems` appends to a global array on every call.
- **Potential double-send pattern**: unreachable branch in `/health` hints at double response risk.
- **Lenient error handling**: server startup logs errors without failing fast.

These are deliberate to exercise AI review tooling. Feel free to open PRs that modify files under `src/` and see what your automation reports.

## CI
A basic CI workflow runs type-checking, linting, tests, and build on PRs. 