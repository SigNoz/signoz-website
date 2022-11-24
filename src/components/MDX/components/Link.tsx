import Link from "next/link";

const CustomLink = ({ href, ...rest }: LinkProps) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link scroll={false} soft passHref href={href}>
        <a className="text-signoz-primary" href={href} {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return (
    <a
      className="text-signoz-primary"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};

interface LinkProps {
  href?: string;
  children?: React.ReactNode;
}

export default CustomLink;
