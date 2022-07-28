import { FunctionComponent } from 'react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiCallOut,
  EuiEmptyPrompt,
  EuiFieldText,
  EuiFormRow,
  EuiLink,
  EuiSearchBar,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Active: FunctionComponent = () => {
  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'Active help',
        description:
          'Active help includes all bits of help that do not require any specific action from the user. It is there by default. It is the first layer of help, for information that must be immediately visible.',
      }}>
      <EuiText>
        <h3>Intros and descriptions</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiText>
        I am an introduction or general description. Use me below page, section
        and flyout titles to provide context or general definitions. I am not
        mandatory. Add me only if there is relevant information to share.
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
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Callouts</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiCallOut title="I'm an information callout title" iconType="eye">
        <p>
          Use me to provide outstanding information to users. You can also use
          it to provide tips to users. Adding an icon is optional.
        </p>
        <p>
          The title should summarize the information so users can scan faster.
          Don&apos;t use titles such as <strong>Info</strong> or{' '}
          <strong>Note</strong>.
        </p>
      </EuiCallOut>
      <EuiSpacer size="m" />
      <EuiCallOut
        title="I'm a success callout"
        color="success"
        iconType="check">
        <p>
          Use me to confirm the success of an operation. I can be just a title
          if there is no additional information required. For quick confirmation
          messages, use an ephemeral toast (check EUI) instead.
        </p>
      </EuiCallOut>
      <EuiSpacer size="m" />
      <EuiCallOut
        title="I'm a warning callout"
        color="warning"
        iconType="alert">
        <p>
          Use me to warn users that something might break in a not too long
          future or that a non-critical error happened. The title should provide
          a summary of the situation.
        </p>
        <p>
          As much as possible, explain what lead to this, what harm it could do,
          and how to resolve it. Information in the product is always better
          than a link to documentation, but you can add one in{' '}
          <EuiLink href="#">last resort</EuiLink>.
        </p>
        <EuiButton href="#" color="warning">
          Recommended action
        </EuiButton>
      </EuiCallOut>
      <EuiSpacer size="m" />
      <EuiCallOut title="I'm an error callout" color="danger" iconType="alert">
        <p>
          Use me to notify users of an important error that has happened.
          Something broke. The title should provide a summary of the situation.
        </p>
        <p>
          As much as possible, explain what lead to this, what harm it could do,
          and how to resolve it. Information in the product is always better
          than a link to documentation, but you can add one in{' '}
          <EuiLink href="#">last resort</EuiLink>.
        </p>
        <EuiButton href="#" color="danger">
          Recommended action
        </EuiButton>
        <EuiButtonEmpty href="#" color="danger">
          Secondary action
        </EuiButtonEmpty>
      </EuiCallOut>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Empty states</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiEmptyPrompt
        iconType="logoSecurity"
        hasBorder
        title={<h2>Title, usually action-oriented</h2>}
        body={
          <>
            <p>
              I&apos;m an empty state. Use me instead of blank screens to let
              users know that there&apos;s nothing here, because nothing exists,
              or there is no result, and provide guidance for what to do next.
            </p>
            <p>
              Write a description that explains what this is or why the user
              should do it. This description should be 1 or 2 sentences, but
              definitely 3 lines top to keep a good readability.
            </p>
          </>
        }
        actions={
          <EuiButton color="primary" fill>
            Action (mandatory)
          </EuiButton>
        }
        footer={
          <>
            <EuiTitle size="xxs">
              <h3>A footer, for example to link to docs.</h3>
            </EuiTitle>
            <EuiLink href="#" target="_blank">
              Read the docs
            </EuiLink>
          </>
        }
      />
    </KibanaLayout>
  );
};

export default Active;
