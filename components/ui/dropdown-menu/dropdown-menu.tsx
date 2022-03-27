import * as React from 'react';
import * as Styled from './dropdown-menu.styled';
import Downshift, { ControllerStateAndHelpers } from 'downshift';
import { Ellipsis, Options } from '../icons';
import { Manager, Popper, Reference } from 'react-popper';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Menu from '../menu';
import { Placement } from 'popper.js';
import classNames from 'classnames';

export interface Props {
  arrowStyle?: React.CSSProperties;
  arrowType?: 'default' | 'spaceHeader';
  buttonHeight?: number;
  buttonStyle?: React.CSSProperties;
  buttonTitle?: string | null;
  buttonTitleIcon?: JSX.Element;
  buttonWidth?: number;
  disabled?: boolean;
  elements?: React.ReactNode;
  hasArrow?: boolean;
  onChange?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedItem: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateAndhelpers: ControllerStateAndHelpers<any>,
  ) => void;
  onOpenMenu?: () => void;
  onSelect?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedItem: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateAndHelpers: ControllerStateAndHelpers<any>,
  ) => void;
  placement?: Placement;
  popperStyle?: React.CSSProperties;
  rotateArrow?: boolean;
  style?: React.CSSProperties;
  toggleType?: 'ellipsis' | 'options' | 'elements' | 'button';
  width?: number | string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function itemToString(item: any): string {
  if (!item) {
    return '';
  }

  if (item.hasOwnProperty('props')) {
    return item.props.value;
  }

  return item;
}

function defaultOnSelect(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedItem: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stateAndHelpers: ControllerStateAndHelpers<any>,
): void {
  if (!selectedItem || !selectedItem.props || !selectedItem.props.onSelect) {
    return;
  }

  if (selectedItem.props.disabled) {
    return;
  }

  selectedItem.props.onSelect(selectedItem, stateAndHelpers);
}

const DropdownMenu: React.FC<Props> = ({
  arrowStyle,
  arrowType = 'default',
  buttonHeight,
  buttonStyle,
  buttonTitle,
  buttonTitleIcon,
  buttonWidth,
  children,
  disabled = false,
  elements,
  hasArrow = true,
  onChange,
  onOpenMenu,
  onSelect = defaultOnSelect,
  placement = 'bottom',
  popperStyle,
  rotateArrow = false,
  style,
  toggleType = 'options',
  width,
}) => {
  return (
    <>
      {disabled ? (
        <Styled.DisabledIconButton>
          <span className="buttonTitle">{buttonTitle}</span>
          <MdKeyboardArrowDown />
        </Styled.DisabledIconButton>
      ) : (
        <Downshift
          itemToString={itemToString}
          onChange={onChange}
          onSelect={onSelect}
        >
          {({
            getItemProps,
            getMenuProps,
            getToggleButtonProps,
            highlightedIndex,
            isOpen,
          }) => (
            <div>
              <Manager>
                <Reference>
                  {({ ref }) => (
                    <Styled.Toggle
                      {...getToggleButtonProps()}
                      ref={ref}
                      tabIndex={0}
                    >
                      {toggleType === 'ellipsis' ? (
                        <Ellipsis />
                      ) : toggleType === 'options' ? (
                        <Styled.IconContainer>
                          <Styled.Icon>
                            <Options diameter={34} />
                          </Styled.Icon>
                          <Styled.IconLabel>Other</Styled.IconLabel>
                        </Styled.IconContainer>
                      ) : toggleType === 'elements' ? (
                        <>{elements}</>
                      ) : (
                        <Styled.IconButton
                          height={buttonHeight}
                          style={buttonStyle}
                          width={buttonWidth}
                          
                        >
                          {buttonTitleIcon ?? null}
                          <span className="buttonTitle">{buttonTitle}</span>
                          {hasArrow ? (
                            <MdKeyboardArrowDown
                              style={{
                                transform: `${
                                  rotateArrow
                                    ? isOpen
                                      ? 'rotate(180deg)'
                                      : 'rotate(0deg)'
                                    : 'unset'
                                }`,
                              }}
                            />
                          ) : null}
                        </Styled.IconButton>
                      )}
                    </Styled.Toggle>
                  )}
                </Reference>
                <Popper
                  placement={placement}
                >
                  {(popperProps) => (
                    <Styled.Popper
                      data-placement={popperProps.placement}
                      ref={popperProps.ref}
                      style={
                        toggleType === 'ellipsis' ||
                        toggleType === 'options' ||
                        toggleType === 'elements'
                          ? {
                              ...popperProps.style,
                              ...popperStyle,
                            }
                          : {
                              minWidth: '170px',
                              paddingTop: 0,
                              ...popperProps.style,
                              ...popperStyle,
                            }
                      }
                      width={width}
                    >
                      {isOpen && (
                        <Menu
                          {...getMenuProps({ refKey: 'innerRef' })}
                          style={
                            buttonWidth
                              ? { ...style, width: buttonWidth }
                              : style
                          }
                          onOpenMenu={onOpenMenu}
                        >
                          {React.Children.map(
                            children,
                            (child, index) =>
                              child &&
                              React.cloneElement(
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                child as any,
                                {
                                  ...getItemProps({ index, item: child }),
                                  className: classNames({
                                    highlighted: highlightedIndex === index,
                                  }),
                                },
                              ),
                          )}
                        </Menu>
                      )}
                      {(toggleType === 'ellipsis' ||
                        toggleType === 'options' ||
                        toggleType === 'elements') && (
                        <Styled.Arrow
                          className={classNames({ isOpen })}
                          ref={popperProps.arrowProps.ref}
                          style={
                            arrowType === 'default'
                              ? {
                                  ...popperProps.arrowProps.style,
                                  ...arrowStyle,
                                }
                              : {
                                  ...popperProps.arrowProps.style,
                                  top: '10px',
                                  ...arrowStyle,
                                }
                          }
                        />
                      )}
                    </Styled.Popper>
                  )}
                </Popper>
              </Manager>
            </div>
          )}
        </Downshift>
      )}
    </>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
