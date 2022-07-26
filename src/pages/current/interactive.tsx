import { FunctionComponent } from 'react';
import {
  EuiCheckbox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiIconTip,
  EuiSpacer,
  EuiToolTip,
  useGeneratedHtmlId,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Discover: FunctionComponent = () => {
  const explainedCheckboxId = useGeneratedHtmlId({
    prefix: 'explainedCheckbox',
  });

  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'Interactive help',
        description:
          'Interactive help is not visible by default. Users have to hover or click somewhere intentionally to read that content.',
      }}>
      <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiCheckbox
            id={explainedCheckboxId}
            label="This option has a tooltip"
            onChange={() => {
              console.log('You clicked me');
            }}
          />
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiIconTip
            content="I'm a tooltip based on an IconTip. Use me to provide useful yet non critical additional information in one or 2 sentences, or when there is not enough space for important information in packed UIs. If the information is important enough, use hint text instead. If I'm longer than 1 or 2 sentences, use a popover instead."
            position="right"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiToolTip
        position="top"
        content="I'm a tooltip on an icon. Use me to name icons or actions on hover, not to provide help because help must be identifiable by users with an IconTip.">
        <EuiIcon type="alert" title="Icon with tooltip" />
      </EuiToolTip>
      <EuiSpacer size="xxl" />
    </KibanaLayout>
  );
};

export default Discover;
