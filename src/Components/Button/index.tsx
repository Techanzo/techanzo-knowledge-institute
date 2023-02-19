import { ComponentPropsWithoutRef, ElementType, MouseEvent, ReactNode, Ref } from 'react';

export interface ButtonProps<C extends ElementType<any>> {
  /**
   * renders specified component
   * @default 'button'
   */
  component?: C;
  /**
   * shape of the button
   * @default 'rectangular'
   */
  shape?: 'rectangular' | 'circular';
  /**
   * defines default look of the button
   * `contained` - Button having background
   * `outlined` - Button having border with transparent background
   * `text` - Button that looks like text
   * @default 'text'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * color of the button
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'inherit';
  /**
   * predefined size of the button
   * @default 'medium'
   */
  size?: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  /**
   * align button on left edge or right edge with other content
   */
  edge?: 'start' | 'end';
  /**
   * Icon to display on left of the content
   */
  startIcon?: ReactNode;
  /**
   * Icon to display on right of the content
   */
  endIcon?: ReactNode;
  /**
   * When isLoading is true,
   * button will be disabled
   * and an overlay with loader will appear on button
   * @default false
   */
  isLoading?: boolean;
  /**
   * If a promise is returned then
   * button will be disabled
   * and an overlay with loader will appear on button
   * until the promise is resolved or rejected
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<any>;
  /**
   * disables the button when `true`
   * @default false
   */
  disabled?: boolean;
  /** content of the button */
  children: ReactNode;
  classes?: Partial<Record<'root', string>>;
  className?: string;
}

type Props<C extends ElementType<any>> = ButtonProps<C> & ComponentPropsWithoutRef<C>;

const Button = <C extends ElementType<any>>(
  {
    component,
    shape,
    variant,
    color,
    size,
    edge,
    startIcon,
    endIcon,
    isLoading,
    onClick,
    disabled,
    children,
    classes,
    className,
  }: Props<C>,
  ref: Ref<HTMLButtonElement>
) => {
  const Component = component || 'button';
  // TODO: implement it
  return <div>Button</div>;
};

export default Button;
