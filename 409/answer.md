# 思路

假设回文串叫`p`，原始字符串叫`s`。


## 偶数字符

只要是`s`中出现了`偶数次`的字符，都可以全部拿到`p`中，因为以`p的中心点`为`中心`，把这些`偶数字符`在两边等量分布，即可形成`回文`。

如: 
```
abbaaacccc 形成最长回文串可以是 aaccbbccaa
aaaaaaccbb 形成最长回文串可以是 aaacbbcaaa
```

## 奇数字符

对于 `奇数字符`，把它`减1`就能得到该字符最大的`偶数次数`，那么就跟 [偶数字符](##偶数字符) 一个逻辑了，累加上即可。

最后，如果出现过`奇数字符`，可以在剩余的`奇数字符`任意选择 `1` 个放在 `p` 的正中间，这不会影响两边已经布好的`回文字符`，但是注意只能选 `1` 个奇数字符，但凡多 `1` 个都会找不到字符和它匹配。 

如:

```
aaabbcc 形成最长回文串可以是 bcaaacb
aabccde 形成最长回文串可以是 acbca
```

# 计算方法

所以，总结起来的`字符`计算方法就是:

```
偶数次字符个数 + (每种奇数次字符个数-1) * (奇数字符种类) + (出现过奇数字符 ? 1 : 0)
```
