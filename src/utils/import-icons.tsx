import { readFile, writeFile } from "node:fs/promises";
import { locate } from "@iconify/json";
import { getIconsCSS } from "@iconify/utils";

export async function importIcons() {
  /**
   * List of icons. Key is icon set prefix, value is array of icons
   *
   * @type {Record<string, string[]>}
   */
  const icons = {
    mdi: ["home", "menu", "linkedin", "github"],
    "mdi-light": ["alert-circle", "circle", "help-circle"],
    ph: ["sun-bold", "moon-bold"],
    logos: ["bun", "ruby", "unity"],
    "skill-icons": [
      "php-dark",
      "typescript",
      "javascript",
      "nodejs-dark",
      "html",
      "css",
      "react-dark",
      "vuejs-dark",
      "laravel-dark",
      "mysql-dark",
      "postgressql-dark",
      "godot-dark",
      "linux-light",
      "docker",
      "jest",
      "",
    ],
    "simple-icons": ["turso"],
    teenyicons: ["c-sharp-solid"],
    fa: ["windows"],
    devicon: ["git"],
    "file-icons": ["test-generic"],
  };

  // Parse each icon set
  let code = "";
  for (const prefix in icons) {
    // Find location of .json file
    const filename = locate(prefix);

    // Load file and parse it
    /** @type {import("@iconify/types").IconifyJSON} */
    const iconSet = JSON.parse(await readFile(filename, "utf8"));

    // Get CSS
    const css = getIconsCSS(iconSet, icons[prefix]);

    // Add it to code
    code += css;
  }

  // Save CSS file
  await writeFile("public/icons.css", code, "utf8");
  console.log(`Saved CSS (${code.length} bytes)`);
}
