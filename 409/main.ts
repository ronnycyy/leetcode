function longestPalindrome(s: string): number {
  // 统计词频
  const map = new Map<string, number>();

  for (let i = 0, len = s.length; i < len; i++) {
    const count = map.get(s[i]);
    map.set(s[i], count ? (count + 1) : 1);
  }

  // 遍历词频表:
  // 1. 偶数词频，直接累加上
  // 2. 奇数词频，减1后累加上
  // 3. 如果出现了奇数，最后累加1
  let showOdd = false;
  let maxLen = 0;
  for (let [_, value] of map) {
    if (value % 2 === 0) {
      maxLen += value;
    }
    else {
      showOdd = true;
      maxLen += (value - 1);
    }
  }

  if (showOdd) {
    maxLen += 1;
  }

  return maxLen;
};
