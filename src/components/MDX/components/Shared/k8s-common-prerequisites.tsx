import LI from "../LI";
import Table from "../Table";

const CommonPrerequisites = () => {
    return (
        <>
            <LI> Kubernetes version >= `1.21`</LI>
            <LI> `x86-64`/`amd64` workloads as currently `arm64` architecture is not supported</LI>
            <LI> Helm version >= `3.8`</LI>
            <LI> You must have `kubectl` access to your cluster</LI>
            <LI> The following table describes the hardware requirements that are needed to install SigNoz on Kubernetes:</LI>

            <Table>
                <tr>
                    <th>Component</th>
                    <th>Minimal Requirements</th>
                    <th>Recommended</th>
                </tr>
                <tr>
                    <td>Memory</td><td>8 GB </td><td>16 GB </td>
                </tr>
                <tr>
                    <td>CPU</td><td>4 cores    </td><td>8 cores </td>
                </tr>
                <tr>
                    <td>Storage</td><td>30 GB      </td><td>80 GB  </td>
                </tr>
            </Table>
        </>
    )
}

export default CommonPrerequisites;