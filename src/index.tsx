import React from 'react';
import { getParameters } from 'codesandbox-import-utils/lib/api/define';

export type CodeSandboxProps = {
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
}

const codeSandbox: React.FC<CodeSandboxProps> = (props) => {
  const { files = {}, embed, json, query, ...other } = props || {};
  const parameters = getParameters({ files } as any);
  return (
    <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank" {...other}>
      <input type="hidden" name="parameters" value={parameters} />
      {embed && <input type="hidden" name="embed" value={1} />}
      {json && <input type="hidden" name="json" value={1} />}
      {query && <input type="hidden" name="query" value={query} />}
      <button type="submit">{props.children}</button>
    </form>
  )
}

export default codeSandbox;
