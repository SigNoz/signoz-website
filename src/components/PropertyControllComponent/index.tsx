const PropertyControlledComponent = ({
  controllerProperty,
  children,
}: PropertyControlledComponentProps) => {
  if (!controllerProperty) return null;

  return children;
};

interface PropertyControlledComponentProps {
  controllerProperty: boolean;
  children: React.ReactElement;
}

export default PropertyControlledComponent;
