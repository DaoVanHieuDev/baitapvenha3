// // Đối tượng User => Chỉ là một khuôn mẫu
// class User {
//   // Khai báo các property(thuộc tính của đối tượng)
//   // Từ khóa this dùng để trỏ đến đối tượng mà nó đang đứng
//   userId: number;
//   userName: string;
//   age?: number;
//   address?: string;

//   // Hàm tạo đối tượng
//   constructor(userId: number, userName: string, age: number, address: string) {
//     // Gán lại giá trị cho các thuộc tính của đối tượng user
//     this.userId = userId;
//     this.userName = userName;
//     this.age = age;
//     this.address = address;
//   }

//   getName(): string {
//     return this.userName;
//   }
// }

// // Khởi tạo đối tượng => sử dụng từ khóa new
// const anhNam = new User(1, "Phương Nam Kyoto", 18, "Hà Nội");
// const vinhDola = new User(2, "Vinh", 18, "Thanh Hóa");

// console.log(anhNam.getName());

// // Thiết kế một đối tượng Product gồm ccas trường: id, name, price, from và khởi tạo đối tượng

// class Person {
//     public id: number;
//     public name: string;
//     private age: number;
//     private address: string;
  
//     constructor(
//       personId: number,
//       personName: string,
//       age: number,
//       address: string
//     ) {
//       this.id = personId;
//       this.name = personName;
//       this.age = age;
//       this.address = address;
//     }
  
//     get getAge(): number {
//       return this.age;
//     }
  
//     set setAge(newAge: number) {
//       this.age = newAge;
//     }
  
//     run(): string {
//       return "running...";
//     }
//   }
  
//   class Student extends Person {
//     className: string;
//     score: number;
  
//     constructor(
//       personId: number,
//       personName: string,
//       age: number,
//       address: string,
//       className: string,
//       score: number
//     ) {
//       super(personId, personName, age, address);
//       this.className = className;
//       this.score = score;
//     }
  
//     learn(): string {
//       return "learning...";
//     }
//   }
  
//   class Employee extends Person {
//     department: string;
//     salary: number;
  
//     constructor(
//       personId: number,
//       personName: string,
//       age: number,
//       address: string,
//       department: string,
//       salary: number
//     ) {
//       super(personId, personName, age, address);
//       this.department = department;
//       this.salary = salary;
//     }
//   }
  
//   const student1 = new Student(1, "Maria", 21, "Japan", "Class01", 10);
//   console.log("Tuổi cũ: ", student1.getAge);
//   student1.setAge = 25;
//   console.log("Tuổi mới", student1.getAge);
  
//   const employee = new Employee(
//     1,
//     "Maria",
//     21,
//     "Japan",
//     "Phòng kế toán",
//     10000000
//   );
  
//   console.log(student1);
//   console.log(employee);
  

import { threeSumClosest } from "./baitap/bai1";
// threeSumClosest
import { spiralOrder } from "./baitap/bai2";
// spiralOrder
import { lengthOfLongestSubstring } from "./baitap/bai3";
// lengthOfLongestSubstring
import { minSubArrayLen } from "./baitap/bai4";
// minSubArrayLen
import { findLength } from "./baitap/bai5";
// findLength
import { reverse } from "dns";
// reverse