const inquirer = require("inquirer")
const dashify = require("dashify")
const { DateTime } = require("luxon")
const grayMatter = require("gray-matter")
const fs = require("fs")
const exec = require("child_process").exec

const now = DateTime.local()

const convert = ({ title, slug, tags }) => {
  const timestamp = now.toFormat("yyyyMMddHHmmss")
  const year = now.toFormat("yyyy")
  const dir = `contents/pages/blog/${year}`
  const filename = `${dir}/${timestamp}-${slug}.md`
  const matter = grayMatter.stringify("", {
    templateKey: "blog-post",
    title,
    date: now.toUTC().toISO(),
    tags: tags
      .replace(/ /g, ",")
      .split(",")
      .map(i => i.toLowerCase())
      .filter(i => !!i),
    published: false
  })
  return {
    filename,
    matter
  }
}

const main = () => {
  const defaultTitle = process.argv[2]
  inquirer
    .prompt([
      {
        name: "title",
        default: defaultTitle
      },
      {
        name: "slug",
        default: ({ title }) =>
          dashify(title.replace(/_/g, "-"), { condense: true })
      },
      {
        name: "tags"
      },
      {
        type: "confirm",
        name: "confirm",
        default: "Y",
        message: answer => {
          const { filename, matter } = convert(answer)
          return [
            "",
            `Filename: ${filename}`,
            "Matter:",
            `${matter}`,
            "OK?"
          ].join("\n")
        }
      }
    ])
    .then(answer => {
      const { filename, matter } = convert(answer)
      fs.writeFileSync(filename, matter)
      exec(`code ${filename}`)
    })
}
main()
