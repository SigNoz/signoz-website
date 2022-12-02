import Link from "../Link";
import Paragraph from "../Paragraph";

const UpgradeInfo = () => {
  return (
    <>
      <Paragraph>
        To override values in a Helm chart, you can also use the `values`/`-f`
        flag. See the
        <Link href="https://helm.sh/docs/helm/helm_upgrade/">Helm Upgrade</Link>
        page of the Helm documentation for more details.
      </Paragraph>
    </>
  );
};

export default UpgradeInfo;
