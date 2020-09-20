// api testing
module.exports = (req: any, res: any) => {
  const {
    query: { name }
  } = req

  res.send(`Hello ${name}!`)
}
