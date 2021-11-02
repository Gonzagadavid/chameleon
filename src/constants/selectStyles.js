export const selectLanguages = {
  menu: (base) => ({
    ...base,
    width: '150px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    position: 'absolute',
    margin: '0',
  }),

  menuList: (base) => ({
    ...base,

    '::-webkit-scrollbar': {
      width: '12px',
    },
    '::-webkit-scrollbar-track': {
      background: 'black',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'white',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: 'white',
  }),

  control: (_, { selectProps: { width } }) => ({
    width,
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: 'solid 1px white',
    height: '80%',
  }),

  option: (base) => ({
    ...base,
    ':hover': {
      background: 'linear-gradient(to right,transparent, white, transparent)',
      color: 'black',
    },
    WebkitUserSelect: { backgroundColor: 'black' },
    background: 'rgba(0, 0, 0, 0.6)',
  }),

  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...base,
      opacity,
      transition,
      color: 'white ',
      background: 'transparent',
      width: '20px',
      textAlign: 'center',
    };
  },
};

export const selectFavorites = {
  menu: (base) => ({
    ...base,
    width: '300px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    position: 'absolute',
    margin: '0',
  }),

  menuList: (base) => ({
    ...base,
    maxHeight: '180px',
    '::-webkit-scrollbar': {
      width: '12px',
    },
    '::-webkit-scrollbar-track': {
      background: 'black',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'white',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: 'white',
  }),

  indicatorsContainer: (base) => ({
    ...base,
    cursor: 'pointer',
  }),

  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),

  control: (_, { selectProps: { width } }) => ({
    width,
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: 'solid 1px white',
    height: '40px',
  }),

  option: (base) => ({
    ...base,
    ':hover': {
      background: 'linear-gradient(to right,transparent, white, transparent)',
      color: 'black',
    },
    cursor: 'pointer',
    WebkitUserSelect: { backgroundColor: 'black' },
    background: 'rgba(0, 0, 0, 0.6)',
    fontSize: '20px',
  }),

  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...base,
      opacity,
      transition,
      display: 'none',
    };
  },
};
