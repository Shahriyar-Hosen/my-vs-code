function fnName(params: string) {
  const varOne = "value";
  const varTwo = params;
  const varThree = 11;

  console.log({ varOne, varTwo, varThree });
}

// comment
const fullName = (first: string, second: string) => {
  return first + second;
};

fullName("a", "b");
