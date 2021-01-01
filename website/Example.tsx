
import CodeSandbox from '../';

const code = `import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <h1> Hello, CodeSandbox! </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);`;

const Example = () => {
  return (
    <CodeSandbox
      embed
      query="view=split"
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
      Basic Example Open in CodeSandbox
    </CodeSandbox>
  )
}

export default Example;