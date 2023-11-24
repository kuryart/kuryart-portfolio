import { liveReloadScript } from "beth-stack/dev";
import { type PropsWithChildren } from "beth-stack/jsx";
import { config } from "../config";
import { Doctype } from "./doctype";

const safeScript =
  config.env.NODE_ENV === "development" ? liveReloadScript() : "";

export const BaseHtml = ({ children }: PropsWithChildren) => (
  // @ts-expect-error (can't inject Doctype as JSX element)
  <Doctype>
    <html data-theme="dim" lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Put your description here." />
        <title>Paulo Cury | Portfólio</title>
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>

        <link rel="stylesheet" href="/public/dist/style.css" />

        <script>{safeScript}</script>
      </head>
      <body hx-boost="true" class="box-sizing-border m-0 p-0">
        {children}
      </body>
    </html>
  </Doctype>
);