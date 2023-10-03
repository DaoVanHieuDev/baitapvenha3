export function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];

    while (matrix.length > 0) {
        // Lấy hàng đầu tiên
        result.push(...matrix.shift() || []);

        // Lấy cột cuối cùng của mỗi hàng còn lại
        for (const row of matrix) {
            const val = row.pop();
            if (val !== undefined) {
                result.push(val);
            }
        }

        // Lấy hàng cuối cùng, nếu còn
        result.push(...(matrix.pop() || []).reverse());

        // Lấy cột đầu tiên của mỗi hàng còn lại
        for (let i = matrix.length - 1; i >= 0; i--) {
            const val = matrix[i].shift();
            if (val !== undefined) {
                result.push(val);
            }
        }
    }

    return result;
}

// Kiểm tra với ví dụ
const result = spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
console.log(result); // [1,2,3,6,9,8,7,4,5]