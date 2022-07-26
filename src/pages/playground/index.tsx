import { FunctionComponent } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiCard, EuiIcon } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Index: FunctionComponent = () => {
  const context = 'playground';
  return (
    <KibanaLayout
      template="empty"
      pageHeader={{
        pageTitle: 'In-product help guidelines',
        description:
          'The various forms of help content you can embed in the UI, case by case.',
      }}>
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type="eye" />}
            title="Active help"
            description="Help that users see independently of their will. It's just there."
            href="playground/active"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type="help" />}
            title="Interactive help"
            description="Help that users can display intentionnally through an interaction."
            href="playground/interactive"
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type="popout" />}
            title="External help"
            description="Help that lives outside of the product and makes users leave their context."
            href="playground/external"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </KibanaLayout>
  );
};

export default Index;
