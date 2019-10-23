export const getVersion = () => {
  return process.env.NOW_GITHUB_COMMIT_SHA || ""
}
export const logVersion = () => {
  console.log(`Version: ${getVersion()}`)
}
