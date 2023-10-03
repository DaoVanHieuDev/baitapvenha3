export function minSubArrayLen(nums: number[], target: number): number {
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (currentSum >= target) {
            // Tính độ dài mảng con và cập nhật độ dài nhỏ nhất nếu cần
            minLength = Math.min(minLength, end - start + 1);

            // Loại bỏ phần tử bắt đầu để thử độ dài ngắn hơn
            currentSum -= nums[start];
            start++;
        }
    }

    // Nếu không tìm thấy mảng con, trả về 0
    return minLength !== Infinity ? minLength : 0;
}

// Kiểm tra với ví dụ
const result = minSubArrayLen([2,3,1,2,4,3], 7);
console.log(result); // 2
