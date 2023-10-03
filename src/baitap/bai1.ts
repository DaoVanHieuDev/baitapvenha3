 export function threeSumClosest(nums: number[], target: number): { sum: number, nums: number[] } | null {
    if (nums.length < 3) {
        return null; // Không thể tìm được bộ 3 số nếu mảng có ít hơn 3 phần tử
    }

    nums.sort((a, b) => a - b); // Sắp xếp mảng theo thứ tự tăng dần

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return { sum: closestSum, nums: [nums[0], nums[1], nums[2]] };
}

// Kiểm tra với ví dụ
const result = threeSumClosest([-1, 2, 1, -4], 1);
console.log(result); // { sum: 2, nums: [-1, 1, 2] }