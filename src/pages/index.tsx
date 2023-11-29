/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
// import { Suspense } from "beth-stack/jsx";
import { Elysia } from "elysia";
import { BaseHtml } from "../components/base";
import { IconButton } from "../components/buttons/icon-button";
import { ThemeController } from "../components/buttons/theme-controller";
import { ctx } from "../context";

// import { importIcons } from "../utils/import-icons";
// importIcons();

export const index = new Elysia()
  .use(ctx)
  .get("/", async ({ htmlStream, set }) => {
    return htmlStream(() => (
      <BaseHtml>
        {/* Main Container */}
        <div class="h-screen w-full px-2 pt-2 sm:px-8 sm:pt-4">
          {/* Header */}
          <div id="header" class="flex h-max w-full flex-row justify-between">
            {/* Left */}
            <div class="magictime slideLeftReturn flex flex-row flex-wrap items-center">
              <img
                class="h-8 h-8 sm:h-16 sm:w-16"
                src="images/kurya.png"
                alt="kurya"
              />
              <h1 class="text-xl sm:text-4xl font-bold">Paulo Cury</h1>
              <h2 class="ml-1 sm:ml-6 text-sm sm:text-2xl text-warning">Software Developer</h2>
            </div>
            {/* Right */}
            <div class="magictime slideUpReturn my-auto flex flex-row ">
              <IconButton
                href="https://www.linkedin.com/in/paulo-cezar-cury-seara/"
                fontSize="text-3xl sm:text-5xl"
                iconSet="mdi"
                icon="linkedin"
                color="currentColor"
                hoverColor="warning"
              />
              <IconButton
                href="https://github.com/kuryart"
                fontSize="text-3xl sm:text-5xl"
                iconSet="mdi"
                icon="github"
                color="currentColor"
                hoverColor="warning"
                className="ml-2 mr-4 sm:mr-8"
              />

              <ThemeController
                theme="cupcake"
                lightIconSet="ph"
                lightIcon="sun-bold"
                darkIconSet="ph"
                darkIcon="moon-bold"
                fontSize="text-xl sm:text-2xl"
                color="currentColor"
                hoverColor="warning"
              />
            </div>
          </div>

          {/* Content */}
          {/* Grid */}
          <div class="magictime slideDownReturn ml-4 sm:ml-8 mt-12 grid grid-flow-row auto-rows-[minmax(min-content,_max-content)] grid-cols-1 gap-8 lg:grid-cols-[repeat(2,_1fr)]">
            {/* Col1 */}
            {/* Sobre Mim */}
            <div class="flex flex-col gap-4 pr-4 sm:pr-12 lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-1">
              <h1 class="text-3xl sm:text-5xl font-bold">Sobre mim</h1>
              <p class="py-2 indent-8 text-sm sm:py-6 sm:text-sm text-justify">
                Sou um desenvolvedor fullstack com 11 anos de experiência em
                programação e 5 anos de carreira. Durante esses anos, tive a
                oportunidade de desenvolver projetos para Web, Desktop e Games,
                como landing pages, e-commerces, e sistemas ERP, utilizando
                diversas tecnologias como: Laravel, Node.js, Vue.js, MySQL,
                PostgreSQL, SQLServer, Docker, Git, Windows Forms, entre outros.
              </p>
              <p class="px-[12%] text-center text-sm italic">
                "Qualquer tolo pode escrever código que um computador pode
                entender. Bons programadores escrevem código que os humanos
                podem entender."
              </p>
              <p class="text-right text-sm font-bold"> - Martin Fowler</p>
            </div>

            {/* Col2 */}
            {/* Trajetória */}
            <div class="flex flex-col gap-4 lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-4">
              <h1 class="text-3xl sm:text-5xl font-bold">Minha trajetória</h1>

              {/* Timeline */}
              <ul class="timeline timeline-vertical mt-4 ml-4 sm:mt-6 sm:pl-8 sm:pr-12 xl:pr-24">
                <li>
                  <div class="timeline-start mr-4 font-bold">1999</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    Aos 8 anos começo a ter contato com computação através de
                    cursos e com programação através do RPG Maker, do HTML e de
                    macros e fórmulas do Excel.
                  </div>
                  <hr class="bg-warning" />
                </li>
                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2006</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    Concluo um pequeno jogo em RPG Maker, já compreendendo
                    conceitos fundamentais como variáveis, condicionais,
                    repetição e loops. Inicio meus estudos em Linux.
                  </div>
                  <hr class="bg-warning" />
                </li>
                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2011</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    Utilizando uma planilha de Excel, desenvolvi um "aplicativo"
                    de Poker. O objetivo era resolver um problema: queria jogar
                    Poker com meus primos e não tínhamos fichas. O processo de
                    desenvolvimento durou uma madrugada.
                  </div>
                  <hr class="bg-warning" />
                </li>
                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2012</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    Já apaixonado pelo código, começo meus estudos em Ruby
                    através da Code Academy.
                  </div>
                  <hr class="bg-warning" />
                </li>
                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2014</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    Inicio meus estudos em C# e Unity, tendo desenvolvido alguns
                    jogos simples.
                  </div>
                  <hr class="bg-warning" />
                </li>
                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2018</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    <ul class="mt-4">
                      <li class="mb-2">
                        <ul class="flex justify-between">
                          <li class="text-lg font-bold leading-6	">Dataplace</li>
                          <li class="text-xs italic leading-6	">Garça, SP</li>
                        </ul>
                      </li>

                      <li class="mb-4 text-xs italic	leading-6">
                        Desenvolvedor Desktop
                      </li>

                      <li>
                        <ul>
                          <li class="mb-1">
                            ● Desenvolver e prestar manutenção a módulos
                            personalizados em .NET (C# e VB);
                          </li>
                          <li class="mb-1">
                            ● Desenvolver e prestar manutenção a scripts
                            VBScript e relatórios personalizados;
                          </li>
                          <li class="mb-1">
                            ● Estabelecer contato com o cliente para elaboração
                            de escopo de projeto e homologação;
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr class="bg-warning" />
                </li>

                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2019</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    <ul class="mt-4">
                      <li class="mb-2">
                        <ul class="flex justify-between">
                          <li class="text-lg font-bold leading-6	">Autônomo</li>
                          <li class="text-xs italic leading-6	">Garça, SP</li>
                        </ul>
                      </li>

                      <li class="mb-4 text-xs italic	leading-6">
                        Desenvolvedor Web
                      </li>

                      <li>
                        <ul>
                          <li class="mb-1">
                            ● Desenvolver e prestar manutenção a sites e
                            softwares web em Laravel e WordPress;
                          </li>
                          <li class="mb-1">
                            ● Gerenciar servidores em plataformas diversas
                            (LAMP, PHPMyAdmin, Hostgator, etc.);
                          </li>
                          <li class="mb-1">
                            ● Estabelecer contato com o cliente para elaboração
                            de escopo de projeto e homologação;
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr class="bg-warning" />
                </li>

                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2021</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    <ul class="mt-4">
                      <li class="mb-2">
                        <ul class="flex justify-between">
                          <li class="text-lg font-bold leading-6">
                            BM Soluções Tecnológicas
                          </li>
                          <li class="text-xs italic leading-6	">Marília, SP</li>
                        </ul>
                      </li>

                      <li class="mb-4 text-xs italic	leading-6">
                        Desenvolvedor Web
                      </li>

                      <li>
                        <ul>
                          <li class="mb-1">
                            ● Desenvolver novas features e prestar manutenção a
                            aplicação ERP desenvolvida em PHP, JS, HTML e CSS;
                          </li>
                          <li class="mb-1">
                            ● Desenvolver novas features e prestar manutenção a
                            aplicação monolítica ERP desenvolvida em Laravel;
                          </li>
                          <li class="mb-1">
                            ● Treinar equipe de estagiários e juniores.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr class="bg-warning" />
                </li>

                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2022</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    <ul class="mt-4">
                      <li class="mb-2">
                        <ul class="flex justify-between">
                          <li class="text-lg font-bold leading-6	">XP Inc.</li>
                          <li class="text-xs italic leading-6	">Remoto</li>
                        </ul>
                      </li>

                      <li class="mb-4 text-xs italic	leading-6">
                        Desenvolvedor Web
                      </li>

                      <li>
                        <ul>
                          <li class="mb-1">
                            ● Desenvolver novas features e prestar manutenção a
                            aplicação monolítica de eventos online desenvolvida
                            em Laravel;
                          </li>
                          <li class="mb-1">
                            ● Responsável por desenvolver novas features e
                            prestar manutenção a aplicação de coleta e
                            tratamento de dados sobre o mercado financeiro
                            desenvolvida em Node.js (Azure Functions).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr class="bg-warning" />
                </li>

                <li>
                  <hr class="bg-warning" />
                  <div class="timeline-start mr-4 font-bold">2022</div>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box ml-4 p-4 hover:bg-base-200">
                    <ul class="mt-4">
                      <li class="mb-2">
                        <ul class="flex justify-between">
                          <li class="text-lg font-bold leading-6	">ACIM</li>
                          <li class="text-xs italic leading-6	">Marília, SP</li>
                        </ul>
                      </li>

                      <li class="mb-4 text-xs italic	leading-6">Tech Lead</li>

                      <li>
                        <ul>
                          <li class="mb-1">
                            ● Planejar, desenvolver, testar e implementar
                            aplicação ERP desenvolvida em Laravel (backend) e
                            Vue.js (frontend);
                          </li>
                          <li class="mb-1">
                            ● Treinar equipe de estagiários e juniores.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* aaaa */}
              </ul>
            </div>

            {/* Col3 */}
            {/* Stacks */}
            <div class="flex flex-col gap-4 lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-2">
              <h1 class="mb-4 sm:mb-8 text-3xl sm:text-5xl font-bold">Stacks</h1>

              <div class="mt-4 sm:mt-6 grid grid-cols-3 sm:grid-cols-4 justify-items-center gap-y-10 pb-12 pr-4 sm:pr-8 xl:grid-cols-5">
                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--javascript mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Javascript</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--typescript mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Typescript</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--php-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">PHP</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--teenyicons icon--teenyicons--c-sharp-solid mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">C#</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--logos icon--logos--ruby mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Ruby</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--html mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">HTML</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--css mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">CSS</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--laravel-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Laravel</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--nodejs-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Node</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--react-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">React</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--vuejs-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Vue</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--logos icon--logos--bun mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Bun</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="custom-icons custom-icons-elysia mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Elysia</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="custom-icons custom-icons-htmx mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">HTMX</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--mysql-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">MySQL</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--simple-icons icon--simple-icons--turso mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Turso</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--docker mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Docker</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--devicon icon--devicon--git mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Git</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--linux-light mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Linux</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--fa icon--fa--windows mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Windows</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--logos icon--logos--unity mx-auto rounded-lg bg-zinc-50 text-5xl" />
                  <span class="text-center text-sm font-bold">Unity</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--skill-icons icon--skill-icons--godot-dark mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Godot</span>
                </div>

                <div class="flex flex-col gap-2">
                  <span class="icon--file-icons icon--file-icons--test-generic mx-auto text-5xl" />
                  <span class="text-center text-sm font-bold">Testing</span>
                </div>
              </div>
            </div>

            {/* Col4 */}
            {/* Projetos */}
            <div class="flex flex-col gap-4 lg:col-start-1 lg:col-end-1 lg:row-start-3 lg:row-end-3">
              <h1 class="mb-8 text-3xl sm:text-5xl font-bold">Projetos</h1>
              <ul class="pr-12">
                <li class="mb-8 flex flex-col gap-2">
                  <a
                    class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                    href="https://github.com/kuryart/portfolio"
                  >
                    Portfolio
                  </a>
                  <span>
                    Repositório utilizado para o desenvolvimento desse site.
                    Feito com Bun, Typescript, HTMX e Tailwind, utilizando
                    síntaxe JSX do React, com base na{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/portfolio"
                    >
                      BETH Stack
                    </a>{" "}
                    de{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/portfolio"
                    >
                      Ethan Niser
                    </a>
                    {"."}
                  </span>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <a
                      class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/rust-nails-ryst"
                    >
                      RYST on Nails
                    </a>

                    <div class="badge badge-warning gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Work in Progress...
                    </div>
                  </div>
                  <div>
                    Um template para o desenvolvimento, teste e deploy de
                    sistemas em Rust, Yew, Tauri e SurrealDB, com base na stack
                    proposta{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://www.youtube.com/watch?v=luOgEhLE2sg&t=4s"
                    >
                      neste vídeo
                    </a>{" "}
                    do canal{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://www.youtube.com/@letsgetrusty"
                    >
                      Let's Get Rusty
                    </a>
                    {", e na stack proposta no site do "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://rust-on-nails.com/"
                    >
                      Rust on Nails
                    </a>
                    {"."}
                  </div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <a
                      class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/godot-inventory-system"
                    >
                      Godot Inventory System
                    </a>

                    <div class="badge badge-warning gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Work in Progress...
                    </div>
                  </div>
                  <div>
                    Um sistema de inventário para games feito em GDScript do
                    Godot, inspirado no sistema de inventário utilizado em
                    Dungeon Crawlers.
                  </div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-row justify-between">
                    <a
                      class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/music-tools"
                    >
                      Music Tools
                    </a>
                  </div>
                  <div>
                    Algumas ferramentas para auxiliar no processo de composição
                    musical utilizando técnicas de politonalismo, utilizadas por
                    Stravinsky.
                  </div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <a
                    class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                    href="https://github.com/kuryart/usp-scrapper"
                  >
                    USP Scrapper
                  </a>
                  <span>
                    Um web scrapper simples desenvolvido em Python para obter um
                    resumo dos cursos de graduação da{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://www5.usp.br/"
                    >
                      USP - Universidade de São Paulo
                    </a>
                    {
                      " (grade curricular, bibliografia, etc.). Utilizado para estudos autodidatas sobre Engenharia da Computação e Ciência da Computação."
                    }
                  </span>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-row justify-between">
                    <a
                      class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/cardapio-digital"
                    >
                      Cardápio Digital
                    </a>
                  </div>
                  <div>
                    Sistema de Cardápio Digital web com leitor de QR Code para
                    restaurantes, desenvolvido em Laravel e MySQL.
                  </div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-row justify-between">
                    <a
                      class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/flaviohmonteiro"
                    >
                      Portfolio de Candidato a Vereador 1
                    </a>
                  </div>
                  <div>Site de campanha política para vereador.</div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-row justify-between">
                    <a
                      class="text-xl sm:text-2xl font-bold text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://github.com/kuryart/JaInox"
                    >
                      Portfólio de Candidato a Vereador 2
                    </a>
                  </div>
                  <div>Site de campanha política para vereador.</div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <h2 class="text-xl sm:text-2xl font-bold">
                      Sistema de Gestão de Importação
                    </h2>

                    <div class="badge badge-error gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Código Proprietário
                    </div>
                  </div>
                  <div>
                    Sistema desenvolvido em C# e Windows Forms para gestão
                    contábil de produtos importados, desenvolvido como um Módulo
                    Adicional do Dataplace Symphony para a multinacional{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://kadant.com/"
                    >
                      Kadant
                    </a>
                    {"."}
                  </div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <h2 class="text-xl sm:text-2xl font-bold">
                      Sistema de Gestão de Centro de Custos
                    </h2>

                    <div class="badge badge-error gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Código Proprietário
                    </div>
                  </div>
                  <div>
                    Sistema desenvolvido em C# e Windows Forms para gestão
                    contábil de produtos importados, desenvolvido como um Módulo
                    Adicional do Dataplace Symphony para a instituição de ensino{" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://www.univem.edu.br/"
                    >
                      UNIVEM
                    </a>
                    {"."}
                  </div>
                </li>
                <li class="mb-8 flex flex-col gap-2">
                  <div class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <h2 class="text-xl sm:text-2xl font-bold">Focus Entidades</h2>

                    <div class="badge badge-error gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Código Proprietário
                    </div>
                  </div>
                  <div>
                    Sistema ERP para gestão de entidades de classe, com foco em
                    associações comerciais, desenvolvido em Laravel (API), Vue
                    (Frontend) e MySQL para a {" "}
                    <a
                      class="text-success hover:text-warning hover:underline active:text-secondary"
                      href="https://acim.org.br/"
                    >
                      ACIM - Associação Comercial e de Inovação de Marília
                    </a>
                    {"."}
                  </div>
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div class="flex h-32 items-center justify-center pt-8 text-sm italic lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-4">
              © 2023 KuryArt
            </div>
          </div>
        </div>
      </BaseHtml>
    ));
  });
