import { EuiButtonEmpty, EuiLink, EuiSpacer, EuiText } from '@elastic/eui';
import { FunctionComponent } from 'react';
import KibanaLayout from '../../layouts/kibana';

const External: FunctionComponent = () => {
  const docsUrl =
    'https://docs.elastic.dev/guide/ui/in-prod-help#links-to-docs';
  const learnMoreLink = (
    <EuiLink href={docsUrl} target="_blank">
      Learn more
    </EuiLink>
  );
  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'External help',
        description:
          "External help lives outside of the product. Users can access it from the product, but they'll open a new page when accessing it.",
      }}>
      <EuiText>
        <h3>Learn more links</h3>
        <p>
          I am any active or interactive help. When there is much more to the
          story than we can embed in the UI, it might be worth adding a Learn
          more link that takes users to the docs. {learnMoreLink}
        </p>
      </EuiText>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Empty button links</h3>
      </EuiText>
      <EuiButtonEmpty
        size="s"
        flush="right"
        href={docsUrl}
        target="_blank"
        iconType="help"
        data-test-subj="docsButton">
        I&apos;m an empty button for standalone links to the docs
      </EuiButtonEmpty>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Help menu from header</h3>
        <p>Look in the header :-)</p>
      </EuiText>
    </KibanaLayout>
  );
};

export default External;
