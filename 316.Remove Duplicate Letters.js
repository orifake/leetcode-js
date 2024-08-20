  /**
   * @param {string} s
   * @return {string}
   */
  const removeDuplicateLetters = function (s) {
    const stack = []
    const set = new Set()

    for (let i = 0; i < s.length; i++) {
      const char = s[i]

      if (!set.has(char)) {
        while (
          stack.length > 0 &&
          stack[stack.length - 1] > char &&
          s.indexOf(stack[stack.length - 1], i) > i
        ) {
          set.delete(stack.pop());
        }

        set.add(char);
        stack.push(char);
      }
    }

    return stack.join('')
  };

  console.log(removeDuplicateLetters("bcabc"))