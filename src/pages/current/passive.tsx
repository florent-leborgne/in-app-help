import { FunctionComponent } from 'react';
import {
  EuiButton,
  EuiFieldText,
  EuiFormRow,
  EuiSearchBar,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Passive: FunctionComponent = () => {
  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'Passive help',
        description:
          'Passive help includes all bits of help that do not require any specific action from the user. It is the first layer of help, dedicated to critical information that must be visible in priority for users.',
      }}>
      <EuiText>
        <h3>Intros and descriptions</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiText>
        I am an introduction or general description. Use me below the title in
        pages, sections or flyouts to provide context or general definitions. I
        am not mandatory. Add me only if there is relevant information to share.
      </EuiText>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Placeholders</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiSearchBar
        box={{
          placeholder:
            'I am a placeholder text. In search bars, always use me to tell users what they can search for.',
        }}
      />
      <EuiSpacer size="m" />
      <EuiFieldText
        fullWidth
        placeholder="I am a placeholder text. In regular selection or input fields, I am optional. Add me to describe the expected value of the input or to provide a useful example. Keep me short."
      />

      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Calls to action</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiButton
        color="primary"
        fill
        onClick={() => {
          console.log('You clicked me');
        }}
        key="create-dashboard">
        Click me
      </EuiButton>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Hint text</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiFormRow
        label="I'm a field label. I should be 1 or 2 words most of the time."
        helpText="I am some friendly hint text. I am optionnal. I explain information necessary for filling a form or understanding what I can do with a setting or option. I should be 1 or 2 sentences, and definitely displayed on less than 2 lines.">
        <EuiFieldText name="last" />
      </EuiFormRow>
    </KibanaLayout>
  );
};

export default Passive;
