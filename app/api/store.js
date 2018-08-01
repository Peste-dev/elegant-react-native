export default new Promise(async $export => {
  const module = await (
    await import('../store')
  ).default;
  $export(module);
})
