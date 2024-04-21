import Select from 'react-select';
import { useMemo } from 'react';

export function Dropdown(props: any) {
  const colourStyles = useMemo(() => {
    return {
      placeholder: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          color: '#333333',
        };
      },
      control: (styles: any) => ({
        ...styles,
        backgroundColor: '#ff9a3c',
        borderColor: '#333',
      }),
      menuList: (styles: any) => ({
        ...styles,
        background: '#ff9a3c',
      }),
      option: (styles: any, { isFocused, isSelected }: any) => ({
        ...styles,
        background: '#ff9a3c',
        // background: isFocused
        //   ? 'hsla(291, 64%, 42%, 0.5)'
        //   : isSelected
        //   ? 'hsla(291, 64%, 42%, 1)'
        //   : undefined,
        // zIndex: 1,
      }),
      menu: (base: any) => ({
        ...base,
        // zIndex: 100,
        background: '#ff9a3c',
      }),
    };
  }, []);

  return <Select {...props} styles={colourStyles} />;
}
