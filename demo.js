 var x =10;
 let y =10;
 const z = 10;
    console.log(x, y, z); // In ra giá trị của x, y, z
    let numbers = [1, 2, 3, 4, 5];

    function printNumbers(a,b,c){
        console.log(a, b, c); // In ra các giá trị a, b, c
    } 
    printNumbers(...numbers); // Sử dụng toán tử spread để truyền các phần tử của mảng numbers vào hàm printNumbers

    let numberClone = [...numbers]; // Tạo một bản sao của mảng numbers
    numberClone[0] = 10; // Thay đổi giá trị đầu tiên của mảng bản sao
    console.log(numbers, numberClone); // In ra mảng numbers và mảng bản sao numberClone
    function countDown(...n) {
            console.log(n); // In ra giá trị i từ n đến 0
    }
    countDown(5, 4, 3, 2, 1, 0); // Gọi hàm countDown với các giá trị từ 5 đến 0

    //destructuring assignment
    let student = { id:1, name: 'Duc Anh', age: 20 };
    let studentId = student.id;
    let studentName = student.name;
    let studentAge = student.age; // Lấy các thuộc tính của đối tượng student
    let {id, name, age} = student; // Sử dụng destructuring để lấy các thuộc tính của đối tượng student
    //export 
    let result =10;
    console.log(result); // In ra giá trị của biến result từ file demo.js
    export { result }; // Xuất biến result để có thể sử dụng ở các file khác
    import { result } from './demo.js'; // Nhập biến result từ file demo.js
