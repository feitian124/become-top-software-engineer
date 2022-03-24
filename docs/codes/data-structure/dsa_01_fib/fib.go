package dsa01

// 普通递归 O(2^n)
func fib1(n int) int {
	if n <= 1 {
		return n
	}
	return fib1(n-1) + fib1(n-2)
}

// 记忆法递归,自顶向下 O(n)
func fib2(n int) int {
	cache := map[int]int{0: 0, 1: 1}
	if n <= 1 {
		return n
	}
	return calc(n, cache)
}
func calc(n int, cache map[int]int) int {
	if _, ok := cache[n]; ok {
		return cache[n]
	}
	cache[n] = calc(n-1, cache) + calc(n-2, cache)
	return calc(n, cache)
}

// 动态规划，自底向上 O(n), 空间占用更优秀
func fib3(n int) int {
	if n <= 1 {
		return n
	}
	prev1, prev2, current := 0, 1, 1
	for i := 2; i <= n; i++ {
		current = prev1 + prev2
		prev1 = prev2
		prev2 = current
	}
	return current
}
