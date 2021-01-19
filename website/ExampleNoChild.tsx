
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
    <div style={{ height: 400, width: 800 }}>
      <CodeSandbox
        embed
        query="view=split&runonclick=1"
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
      />
    </div>
  )
}

export default Example;