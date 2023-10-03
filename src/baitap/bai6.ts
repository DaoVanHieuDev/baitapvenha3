export function reverseWords(s: string): string {
    // Tách chuỗi thành các từ và lưu vào mảng
    const words: string[] = s.split(/\s+/);

    // Đảo ngược thứ tự của các từ trong mảng
    const reversedWords: string[] = words.reverse();

    // Nối các từ đã đảo ngược và chia cách bởi một khoảng trắng
    const result: string = reversedWords.join(' ');

    return result;
}

// Kiểm tra với ví dụ
const result = reverseWords("hello world");
console.log(result); // "world hello"
