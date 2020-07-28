const generateLineBreak = (string) => {
  if (string.trim().length === 0) {
    return string;
  }
  const new_string = string.replace(
    "\n",
    `x
  `
  );
  console.log(new_string);
  return new_string;
};
generateLineBreak("1\n2\n3");
