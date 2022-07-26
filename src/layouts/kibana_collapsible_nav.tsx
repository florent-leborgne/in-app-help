import { useState } from 'react';
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiHeader,
  EuiIcon,
  EuiPinnableListGroup,
  EuiPinnableListGroupItemProps,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiListGroup,
  useGeneratedHtmlId,
  EuiAvatar,
  EuiPopover,
  EuiFlexGroup,
  EuiPopoverTitle,
  EuiButton,
  EuiLink,
} from '@elastic/eui';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import { css } from '@emotion/react';
import ThemeSwitcher from '../components/chrome/theme_switcher';

const pathPrefix = process.env.PATH_PREFIX;

const TopLinks: EuiPinnableListGroupItemProps[] = [
  {
    label: 'Home',
    iconType: 'home',
    isActive: true,
    'aria-current': true,
    href: `${pathPrefix}/`,
    pinnable: false,
  },
];

const PlaygroundPageLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Active help', href: `${pathPrefix}/playground/active` },
  { label: 'Interactive help', href: `${pathPrefix}/playground/interactive` },
  { label: 'External help', href: `${pathPrefix}/playground/external` },
];
const CurrentPageLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Active help', href: `${pathPrefix}/current/active` },
  { label: 'Interactive help', href: `${pathPrefix}/current/interactive` },
  { label: 'External help', href: `${pathPrefix}/current/external` },
];

const docsUrl = 'https://docs.elastic.dev/guide/ui/in-prod-help#links-to-docs';

const CollapsibleNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const breadcrumbs = [
    {
      text: 'Home',
      href: `${pathPrefix}/`,
    },
    {
      text: 'Playground',
      href: `${pathPrefix}/playground`,
    },
    {
      text: 'pageTitle',
    },
  ];

  /**
   * Accordion toggling
   */
  const [openGroups, setOpenGroups] = useState(['Kibana']);

  // Save which groups are open and which are not with state and local store
  const toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return;
    const itExists = openGroups.includes(title);
    if (isOpen) {
      if (itExists) return;
      openGroups.push(title);
    } else {
      const index = openGroups.indexOf(title);
      if (index > -1) {
        openGroups.splice(index, 1);
      }
    }
    setOpenGroups([...openGroups]);
    localStorage.setItem('openNavGroups', JSON.stringify(openGroups));
  };

  /**
   * Pinning
   */
  const [pinnedItems, setPinnedItems] = useState<
    EuiPinnableListGroupItemProps[]
  >([]);

  const addPin = (item: any) => {
    if (!item || find(pinnedItems, { label: item.label })) {
      return;
    }
    item.pinned = true;
    const newPinnedItems = pinnedItems ? pinnedItems.concat(item) : [item];
    setPinnedItems(newPinnedItems);
    localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems));
  };

  const removePin = (item: any) => {
    const pinIndex = findIndex(pinnedItems, { label: item.label });
    if (pinIndex > -1) {
      item.pinned = false;
      const newPinnedItems = pinnedItems;
      newPinnedItems.splice(pinIndex, 1);
      setPinnedItems([...newPinnedItems]);
      localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems));
    }
  };

  function alterLinksWithCurrentState(
    links: EuiPinnableListGroupItemProps[],
    showPinned = false
  ): EuiPinnableListGroupItemProps[] {
    return links.map(link => {
      const { pinned, ...rest } = link;
      return {
        pinned: showPinned ? pinned : false,
        ...rest,
      };
    });
  }

  function addLinkNameToPinTitle(listItem: EuiPinnableListGroupItemProps) {
    return `Pin ${listItem.label} to top`;
  }

  function addLinkNameToUnpinTitle(listItem: EuiPinnableListGroupItemProps) {
    return `Unpin ${listItem.label}`;
  }

  const [isHelpPopoverOpen, setIsHelpPopoverOpen] = useState(false);
  const onHelpButtonClick = () =>
    setIsHelpPopoverOpen(isHelpPopoverOpen => !isHelpPopoverOpen);
  const closeHelpPopover = () => setIsHelpPopoverOpen(false);

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const collapsibleNav = (
    <EuiCollapsibleNav
      ownFocus={false}
      css={css`
        margin-top: 96px; // two top navs
        min-height: calc(100vh - 96px);
        display: flex;
      `}
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      {/* Dark deployments section */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <EuiCollapsibleNavGroup isCollapsible={false} background="dark">
          <EuiListGroup
            color="ghost"
            maxWidth="none"
            gutterSize="none"
            size="s"
            listItems={[
              {
                label: 'Manage deployment',
                href: '#',
                iconType: 'logoCloud',
                iconProps: {
                  color: 'ghost',
                },
              },
            ]}
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      {/* Shaded pinned section always with a home item */}
      <EuiFlexItem grow={false}>
        <EuiCollapsibleNavGroup background="light">
          <EuiPinnableListGroup
            aria-label="Pinned links" // A11y : Since this group doesn't have a visible `title` it should be provided an accessible description
            listItems={alterLinksWithCurrentState(TopLinks).concat(
              alterLinksWithCurrentState(pinnedItems, true)
            )}
            unpinTitle={addLinkNameToUnpinTitle}
            onPinClick={removePin}
            maxWidth="none"
            color="text"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      <EuiHorizontalRule margin="none" />
      {/* Menu items */}
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Playground pages
            </a>
          }
          buttonElement="div"
          iconType="play"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(PlaygroundPageLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Current pages
            </a>
          }
          buttonElement="div"
          iconType="eye"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(CurrentPageLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  const leftSectionItems = [collapsibleNav];

  return (
    <>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo
                key="elastic-logo"
                iconType="logoElastic"
                href={`${pathPrefix}/`}>
                Elastic in-app help prototype
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <>
                <EuiPopover
                  button={
                    <EuiHeaderSectionItemButton
                      iconType="help"
                      onClick={onHelpButtonClick}
                    />
                  }
                  anchorPosition="downRight"
                  closePopover={closeHelpPopover}
                  data-test-subj="helpMenuButton"
                  id="headerHelpMenu"
                  isOpen={isHelpPopoverOpen}
                  repositionOnScroll>
                  <EuiPopoverTitle>
                    <EuiFlexGroup responsive={false}>
                      <EuiFlexItem>
                        <h2>Some help menu</h2>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiPopoverTitle>
                  <EuiFlexItem>
                    <EuiLink href={docsUrl} target="_blank">
                      In-app help guidelines
                    </EuiLink>
                  </EuiFlexItem>
                </EuiPopover>
              </>,

              <ThemeSwitcher key={useGeneratedHtmlId()} />,
              <EuiHeaderSectionItemButton
                key={useGeneratedHtmlId()}
                aria-label="Account menu">
                <EuiAvatar name="Content Design" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />

      <EuiHeader
        position="fixed"
        sections={[
          {
            items: leftSectionItems,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                key={useGeneratedHtmlId()}
                aria-label="Account menu">
                <EuiAvatar type="space" name="Default Space" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
        ]}
      />
    </>
  );
};

export default CollapsibleNav;
