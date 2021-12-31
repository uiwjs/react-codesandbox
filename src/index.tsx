import React, { useEffect, useState } from 'react';
import { getParameters } from 'codesandbox-import-utils/lib/api/define';

export type CodeSandboxBase = {
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

export type CodeSandboxProps<T> = React.FormHTMLAttributes<T> & CodeSandboxBase;

function request<T>(files: CodeSandboxProps<T>['files']) {
  return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      files: files,
    })
  }).then(x => x.json());
}

const CodeSandbox: React.FC<CodeSandboxProps<HTMLFormElement | HTMLIFrameElement>> = (props) => {
  const { files = {}, embed, json, query, ...other } = props || {};
  const parameters = getParameters({ files } as any);
  const [url, setUrl] = useState<string>();
  useEffect(() => {
    if (!props.children) {
      request(files).then(data => {
        if (data && data.sandbox_id) {
          const cusUrl = `https://codesandbox.io/${embed ? 'embed': 's'}/${data.sandbox_id}?${query ? query : ''}`;
          setUrl(cusUrl);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);
  if (!props.children) {
    return (
      <iframe
        {...other}
        title={other.title || 'Example.'}
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          overflow: 'hidden',
          ...other.style,
        }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    )
  }
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

export default CodeSandbox;
