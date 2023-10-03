export function findLength(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;
    
    // Tạo mảng 2 chiều để lưu độ dài của mảng con chung kết thúc tại vị trí i, j
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    let maxLength = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                // Nếu hai phần tử giống nhau, tăng độ dài của mảng con chung
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dp[i][j]);
            }
        }
    }

    return maxLength;
}

// Kiểm tra với ví dụ
const result = findLength([1,2,3,2,1], [3,2,1,4,7]);
console.log(result); // 3
