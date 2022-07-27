import React from "react";
import Title from "components/Title";
import Subtext from "components/SubText";
import Card from "components/Card";

const Tutorials = (): JSX.Element => {
  return (
    <div>
      <Title>Tutorials</Title>
      <Subtext>
        SigNoz tutorials are step-by-step training exercises that guide you
        through monitoring your applications and infrastructure.
      </Subtext>

      <Card className="bg-signoz-light-pink">dsa</Card>
    </div>
  );
};

export default Tutorials;
