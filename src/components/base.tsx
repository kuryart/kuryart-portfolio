import { liveReloadScript } from "beth-stack/dev";
import { type PropsWithChildren } from "beth-stack/jsx";
import { config } from "../config";

const safeScript =
  config.env.NODE_ENV === "development" ? liveReloadScript() : "";

// export const BaseHtml = ({ children }: PropsWithChildren) => (
//   <html data-theme="dim">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>THE BETH STACK</title>
//       <script src="https://unpkg.com/htmx.org@1.9.5"></script>
//       <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
//       <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>

//       <link rel="stylesheet" href="/public/dist/style.css" />

//       <script>{safeScript}</script>
//     </head>
//     <body hx-boost="true" class="box-sizing-border m-0 p-0">
//       {children}
//     </body>
//   </html>
// );

export const BaseHtml = ({ children }: PropsWithChildren) => {
  const htmlContent = (
    <html data-theme="dim">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>THE BETH STACK</title>
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>

        <link rel="stylesheet" href="/public/dist/style.css" />

        <script>${safeScript}</script>
      </head>
      <body hx-boost="true" class="box-sizing-border m-0 p-0">
        ${children}
      </body>
    </html>
  );

  return htmlContent;
};
