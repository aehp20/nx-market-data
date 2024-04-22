import Select, { StylesConfig } from 'react-select';
import { useMemo } from 'react';

export function Dropdown(props: any) {
  const colorStyles: StylesConfig = useMemo(() => {
    return {
      placeholder: (base: any) => {
        return {
          ...base,
          color: '#333333',
        };
      },
      control: (base: any) => ({
        ...base,
        backgroundColor: '#ff9a3c',
        borderColor: '#333',
      }),
      menuList: (base: any) => ({
        ...base,
        background: '#ff9a3c',
      }),
      option: (
        base: any,
        { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
      ) => ({
        ...base,
        background: isFocused ? '#ffc93c' : isSelected ? '#ffc93c' : '#ff9a3c',
        color: '#333333',
        fontWeight: isFocused ? 'bold' : isSelected ? 'bold' : 'normal',
      }),
      menu: (base: any) => ({
        ...base,
        background: '#ff9a3c',
      }),
      indicatorSeparator: (base: any) => ({
        ...base,
        background: '#333333',
      }),
      dropdownIndicator: (base: any) => ({
        ...base,
        color: '#333333',
      }),
    };
  }, []);

  return <Select {...props} styles={colorStyles} />;
}
