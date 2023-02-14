function separateDigits(nums: number[]): number[] {

  const ans: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    resolve(nums[i], ans);
  }

  return ans;
};

// 10921 -> [1,0,9,2,1]
function resolve(n: number, ans: number[]): void {

  while (n > 0) {
    // 取出最后一位数字, 如 10921 -> 1
    // 从头插入，使得最终数字排列如同数字编写顺序: [1,0,9,2,1]
    ans.unshift(n % 10);
    // 去掉最后一位数字
    n = Math.floor(n / 10);
    // 一直重复，直到取完最后一个数字，这时 n 等于 0。
  }

}