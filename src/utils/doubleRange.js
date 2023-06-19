export const setMaxLimitValue = (e, value, setValue) => {
  +e.target.value <= value.min
    ? setValue({...value})
    : setValue({...value, max: +e.target.value});
};

export const setMinLimitValue = (e, value, setValue) => {
  +e.target.value >= value.max
    ? setValue({...value})
    : setValue({...value, min: +e.target.value});
};
