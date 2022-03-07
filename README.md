React CodeSandbox
===

<!--dividing-->

[![Build & Deploy](https://github.com/uiwjs/react-codesandbox/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codesandbox/actions)
[![Issues](https://img.shields.io/github/issues/uiwjs/react-codesandbox.svg)](https://github.com/uiwjs/react-codesandbox/issues)
[![Forks](https://img.shields.io/github/forks/uiwjs/react-codesandbox.svg)](https://github.com/uiwjs/react-codesandbox/network)
[![Stars](https://img.shields.io/github/stars/uiwjs/react-codesandbox.svg)](https://github.com/uiwjs/react-codesandbox/stargazers)
[![Release](https://img.shields.io/github/release/uiwjs/react-codesandbox)](https://github.com/uiwjs/react-codesandbox/releases)
[![npm version](https://img.shields.io/npm/v/@uiw/react-codesandbox.svg)](https://www.npmjs.com/package/@uiw/react-codesandbox)

A React component is provided that allows you to programmatically generate [codesandbox](https://codesandbox.io/) projects from code samples on the fly.

## Install

```bash
npm install @uiw/react-codesandbox --save
```

## Usage

```jsx
import React from 'react';
import CodeSandbox from '@uiw/react-codesandbox';

const code = `import React from 'react';
import ReactDOM from 'react-dom';

const App = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;

function Demo() {
  return (
    <CodeSandbox
      files={{
        "package.json": {
          content: {
            dependencies: {
              react: "latest",
              "react-dom": "latest"
            }
          }
        },
        "index.js": {
          content: code
        },
        "index.html": {
          content: `<div id="root"></div>`
        }
      }}
    >
      Open in CodeSandbox
    </CodeSandbox>
  )
}
```

## Props

```typescript
type CodeSandboxProps = React.FormHTMLAttributes<HTMLFormElement> & {
  /**
   * Whether we should redirect to the embed instead of the editor.
   */
  embed?: boolean;
  /**
   * The query that will be used in the redirect url. `embed` must be equal to `true`, `embed=true`.
   * [CodeSandbox Embed Options](https://codesandbox.io/docs/embedding#embed-options)
   * @example `view=preview&runonclick=1`
   */
  query?: string;
  /**
   * Instead of redirecting we will send a JSON reponse with `{"sandbox_id": sandboxId}`.
   */
  json?: boolean;
  /**
   * Parameters used to define how the sandbox should be created.
   */
  files?: Record<string, {
    content?: string | Record<string, any>;
    isBinary?: boolean;
  }>
};
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Related

- [`@uiw/react-codepen`](https://github.com/uiwjs/react-codepen)
- [`@uiw/react-stackblitz`](https://github.com/uiwjs/react-stackblitz)

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codepen/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codepen/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
