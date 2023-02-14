# 思路

首先设计一个函数`f`，它的功能是接收一个数字`n`，分解出`n`每一位的数字。

然后主函数遍历数组，把每一个数字放到 `f` 里，把每个数字都分解出来。

## 函数f

现在开始设计函数`f`: 对于每一个数字`n`，整体的思路就是一个一个地从后面取出数字，直到所有的数字都被分解。

具体地:
1. 通过 `n % 10` 的方式`得到`最后一位数字
2. 通过 `n = n / 10` 的方式`去掉`最后一位数字


# 代码

```ts
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
```
