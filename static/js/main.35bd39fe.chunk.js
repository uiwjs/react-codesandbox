(this["webpackJsonp@uiw/react-codesandbox"]=this["webpackJsonp@uiw/react-codesandbox"]||[]).push([[0],{376:function(e,n,t){},377:function(e,n,t){"use strict";t.r(n);var o=t(2),s=t(58),i=t.n(s),a=t(65),c=t(63),r=t.p+"static/media/logo.3931a054.svg",d=t(66),p=t(6),l=t.n(p),m=t(15),u=t.n(m),b=t(64),h=t(0),g=["files","embed","json","query"];var f=function(e){var n=e||{},t=n.files,s=void 0===t?{}:t,i=n.embed,a=n.json,c=n.query,r=u()(n,g),p=Object(b.getParameters)({files:s}),m=Object(o.useState)(),f=Object(d.a)(m,2),x=f[0],j=f[1];return Object(o.useEffect)((function(){e.children||function(e){return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({files:e})}).then((function(e){return e.json()}))}(s).then((function(e){if(e&&e.sandbox_id){var n="https://codesandbox.io/"+(i?"embed":"s")+"/"+e.sandbox_id+"?"+(c||"");j(n)}}))}),[s]),e.children?Object(h.jsxs)("form",l()({action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},r,{children:[Object(h.jsx)("input",{type:"hidden",name:"parameters",value:p}),i&&Object(h.jsx)("input",{type:"hidden",name:"embed",value:1}),a&&Object(h.jsx)("input",{type:"hidden",name:"json",value:1}),c&&Object(h.jsx)("input",{type:"hidden",name:"query",value:c}),Object(h.jsx)("button",{type:"submit",children:e.children})]})):Object(h.jsx)("iframe",{src:x,style:{width:"100%",height:"100%",border:0,overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},x=function(){return Object(h.jsx)(f,{embed:!0,query:"view=split",files:{"package.json":{content:{dependencies:{react:"latest","react-dom":"latest"}}},"index.js":{content:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst element = (\n  <h1> Hello, CodeSandbox!  </h1>\n);\n\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);"},"index.html":{content:'<div id="root"></div>'}},children:"Basic Example Open in CodeSandbox"})},j=function(){return Object(h.jsx)(f,{embed:!0,query:"view=split",files:{"src/index.js":{content:'import React from "react";\nimport ReactDOM from "react-dom";\nimport "./index.css";\nimport App from "./App";\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById("root")\n);'},"sandbox.config.json":{content:'{\n  "template": "node",\n  "container": {\n    "startScript": "start",\n    "node": "14"\n  }\n}'},"src/App.js":{content:'import React from "react";\nimport logo from "./logo.svg";\nimport styles from "./App.module.less";\nimport "./App.css";\n\nconst App = () => (\n  <div className="App">\n    <header className="App-header">\n      <img src={logo} className="App-logo" alt="logo" />\n      <p className={styles.app}>\n        Edit <code>src/App.js</code> and save to reload.\n      </p>\n      <div>\n        <a\n          className="App-link"\n          href="https://reactjs.org"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          Learn React\n        </a>\n        &nbsp;&nbsp;\n        <a\n          className="App-link"\n          href="https://github.com/kktjs"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          Learn KKT\n        </a>\n      </div>\n    </header>\n  </div>\n);\n\nexport default App;'},"src/logo.svg":{content:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">\n<g fill="#61DAFB">\n  <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>\n  <circle cx="420.9" cy="296.5" r="45.7"/>\n  <path d="M520.5 78.1z"/>\n</g>\n</svg>'},"src/App.module.less":{content:".app code {\n  color: red;\n}"},"src/App.css":{content:".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}"},"src/index.css":{content:'body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}'},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nimport pkg from "./package.json";\n\nexport default (conf, env, options) => {\n  conf = lessModules(conf, env, options);\n\n  // Get the project version.\n  conf.plugins.push(\n    new webpack.DefinePlugin({\n      VERSION: JSON.stringify(pkg.version)\n    })\n  );\n  return conf;\n};'},"public/index.html":{content:'<div id="root"></div>'},"package.json":{content:{dependencies:{react:"latest","react-dom":"latest"},devDependencies:{"@kkt/less-modules":"6.0.11",kkt:"6.0.11",typescript:"4.1.3"},scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}},children:"KKT Project Example Open in CodeSandbox"})},v=function(){return Object(h.jsx)("div",{style:{height:400,width:800},children:Object(h.jsx)(f,{embed:!0,query:"view=split&runonclick=1",files:{"package.json":{content:{dependencies:{react:"latest","react-dom":"latest"}}},"index.js":{content:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst element = (\n  <h1> Hello, CodeSandbox! </h1>\n);\n\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);"},"index.html":{content:'<div id="root"></div>'}}})})},w=(t(376),function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(c.a,{fixed:!0,href:"https://github.com/uiwjs/react-codesandbox",target:"__blank"}),Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(h.jsx)("h2",{children:"React CodeSandbox"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{}),Object(h.jsx)(j,{}),Object(h.jsx)(v,{})]}),Object(h.jsx)("span",{className:"App-arrow"})]}),Object(h.jsx)(a.a,{style:{paddingTop:25,maxWidth:680,margin:"0 auto"},source:'React CodeSandbox\n===\n\n\x3c!--dividing--\x3e\n\n[![Build & Deploy](https://github.com/uiwjs/react-codesandbox/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codesandbox/actions)\n[![Issues](https://img.shields.io/github/issues/uiwjs/react-codesandbox.svg)](https://github.com/uiwjs/react-codesandbox/issues)\n[![Forks](https://img.shields.io/github/forks/uiwjs/react-codesandbox.svg)](https://github.com/uiwjs/react-codesandbox/network)\n[![Stars](https://img.shields.io/github/stars/uiwjs/react-codesandbox.svg)](https://github.com/uiwjs/react-codesandbox/stargazers)\n[![Release](https://img.shields.io/github/release/uiwjs/react-codesandbox)](https://github.com/uiwjs/react-codesandbox/releases)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-codesandbox.svg)](https://www.npmjs.com/package/@uiw/react-codesandbox)\n\nA React component is provided that allows you to programmatically generate [codesandbox](https://codesandbox.io/) projects from code samples on the fly.\n\n## Install\n\n```bash\nnpm install @uiw/react-codesandbox --save\n```\n\n## Usage\n\n```jsx\nimport React from \'react\';\nimport CodeSandbox from \'@uiw/react-codesandbox\';\n\nconst code = `import React from \'react\';\nimport ReactDOM from \'react-dom\';\n\nconst App = (\n  <h1>\n    Hello, {formatName(user)}!\n  </h1>\n);\n\nReactDOM.render(\n  <App />,\n  document.getElementById(\'root\')\n);`;\n\nfunction Demo() {\n  return (\n    <CodeSandbox\n      files={{\n        "package.json": {\n          content: {\n            dependencies: {\n              react: "latest",\n              "react-dom": "latest"\n            }\n          }\n        },\n        "index.js": {\n          content: code\n        },\n        "index.html": {\n          content: `<div id="root"></div>`\n        }\n      }}\n    >\n      Open in CodeSandbox\n    </CodeSandbox>\n  )\n}\n```\n\n## Props\n\n```typescript\ntype CodeSandboxProps = React.FormHTMLAttributes<HTMLFormElement> & {\n  /**\n   * Whether we should redirect to the embed instead of the editor.\n   */\n  embed?: boolean;\n  /**\n   * The query that will be used in the redirect url. `embed` must be equal to `true`, `embed=true`.\n   * [CodeSandbox Embed Options](https://codesandbox.io/docs/embedding#embed-options)\n   * @example `view=preview&runonclick=1`\n   */\n  query?: string;\n  /**\n   * Instead of redirecting we will send a JSON reponse with `{"sandbox_id": sandboxId}`.\n   */\n  json?: boolean;\n  /**\n   * Parameters used to define how the sandbox should be created.\n   */\n  files?: Record<string, {\n    content?: string | Record<string, any>;\n    isBinary?: boolean;\n  }>\n};\n```\n\n## Development\n\nRuns the project in development mode.  \n\n```bash\n# Step 1, run first, listen to the component compile and output the .js file\n# listen for compilation output type .d.ts file\nnpm run watch\n# Step 2, development mode, listen to compile preview website instance\nnpm run start\n```\n\n**production**\n\nBuilds the app for production to the build folder.\n\n```bash\nnpm run build\n```\n\nThe build is minified and the filenames include the hashes.\nYour app is ready to be deployed!\n\n### Related\n\n- [`@uiw/react-codepen`](https://github.com/uiwjs/react-codepen)\n- [`@uiw/react-stackblitz`](https://github.com/uiwjs/react-stackblitz)\n\n### License\n\nLicensed under the MIT License.\n'.replace(/([\s\S]*)<!--dividing-->/,"")})]})});i.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[377,1,2]]]);
//# sourceMappingURL=main.35bd39fe.chunk.js.map