export default async function serviceCounter(context: any) {
  // console.log("serviceCounter:context", context);

  const output = (context.data ?? 1) + 1;
  // console.log("serviceCounter:output", output);

  await new Promise((resolve) => setTimeout(resolve, 2));
  // some important business that take 8 seconds or more
  // await new Promise((resolve) =>
  //   setTimeout(resolve, Math.random() * 8000 + 2000)
  // );

  return output;
}
