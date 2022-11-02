import Card from "components/Card";
import Link from "next/link";
import React from "react";

const DocList = ({ list = [] }: Props) => (
  <div className="grid grid-cols-2 gap-4 my-4">
    {list.map((e) => (
      <Link key={e.title + e.subText} passHref scroll href={e.link}>
        <Card className="flex flex-col gap-3 cursor-pointer hover:shadow-lg transition-shadow">
          <a href={e.link}>
            <div className="text-signoz-dark-intermediate text-ellipsis overflow-hidden whitespace-normal">{`📋 ${e.title}`}</div>
            <div className="text-signoz-secondary-light text-ellipsis overflow-hidden whitespace-normal">
              {e.subText}
            </div>
          </a>
        </Card>
      </Link>
    ))}
  </div>
);

interface List {
  title: string;
  subText: string;
  link: string;
}

interface Props {
  list: List[];
}

export default DocList;
