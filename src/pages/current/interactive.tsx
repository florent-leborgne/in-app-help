import { FunctionComponent, useState } from 'react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiCheckbox,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiIcon,
  EuiIconTip,
  EuiPopover,
  EuiPopoverFooter,
  EuiPopoverTitle,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiToolTip,
  EuiTourStep,
  useGeneratedHtmlId,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Interactive: FunctionComponent = () => {
  const explainedCheckboxId = useGeneratedHtmlId({
    prefix: 'explainedCheckbox',
  });
  const [isPopoverOpen3, setIsPopoverOpen3] = useState(false);
  const onButtonClick3 = () =>
    setIsPopoverOpen3(isPopoverOpen3 => !isPopoverOpen3);
  const closePopover3 = () => setIsPopoverOpen3(false);

  const [isPopoverOpen4, setIsPopoverOpen4] = useState(false);
  const onButtonClick4 = () =>
    setIsPopoverOpen4(isPopoverOpen4 => !isPopoverOpen4);
  const closePopover4 = () => setIsPopoverOpen4(false);

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const complicatedFlyoutTitleId = useGeneratedHtmlId({
    prefix: 'complicatedFlyoutTitle',
  });
  const [isFlyout2Visible, setIsFlyout2Visible] = useState(false);
  const closeFlyout2 = () => setIsFlyout2Visible(false);

  const closeFlyout = () => setIsFlyoutVisible(false);

  const showFlyout = () => setIsFlyoutVisible(true);
  const showFlyout2 = () => setIsFlyout2Visible(true);

  const closePopover = () => setIsPopoverOpen(false);

  const togglePopover = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);

  const flyoutContent = (
    <EuiText>
      <p>
        I&apos;m a flyout. I can provide long, rich text to users to help them.
        I am I am often used to let users make some additional configurations
        within the products, but I can also serve as a dedicated help panel,
        guiding through steps, or providing great reference information like
        syntax help.
      </p>

      <p>
        I can handle rich formatting and even embed additional EUI components,
        even tabs!
      </p>
      <p>For example:</p>
    </EuiText>
  );

  const htmlCode = `<!--A cool code snippet-->
<div>
  copy me, or don't. Your choice, really.
</div>
`;

  let flyout;
  let flyout2;

  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        ownFocus
        onClose={closeFlyout}
        aria-labelledby={complicatedFlyoutTitleId}>
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id={complicatedFlyoutTitleId}>Flyout title</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued">
            <p>Optional description for additional context.</p>
          </EuiText>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          {flyoutContent}
          <EuiCodeBlock language="html">{htmlCode}</EuiCodeBlock>
          <EuiSpacer size="m" />
          <EuiPopover
            closePopover={closePopover}
            button={
              <EuiButton onClick={togglePopover}>
                Popover within a flyout
              </EuiButton>
            }
            isOpen={isPopoverOpen}
            repositionOnScroll={true}>
            <p>Some possibly useful popover information.</p>
          </EuiPopover>
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                iconType="cross"
                onClick={closeFlyout}
                flush="left">
                Close
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }
  if (isFlyout2Visible) {
    flyout2 = (
      <EuiFlyout
        type="push"
        onClose={closeFlyout2}
        size="s"
        aria-labelledby={complicatedFlyoutTitleId}>
        <EuiFlyoutHeader hasBorder>
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="s" />
          <EuiTitle size="m">
            <h2 id={complicatedFlyoutTitleId}>Flyout title</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued">
            <p>Optional description for additional context.</p>
          </EuiText>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          {flyoutContent}
          <EuiCodeBlock language="html">{htmlCode}</EuiCodeBlock>
          <EuiSpacer size="m" />
          <EuiPopover
            closePopover={closePopover}
            button={
              <EuiButton onClick={togglePopover}>
                Popover within a flyout
              </EuiButton>
            }
            isOpen={isPopoverOpen}
            repositionOnScroll={true}>
            <p>Some possibly useful popover information.</p>
          </EuiPopover>
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                iconType="cross"
                onClick={closeFlyout2}
                flush="left">
                Close
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }

  const currentTourStep = 1;

  const [isTourActive, setIsTourActive] = useState(false);
  const resetTour = () => {
    setIsTourActive(isTourActive => !isTourActive);
    setNextStep(false);
  };

  const [isItNextStep, setNextStep] = useState(false);
  const incrementStep = () => {
    setNextStep(isItNextStep => !isItNextStep);
  };

  const finishTour = () => setIsTourActive(false);

  const demoTourSteps = [
    {
      step: 1,
      title: 'Step 1',
      content: (
        <span>
          <p>Use me to describe what is new, or what to look at precisely.</p>
          <EuiSpacer />
          <EuiButton onClick={incrementStep}>Got it</EuiButton>
        </span>
      ),
    },
    {
      step: 2,
      title: 'Step 2',
      content: <p>Another thing to show to users.</p>,
    },
  ];

  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: 'Interactive help',
        description:
          'Interactive help is not visible by default. Users have to hover or click somewhere intentionally to read that content.',
      }}>
      <EuiText>
        <h3>Tooltips</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiTourStep
            content={demoTourSteps[0].content}
            isStepOpen={
              currentTourStep === 1 && isTourActive && isItNextStep == false
            }
            onFinish={finishTour}
            step={1}
            stepsTotal={demoTourSteps.length}
            subtitle="I am a subtitle that appears above the title"
            title={demoTourSteps[0].title}
            anchorPosition="rightUp">
            <EuiCheckbox
              id={explainedCheckboxId}
              label="This option has a tooltip"
              onChange={() => {
                console.log('You clicked me');
              }}
            />
          </EuiTourStep>
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
        content="I'm a tooltip on an icon. I'm mandatory if the icon is clickable. Use me to name icons or actions on hover, not to provide help because help must be identifiable by users with an IconTip.">
        <EuiIcon type="alert" title="Icon with tooltip" />
      </EuiToolTip>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Popovers</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiTourStep
        anchorPosition="rightUp"
        content={demoTourSteps[1].content}
        isStepOpen={isItNextStep && isTourActive}
        onFinish={finishTour}
        step={2}
        stepsTotal={demoTourSteps.length}
        subtitle="I am a subtle subtitle"
        title={demoTourSteps[1].title}>
        <EuiPopover
          button={
            <EuiButton
              iconType="arrowDown"
              iconSide="right"
              onClick={onButtonClick3}>
              Popover on a button
            </EuiButton>
          }
          isOpen={isPopoverOpen3}
          closePopover={closePopover3}
          anchorPosition="downCenter">
          <EuiPopoverTitle>Short popover title</EuiPopoverTitle>
          <div style={{ width: '300px' }}>
            <EuiText size="s">
              <p>
                I&apos;m the popover content. You can use me to display more
                information about something. Information that is still important
                enough to be displayed in the UI, but not so critical so it
                doesn&apos;t have to be visible by default. Users may or may not
                access me.
              </p>
              <p>
                Some cool things about me:
                <ul>
                  <li>
                    I can handle <strong>text formatting</strong> and tables
                  </li>
                  <li>I can embed a search</li>
                  <li>I can handle pagination</li>
                  <li>I accept screenshots and gifs</li>
                </ul>
              </p>
              <p>
                If I become too long, consider using a flyout instead. The
                content will be easier to read.
              </p>
            </EuiText>
          </div>
          <EuiPopoverFooter>
            <EuiButton size="s">Read full documentation</EuiButton>
            <EuiButton size="s">Close</EuiButton>
          </EuiPopoverFooter>
        </EuiPopover>
      </EuiTourStep>
      <EuiSpacer size="m" />
      <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiCheckbox
            id={explainedCheckboxId}
            label="This option has a popover"
            onChange={() => {
              console.log('You clicked me');
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiPopover
            button={
              <EuiIcon type="questionInCircle" onClick={onButtonClick4}>
                Popover on an icon
              </EuiIcon>
            }
            isOpen={isPopoverOpen4}
            closePopover={closePopover4}
            anchorPosition="downCenter">
            <EuiPopoverTitle>Short popover title</EuiPopoverTitle>
            <div style={{ width: '300px' }}>
              <EuiText size="s">
                <p>
                  I&apos;m the popover content. You can use me to display more
                  information about something. Information that is still
                  important enough to be displayed in the UI, b ut not so
                  critical so it doesn&apos;t have to be visible by default.
                  Users may or may not access me.
                </p>
                <p>
                  Some cool things about me:
                  <ul>
                    <li>
                      I can handle <strong>text formatting</strong> and tables
                    </li>
                    <li>I can embed a search</li>
                    <li>I can handle pagination</li>
                    <li>I accept screenshots and gifs</li>
                  </ul>
                </p>
                <p>
                  If I become too long, consider using a flyout instead. The
                  content will be easier to read.
                </p>
              </EuiText>
            </div>
            <EuiPopoverFooter>
              <EuiButton size="s">Read full documentation</EuiButton>
              <EuiButton size="s">Close</EuiButton>
            </EuiPopoverFooter>
          </EuiPopover>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Flyouts</h3>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiButton onClick={showFlyout}>Overlay flyout</EuiButton>
      {flyout}
      <EuiSpacer size="m" />
      <EuiButton onClick={showFlyout2}>Push flyout</EuiButton>
      {flyout2}
      <EuiSpacer size="xxl" />
      <EuiText>
        <h3>Tours</h3>
        <p>
          Tours are usually forced to users the first time they open an app
          after a new feature is released, but they can still interact with it
          in several ways.
        </p>
      </EuiText>
      <EuiSpacer size="m" />
      <EuiButtonEmpty iconType="refresh" flush="left" onClick={resetTour}>
        Open tour
      </EuiButtonEmpty>
      <EuiSpacer />
    </KibanaLayout>
  );
};

export default Interactive;
