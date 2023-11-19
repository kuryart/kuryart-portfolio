/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import { Suspense } from "beth-stack/jsx";
import { Elysia } from "elysia";
// import { Application, Assets, Sprite } from "pixi.js";
import { BaseHtml } from "../components/base";
import { ctx } from "../context";

export const index = new Elysia().use(ctx).get("/", async ({ htmlStream }) => {
  return htmlStream(() => (
    <BaseHtml>
      {/* Main Container */}
      <div class="h-screen w-full px-8 pt-4">
        {/* Header */}
        <div id="header" class="flex h-max w-full flex-row justify-between">
          {/* Left */}
          <div class="magictime slideLeftReturn flex flex-row items-center">
            <img
              class="h-16 w-16"
              src="public/dist/images/kurya.png"
              alt="kurya"
            />
            <h1 class="text-4xl font-bold">
              Paulo Cury
              <span class="ml-6 text-2xl text-gray-600">
                Software Developer
              </span>
            </h1>
          </div>
          {/* Right */}
          <div class="flex flex-row">
            <a href="https://www.linkedin.com/in/paulo-cezar-cury-seara/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
                class="magictime slideRightReturn mr-4"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                />
              </svg>
            </a>

            <a href="https://github.com/kuryart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
                class="magictime slideRightReturn mr-4"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Content */}

        <div class="grid grid-cols-2">
          <div class="hero h-64">
            <div class="hero-content flex-col lg:flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="none"
                viewBox="0 0 200 200"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.dev/svgjs"
                class="magictime vanishIn"
              >
                <path
                  fill="white"
                  d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
                ></path>
              </svg>

              <div>
                <h1 class="text-5xl font-bold">Sobre mim</h1>
                <p class="py-6">
                  Sou um desenvolvedor fullstack com 11 anos de experiência em
                  programação e 5 anos trabalhando na área.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div class="h-8 w-full"></div> */}
      </div>
    </BaseHtml>
  ));
});
