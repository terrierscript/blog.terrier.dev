const inquirer = require("inquirer")
const dashify = require("dashify")
const { DateTime } = require("luxon")
const grayMatter = require("gray-matter")
const fs = require("fs")
const exec = require("child_process").exec

const now = DateTime.local()

const convert = ({ title, slug, tags }) => {
  const timestamp = now.toFormat("yyyyMMdd000000")
  const dir = "contents/pages/blog"
  const filename = `${dir}/${timestamp}-${slug}.md`
  const matter = grayMatter.stringify("", {
    templateKey: "blog-post",
    title,
    date: now.toUTC().toISO(),
    tags: tags.split(" ")
  })
  return {
    filename,
    matter
  }
}
inquirer
  .prompt([
    {
      name: "title"
    },
    {
      name: "slug",
      default: ({ title }) => dashify(title, { condense: true })
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
