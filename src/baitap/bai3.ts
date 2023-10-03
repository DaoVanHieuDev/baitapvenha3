export function lengthOfLongestSubstring(s: string): number {
    const charIndexMap: Map<string, number> = new Map();
    let maxLength = 0;
    let startIndex = 0;

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const currentChar = s[endIndex];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar)! >= startIndex) {
            // Nếu ký tự đã xuất hiện và nằm trong khoảng của chuỗi con hiện tại
            startIndex = charIndexMap.get(currentChar)! + 1;
        }

        charIndexMap.set(currentChar, endIndex);
        const currentLength = endIndex - startIndex + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Kiểm tra với ví dụ
const result = lengthOfLongestSubstring('pawlla');
console.log(result); // 4