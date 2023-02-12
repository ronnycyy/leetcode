class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  // 头为空，不用交换子树，直接返回 root
  if (!root) {
    return root;
  }

  // 左右子树都为空，不用交换子树，直接返回 root
  if (!root.left && !root.right) {
    return root;
  }

  // 1. 来到左子树
  // 左子树`递`进去直到叶子结点，返回叶子头，再到叶子父结点交换左右子树，返回叶子父..
  // 最后返回`整棵左子树交换完毕`的头
  const left = invertTree(root.left);

  // 2. 从左子树回到父结点

  // 3. 从父结点进入右子树
  // 左子树交换完毕，交换右子树
  const right = invertTree(root.right);

  // 4. 从右子树回到父结点
  // 左右子树各自内部的结点交换完毕，头结点的两棵子树开始交换
  root.left = right;
  root.right = left;

  // root这棵树交换完毕，返回头给root的父级使用。
  return root;
};