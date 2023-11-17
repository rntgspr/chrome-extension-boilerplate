export default async function mutationFn(message) {
  console.log("mutationFn", message);
  const data = message.variables.dex * 1.02;
  return { ...message, data };
}
