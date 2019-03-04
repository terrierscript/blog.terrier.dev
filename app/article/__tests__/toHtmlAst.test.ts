
const remark = require('remark')
const visit = require('unist-util-visit')

const tree = remark().parse('Some _emphasis_, **importance**, and `code`.')
console.log(tree)

it("ast", () => {
  visit(tree, 'text', visitor)
  
  function visitor(node) {
    console.log(node)
  }

})
