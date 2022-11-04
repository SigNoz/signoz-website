import AuthorBy, { AuthorProps } from "components/AuthorBy";

const ContributorHighlight = ({
  list,
}: ContributorHighlightProps): JSX.Element => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
    {list.map((item) => (
      <a
        target={"_blank"}
        rel="noreferrer"
        href={item.link}
        key={item.avatar + item.name}
      >
        <AuthorBy
          {...{
            avatar: item?.avatar,
            name: item?.name,
            position: item?.position,
          }}
        />
      </a>
    ))}
  </div>
);

interface List extends AuthorProps {
  link: string
}

interface ContributorHighlightProps {
  list: List[];
}


export default ContributorHighlight;  
