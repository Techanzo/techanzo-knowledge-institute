import { Children, ComponentPropsWithoutRef, ElementType, forwardRef, ReactNode, Ref } from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'unset'
  | 'inherit';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'unset' | 'inherit';
type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap' | 'unset' | 'inherit';

export interface StackProps<C extends ElementType<any>> {
  /**
   * renders specified component
   * @default 'div'
   */
  component?: C;
  /**
   * changes value of flex-direction
   * @default 'column'
   */
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  /** @default 'stretch' */
  justifyContent?: JustifyContent;
  /** @default 'stretch' */
  alignItems?: AlignItems;
  /** @default 0 */
  gap?: string | number;
  /** @default 'nowrap' */
  flexWrap?: FlexWrap;
  /**
   * separator between two child
   */
  divider?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSStyleRule;
}

type Props<C extends ElementType<any>> = StackProps<C> & ComponentPropsWithoutRef<C>;

const Stack = <C extends ElementType<any>>(
  {
    component,
    direction = 'column',
    justifyContent = 'stretch',
    alignItems = 'stretch',
    gap = 0,
    flexWrap,
    divider,
    children,
    className,
    style,
    ...props
  }: Props<C>,
  ref: Ref<HTMLDivElement>
) => {
  const Component = component || 'div';
  return (
    <Component
      {...props}
      ref={ref}
      className={clsx(styles.root, className, {
        [styles.column]: direction === 'column',
        [styles.row]: direction === 'row',
        [styles.columnReverse]: direction === 'column-reverse',
        [styles.rowReverse]: direction === 'row-reverse',
        [styles.justifyContentFlexStart]: justifyContent === 'flex-start',
        [styles.justifyContentFlexEnd]: justifyContent === 'flex-end',
        [styles.justifyContentCenter]: justifyContent === 'center',
        [styles.justifyContentStretch]: justifyContent === 'stretch',
        [styles.justifyContentSpaceAround]: justifyContent === 'space-around',
        [styles.justifyContentSpaceBetween]: justifyContent === 'space-between',
        [styles.justifyContentSpaceEvenly]: justifyContent === 'space-evenly',
        [styles.justifyContentUnset]: justifyContent === 'unset',
        [styles.justifyContentInherit]: justifyContent === 'inherit',
        [styles.alignItemsFlexStart]: alignItems === 'flex-start',
        [styles.alignItemsFlexEnd]: alignItems === 'flex-end',
        [styles.alignItemsCenter]: alignItems === 'center',
        [styles.alignItemsStretch]: alignItems === 'stretch',
        [styles.alignItemsBaseline]: alignItems === 'baseline',
        [styles.alignItemsUnset]: alignItems === 'unset',
        [styles.alignItemsInherit]: alignItems === 'inherit',
        [styles.flexWrapWrap]: flexWrap === 'wrap',
        [styles.flexWrapWrapReverse]: flexWrap === 'wrap-reverse',
        [styles.flexWrapNoWrap]: flexWrap === 'nowrap',
        [styles.flexWrapUnset]: flexWrap === 'unset',
        [styles.flexWrapInherit]: flexWrap === 'inherit',
      })}
      style={{ gap, ...style }}
    >
      {divider
        ? Children.toArray(children).reduce((acc, child, index, self) => {
            if (!Array.isArray(acc)) return [];

            acc.push(child);

            if (index < self.length - 1) {
              acc.push(divider);
            }

            return acc;
          }, [])
        : children}
    </Component>
  );
};

export default forwardRef(Stack) as <C extends ElementType<any>>(
  props: Props<C> & { ref?: Ref<HTMLDivElement> }
) => JSX.Element;
