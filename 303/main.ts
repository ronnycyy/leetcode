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

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/
