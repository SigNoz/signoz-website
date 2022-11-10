import LI from "../LI";
import UL from "../UL";
import Table from "../Table";
import Th from "../th";
import Tr from "../tr";

const CommonPrerequisites = () => {
  return (
    <>
      <UL>
        <LI> Kubernetes version {">="} `1.21`</LI>
        <LI>
          `x86-64`/`amd64` workloads as currently `arm64` architecture is not
          supported
        </LI>
        <LI> Helm version {">="} `3.8`</LI>
        <LI> You must have `kubectl` access to your cluster</LI>
        <LI>
          The following table describes the hardware requirements that are
          needed to install SigNoz on Kubernetes:
        </LI>
      </UL>
      <Table>
        <Tr>
          <Th>Component</Th>
          <Th>Minimal Requirements</Th>
          <Th>Recommended</Th>
        </Tr>
        <Tr>
          <td>Memory</td>
          <td>8 GB </td>
          <td>16 GB </td>
        </Tr>
        <Tr>
          <td>CPU</td>
          <td>4 cores </td>
          <td>8 cores </td>
        </Tr>
        <Tr>
          <td>Storage</td>
          <td>30 GB </td>
          <td>80 GB </td>
        </Tr>
      </Table>
    </>
  );
};

export default CommonPrerequisites;