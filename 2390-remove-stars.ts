export function removeStars(s: string): string {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    s[i] === "*" ? arr.pop() : arr.push(s[i]);
  }
  return arr.join("");
}

// console.log(removeStars("leet**cod*e"));
// console.log(removeStars("erase*****"));
