import { createContext } from 'react';

import { InputValue } from './RadioRoot';

type RadioGroupContextType = {
  value: InputValue;
  onChange: (value?: InputValue) => void;
  disabled?: boolean;
  size: 'md' | 'lg';
};

export const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);
