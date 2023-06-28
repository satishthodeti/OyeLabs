const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const asyncAwaitFn = async (firstName) => {
  await timeout(1000);
  if (!firstName) throw new Error("This came after 2 seoncds of time intervel");
  const fullName = `${firstName} Thodeti`;
  return fullName;
};
const res = (async () => {
  try {
    console.log(await asyncAwaitFn("Satish"));
  } catch (e) {
    console.log(e);
  }
  try {
    console.log(await asyncAwaitFn());
  } catch (e) {
    console.log(e);
  }
})();
