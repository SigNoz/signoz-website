import React from "react";
import NextImage from "next/image";
import Title from "components/Title";
import Subtext from "components/SubText";
import AuthorBy from "./authorBy";
import Button from "components/Button";
import Card from "components/Card";

const OutPlay = (): JSX.Element => {
  return (
    <div>
      {/* <div className="bg-signoz-secondary-light">
        <NextImage
          src={"/images/outPlay.jpg"}
          layout="intrinsic"
          width={176}
          height={40}
        />
      </div> */}
      <Card>
        <div>
          <Title className="text-2xl">
            Read about how Outplay improved conversion rates by 10-20% with
            SigNoz.
          </Title>
          <Subtext
            style={{ fontSize: "1rem" }}
            className="mt-4 text-signoz-dark-light"
          >
            <span>
              “A new and yet powerful
              <span className="text-signoz-primary">
                &nbsp;#observability #opensource&nbsp;
              </span>
              alternative has born in the name of SigNoz. It could offer a
              serious challenger to Datadog / New Relic and other SaaS
              solutions.”
            </span>
          </Subtext>
        </div>
        <AuthorBy />
        <Button className="mt-4" fullWidth variant="primary">
          Read full case study
        </Button>
      </Card>
    </div>
  );
};

export default OutPlay;
