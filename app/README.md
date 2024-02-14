# Advanced, scalable React boilerplate

Everything you need to start a new project with React, TypeScript, Vite, and a lot of other goodies.
Quick overview of main focus points:
- State management
- Internationalization
- Theming
- Design System
- Routing
- Permissions
- Testing

todo:
- proper error handling
- add hygen templates for code generation
- add storybook
- add testing (unit, integration, e2e)
- add ci/cd, docker, k8s, helm (when backend is at same level as frontend)
- create comprehensive documentation in .mdx, it supports inline diagrams (usable by docusaurus if needed)

> It might be a good idea to look at the Features section before you start coding, just so you know what's available to you.


## Dependencies: What is used here (dependency injection is used in most cases)
Node version 18.19.0


These are found in production bundle.
- React (`react`, `react-dom`)
- Server state management (`@tanstack/query`)
- App state management (`zustand`)
- Routing (`react-router-dom`)
- Translations (`react-i18next`)
- HTTP client (`axios`)

Other dependencies that are used in development only (build, testing, linting, etc.)
- `vite` (build tool)
- `eslint` (linting)
- `prettier` (code formatting)
- `sass` (styling)
- `i18next-resources-for-ts` (translations interface generation)


## Features

### Easy server state management with @tanstack/query and gateways dependency injection
Most often this is the only thing you to fetch, render and update data from your api
- Use wrappers in `@core/query/utils/wrappers.ts` to benefit from dependency injection.
- Gateways are interfaces to easily mock server responses in tests or change part of the api.
- Actual gateway implementation rely on `@services/api/ApiService.ts` which hides axios usage and provides a simple interface.
Their interfaces are defined in @core/gateways and implemented in `@adapters/secondary/gateways/`.

### Easy app state management with zustand
In cases where you need to manage a local shared state anywhere in your app (even outside react).
- Easily create stores with `zustand` and use it anywhere.
- Stores are found in `@core/features/`

### App routing with react-router-dom v6
Routing is flexible thanks to react-router-dom v6. You can use nested routes and lazy load pages + prefetch queries concurrently.
- Routes are defined in @services/router and new routes can be added to `@services/router/routes/index.ts`
- The root of the Router incorporates the app layout, error boundary and language sync on first url part (e.g. localhost/en/...)
- If you want to secure a route, use attachGuardToRoute in `@services/router/utils/guards.ts`. It will handle resource access and redirection for you (prevent lazy loading & prefetch)


### Permissions, privileges and roles (WIP)
This is a custom solution to handle permissions, privileges and roles. No external dependency is used here.
- It's easy to use & flexible
- If needed you can easily replace the logic for the guards, everything is centralized :)
// todo: add more info about replacing the logic and basic usage

### Translations with react-i18next
Translations are handled by react-i18next under the hood.
- Every text in the app is rendered by Typography component from `@atoms/typography`.
- Translations are found in `@services/translation/locales/` and are organized by language.
- Translations are typesafe, but you'll need to update their definition with the command `npm run translations-interface` \
I would recommend using a file watcher to automate updates (only src/services/translation/locales/en/*.json needs to be watched).

### Theming (WIP)
Theming includes colors, typography, spacing, and more.
- These values accessed through css variables. full list available in `@styles/_themes.scss`.
- Theme can easily be added to `@styles/_themes.scss` & `@styles/themes/_{themeName}.scss` and then used in the app.
- Theme is automatically injected in the app layout and controlled by the user store
- Lots of helpers are available as mixins in `@styles/`. They will ensure that your app is consistent and easy to maintain.

### Design System (WIP)
Design system follows the atomic design principles.
- Atoms are found in `@atoms/`: they are the smallest building blocks of your app. Only dumb components should be found here.
- Molecules are found in `@molecules/`: they are composed of atoms and molecules . Same as atoms, they should be dumb, reusable components.
- Organisms are found in `@organisms/`: they are composed of atoms, molecules and organisms. They are the first components that can be smart: They can access the server and the app state.
- Templates are found in `@templates/`: They represent the structure of a page. They are composed of atoms, molecules, organisms and templates. They are smart components that can access the server and the app state.
- Pages are found in `@pages/`: They are composed of atoms, molecules, organisms a main template inheriting from `Page`

*Will have Storybook integration soon*
### Linting and formatting
Linting and formatting is handled by eslint and prettier respectively.
This should work out of the box, but you can always update the rules in `.eslintrc.cjs` and `.prettierrc` if you need to.

### Build tool
Vite is used as a build tool. It's fast and has a lot of features included. No more webpack config hell.
- Only using base configuration for now, but it's easy to add more plugins and features.
- A bunch of aliases where added. To add/update/remove them you need the following files (format should be self explanatory):
  - `tsconfig.json`
  - `vite.config.ts`
  - `jest.config.ts`
  - `.eslintrc.cjs`

### Testing (WIP)
*waiting for full app stack before looking into testing*

---

# DEFAULT README
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
