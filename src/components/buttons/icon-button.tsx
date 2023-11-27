export const IconButton = ({
  href,
  fontSize,
  iconSet,
  icon,
  color,
  hoverColor,
  className,
}: {
  href: string;
  fontSize: string;
  iconSet: string;
  icon: string;
  color: string;
  hoverColor: string;
  className?: string
}) => {
  className = className ? (" " + className) : "";

  return <a
    href={href}
    aria-label={icon}
    class={`${fontSize} icon--${iconSet} icon--${iconSet}--${icon} text-${color} hover:text-${hoverColor}${className}`}
  />
};
