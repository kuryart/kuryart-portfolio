export const IconButton = async ({
  href,
  fontSize,
  iconSet,
  icon,
  color,
  hoverColor,
}: {
  href: string;
  fontSize: string;
  iconSet: string;
  icon: string;
  color: string;
  hoverColor: string;
}) => (
  <a
    href={href}
    aria-label={icon}
    class={`${fontSize} icon--${iconSet} icon--${iconSet}--${icon} text-${color} hover:text-${hoverColor}`}
  />
);
