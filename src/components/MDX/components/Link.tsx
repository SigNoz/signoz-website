import Link from "next/link";

const CustomLink = ({ href, ...rest }: LinkProps) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link soft passHref href={href}>
        <a href={href} {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

interface LinkProps {
  href?: string;
  children?: React.ReactNode;
}

export default CustomLink;