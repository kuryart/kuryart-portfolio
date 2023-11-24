export const ThemeController = async ({
  theme,
  lightIconSet,
  lightIcon,
  darkIconSet,
  darkIcon,
  fontSize,
  color,
  hoverColor,
}: {
  theme: string;
  lightIconSet: string;
  lightIcon: string;
  darkIconSet: string;
  darkIcon: string;
  fontSize: string;
  color: string;
  hoverColor: string;
}) => (
  <label class="swap swap-rotate my-auto h-8 w-8 hover:text-warning">
    <input type="checkbox" class="theme-controller" value={theme} />
    <span
      class={`swap-on ${fontSize} icon--${lightIconSet} icon--${lightIconSet}--${lightIcon} text-${color} hover:text-${hoverColor}`}
    />
    <span
      class={`swap-off ${fontSize} icon--${darkIconSet} icon--${darkIconSet}--${darkIcon} text-${color} hover:text-${hoverColor}`}
    />
  </label>
);
