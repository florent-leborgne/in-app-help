import { FunctionComponent } from 'react';
import Link from 'next/link';
import { EuiLink, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Passive: FunctionComponent = () => {
  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'Passive help',
        description:
          'Passive help includes all bits of help that do not require any specific action from the user. It is the first layer of help, dedicated to critical information that must be visible in priority for users.',
      }}>
      <EuiSpacer size="xxl" />

      <EuiText>
        I am an <strong>EuiText</strong>. Use me to provide context or general
        definitions when introducing pages and sections.
      </EuiText>
    </KibanaLayout>
  );
};

export default Passive;
