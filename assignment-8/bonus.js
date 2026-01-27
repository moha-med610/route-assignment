var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];

    if (i + 1 < s.length) {
      const next = values[s[i + 1]];

      if (current < next) {
        result -= current;
      } else {
        result += current;
      }
    } else {
      result += current;
    }
  }

  return result;
};
