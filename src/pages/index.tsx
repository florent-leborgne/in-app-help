import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import {
  EuiBadge,
  EuiButton,
  EuiPageTemplate,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle,
} from '@elastic/eui';
import React from 'react';

const Index: FunctionComponent = () => {
  const router = useRouter();
  return (
    <EuiPageTemplate template="centeredBody">
      <EuiText color="subded" size="s" grow={false}>
        <EuiTextColor color="default">
          <h1>In-app help Prototype</h1>
        </EuiTextColor>
        <p>
          This prototype provides in-context, interactive guidelines for when,
          and how, to include content in the UI for as many cases as possible.
        </p>
      </EuiText>
      <EuiSpacer size="l" />
      <EuiTitle size="xs">
        <h1>Which version would you like to explore?</h1>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiButton onClick={() => router.push('/playground')} fullWidth>
        Playground <EuiBadge color="warning">ON-Week</EuiBadge>
      </EuiButton>
      <EuiSpacer size="s" />
      <EuiButton onClick={() => router.push('/current')} fullWidth>
        Current <EuiBadge color="warning">In-progress</EuiBadge>
      </EuiButton>
      <EuiSpacer size="s" />
      <EuiButton disabled fullWidth>
        Docs reuse - Not available yet
      </EuiButton>
      <EuiSpacer size="s" />
    </EuiPageTemplate>
  );
};

export default Index;
