export const logVersion = () => {
  const ver = process.env.NOW_GITHUB_COMMIT_SHA || ""
  console.log(`Version: ${ver}`)
}
