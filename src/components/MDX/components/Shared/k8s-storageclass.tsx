import Code from "../Code";
import Paragraph from "../Paragraph";


const StorageClass = () => {
    return (
        <>
            <Paragraph>In case, you would like to use your own storage class, you can remove `installCustomStorageClass` and replace `storageClass` to desired storage class from above YAML.</Paragraph>

            <Code>Note: To list storage class in your Kubernetes cluster: `kubectl get storageclass`.</Code>
        </>
    )
}

export default StorageClass;