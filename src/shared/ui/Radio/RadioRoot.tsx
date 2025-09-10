import { useState } from 'react';

import { RadioGroupContext } from './Radio.context';

export type InputValue = React.InputHTMLAttributes<HTMLInputElement>['value'];

type Props = {
  /**
   * content of the Radio, typically RadioItem components.
   */
  children: React.ReactNode;
  /**
   * value of the Radio.
   */
  value?: InputValue;
  /**
   * defaultValue of the Radio.
   */
  defaultValue?: InputValue;
  /**
   * callback function when value is changed.
   */
  onValueChange?: (value: InputValue) => void;
  /**
   * disabled state of the Radio.
   */
  disabled?: boolean;
  /**
   * additional className.
   */
  className?: string;
  /**
   * size of the radio button.
   * @default 'md'
   */
  size?: 'md' | 'lg';
};

export function RadioRoot({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  disabled,
  className,
  size = 'md',
}: Props) {
  const [uncontrolledValue, setUncontrolledValue] = useState<InputValue>(defaultValue);

  const value = controlledValue ?? uncontrolledValue;

  const handleChange = (val: InputValue) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(val);
    }
    onValueChange?.(val);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onChange: handleChange, disabled, size }}>
      <div className={className}>{children}</div>
    </RadioGroupContext.Provider>
  );
}
