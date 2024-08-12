/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const stack = []
  const paths = path.split('/')
  for (let p of paths) {
    if (p === '' || p === '.') {
      continue
    } else if (p === '..') {
      stack.length && stack.pop()
    } else {
      stack.push(p)
    }
  }
  return '/' + stack.join('/')
};

console.log(simplifyPath("/.../a/../b/c/../d/./"))