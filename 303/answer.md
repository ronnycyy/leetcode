# 思路

最容易想到的是每次通过遍历累加 `left...right` 的 `nums元素` 来求结果，但是这样时间复杂度达到了 `O(N)`，其实有更好的做法。

我们可以采用`预处理数组`的方式来做，根据 `nums` 来构建一个`前缀和数组`，每次查询只需要从`前缀和数组` 里查询 `2` 个点即可，这只需要 `O(1)` 的时间复杂度。

# 具体的做法

声明一个 `nums` 的前缀和数组 `sums`，`sums[i]` 的值等于 `nums[0]+nums[1]+...+nums[i]`，那么:

1. 当 `i === 0` 时， `sums[0] = nums[0]`。
2. 当 `i > 0` 时， `sum[i] = sum[i-1] + nums[i]`。

我们要计算的是 `nums[left] + nums[left+1] + nums[left+2] + ... + nums[right]` 的和，那么:

1. 当 `left === 0` 时，就是 `nums[0]+nums[1]+...+nums[right]`，也就是 `sums[right]` 的值。
2. 当 `left > 0` 时，等同于:

```ts
(nums[0] + nums[1] + ... + nums[right]) - (nums[0] + nums[1] + ... + nums[left-1])
```

也就是:

```ts
sums[right] - sums[left-1]
```

于是，最终代码如下:

```ts
class NumArray {

  private _sums: number[];

  constructor(nums: number[]) {

    this._sums = Array(nums.length).fill(0);

    for (let i = 0, len = nums.length; i < len; i++) {
      this._sums[i] = i > 0 ? (this._sums[i - 1] + nums[i]) : nums[0];
    }
  }

  sumRange(left: number, right: number): number {
    return left > 0 ? (this._sums[right] - this._sums[left - 1]) : this._sums[right];
  }
}
```