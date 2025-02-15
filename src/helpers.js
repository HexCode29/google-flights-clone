export const customStyles = {
    control: (base) => ({
      ...base,
      padding: '2px 4px 3px 4px',
      display: 'flex',
      alignItems: 'center',
      height: '42px !important',
      minHeight: '42px !important'
    }),
  
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: 'none',
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '14px',
  
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500 !important',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500 !important',
    }),
    input: (provided) => ({
      ...provided,
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500 !important',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500 !important',
    }),
  };