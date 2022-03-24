package dsa01

import (
	"github.com/stretchr/testify/require"
	"testing"
)

var nums = []int{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144}

func Test_fib1(t *testing.T) {
	for i := 0; i < len(nums); i++ {
		require.Equal(t, fib1(i), nums[i])
	}
}

func Test_fib2(t *testing.T) {
	for i := 0; i < len(nums); i++ {
		require.Equal(t, fib2(i), nums[i])
	}
}

func Test_fib3(t *testing.T) {
	for i := 0; i < len(nums); i++ {
		require.Equal(t, fib3(i), nums[i])
	}
}
