import { IconButton } from "../buttons/icon-button";
import { ThemeController } from "../buttons/theme-controller";

export const HeaderSimple = async ({
  icons,
}: {
  icons: [typeof IconButton];
}) => (
  <div id="header" class="flex h-max w-full flex-row justify-between">
    {/* Left */}
    <div class="magictime slideLeftReturn flex flex-row flex-wrap items-center">
      <img class="h-16 w-16" src="public/dist/images/kurya.png" alt="kurya" />
      <h1 class="text-4xl font-bold">Paulo Cury</h1>
      <h2 class="ml-6 text-2xl text-warning">Software Developer</h2>
    </div>
    {/* Right */}
    <div class="magictime slideUpReturn my-auto flex flex-row ">
      {(() => {
        const renderIcons = [];
        for (const icon of icons) {
          renderIcons.push(icon);
        }
        return renderIcons;
      })()}

      <IconButton
        href="https://www.linkedin.com/in/paulo-cezar-cury-seara/"
        fontSize="text-5xl"
        iconSet="mdi"
        icon="linkedin"
        color="currentColor"
        hoverColor="warning"
      />
      <IconButton
        href="https://github.com/kuryart"
        fontSize="text-5xl"
        iconSet="mdi"
        icon="github"
        color="currentColor"
        hoverColor="warning"
      />

      <ThemeController
        theme="cupcake"
        lightIconSet="ph"
        lightIcon="sun-bold"
        darkIconSet="ph"
        darkIcon="moon-bold"
        fontSize="text-2xl"
        color="currentColor"
        hoverColor="warning"
      />
    </div>
  </div>
);
