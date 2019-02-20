const inquirer = require("inquirer")
const slugify = require("slugify")
const { DateTime } = require("luxon")
const matter = require("gray-matter")
const fs = require("fs")
const exec = require("child_process").exec

const now = DateTime.local()
inquirer
  .prompt([
    {
      name: "title"
    },
    {
      name: "slug",
      default: ans => slugify(ans.title)
    },
    {
      name: "tags"
    }
  ])
  .then(({ title, slug, tags }) => {
    const timestamp = now.toFormat("yyyyMMdd000000")
    const dir = "contents/pages/blog"
    const filename = `${dir}/${timestamp}-${slug}.mdx`
    const mt = matter.stringify("", {
      templateKey: "blog-post",
      title,
      date: now.toUTC().toISO(),
      tags: tags.split(" ")
    })
    fs.writeFileSync(filename, mt)
    exec(`code ${fileame}`)
  })
