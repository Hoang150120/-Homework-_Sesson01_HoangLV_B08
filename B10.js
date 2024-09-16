let a = 6;
let result = ++a + a + a++ + ++a + a;

console.log(a);
console.log(result);

//khi thực hiện chương trình ta được kết quả :
//a=9 , result=39
//sự khác nhau giữa a++ và ++a là:
//a++ được tăng thêm một đơn vị sau khi biểu thức kết thúc
//++a được tăng thêm một đơn vị trong biểu thức