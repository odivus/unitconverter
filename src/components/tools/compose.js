const compose = (...funcs) => (value) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), value
  );
}

export default compose;