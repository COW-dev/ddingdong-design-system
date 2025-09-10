import { createContext } from 'react';

import { InputValue } from './RadioRoot';

type RadioGroupContextType = {
  value: InputValue;
  onChange: (value?: InputValue) => void;
  disabled?: boolean;
};

export const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);
