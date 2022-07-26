import { FunctionComponent } from 'react';
import KibanaLayout from '../../layouts/kibana';

const Discover: FunctionComponent = () => {
  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'External help',
        description:
          "External help lives outside of the product. Users can access it from the product, but they'll open a new page when accessing it.",
      }}></KibanaLayout>
  );
};

export default Discover;
