package dsa01

// 普通递归 O(2^n)
func lcs(n int) int {
	if n <= 1 {
		return n
	}
	return fib1(n-1) + fib1(n-2)
}
