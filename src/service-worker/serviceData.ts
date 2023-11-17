export default async function serviceData(context: any) {
  // console.log("serviceData:context", context);

  const output = Date.now();
  // console.log("serviceData:output", output);

  await new Promise((resolve) => setTimeout(resolve, 16));
  // some important business that take 8 seconds or more
  // await new Promise((resolve) =>
  //   setTimeout(resolve, Math.random() * 8000 + 2000)
  // );

  return output;
}
