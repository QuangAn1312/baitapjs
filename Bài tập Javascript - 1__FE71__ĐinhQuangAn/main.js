
// function sum(n){
//     for (i=2 ;i<=n;i++) {
//         sum = sum + 2*n;
//     }
//     console.log(sum);
// }
// sum(9);


// 
// var players = [ [], [], [], [] ];
// var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
// "AS", "7H", "9K", "10D"];

// function ex8() {
//     var player1 = players[0];

// }
// console.log()
// 



// Bài tập cấu trúc dữ liệu 

// var n = prompt("nhập vào n :");
// var m = prompt("nhập vào m :");
// var k = prompt("nhập vào k :");
// var temp;
// function CTDL() {
//     if (n>m){
//         temp=n;
//         n=m;
//         m=temp;
//     }
    
//     if(n>k){
//         temp=n;
//         n=k;
//         k=temp;
//     }
    
    
//     if(m>n){
//         temp=m;
//         m=k;
//         k=temp;
//     }
  
// }

// console.log(CTDL());

// 




// bài số 7

// function Home7() {
// var a = prompt("nhập vào a :");
// var b = prompt("nhập vào b :");
// var c = prompt("nhập vào c :");
//     if (a<0 , b < 0, c <0 ) {
//         a = -a;
//         b= -b;
//         c= -c
//     }
// }
// Home7();

// 

// bài số 8
// function Home8(n) {
//     const a = n % 10;
//     const b = (n / 10) % 10;
//     const c = n  / 100;
//     if(n<100 || n > 999){
//        console.log("Nhập vào số có 3 chũ số nhé !")
//       } 
//       else {
//         switch(c){
//             case 1: console.log("Một trăm ");
//             break;
//             case 2: console.log("Hai trăm ");
//             break;
//             case 3: console.log("Ba trăm ");
//             break;
//             case 4: console.log("Bốn trăm ");
//             break;
//             case 5: console.log("Năm trăm ");
//             break;
//             case 6: console.log("Sáu trăm ");
//             break;
//             case 7: console.log("Bảy trăm ");
//             break;
//             case 8: console.log("Tám trăm ");
//             break;
//             case 9: console.log("Chín trăm ");
//             break;
//           }
        
//           if(b % 10 == 0 && a != 0){
//             console.log("lẻ ");
//           }
          
//           switch(b){
//             case 1: console.log("mười ");
//             break;
//             case 2: console.log("hai mươi ");
//             break;
//             case 3: console.log("ba mươi ");
//             break;
//             case 4: console.log("bốn mươi ");
//             break;
//             case 5: console.log("năm mươi ");
//             break;
//             case 6: console.log("sáu mươi ");
//             break;
//             case 7: console.log("bảy mươi ");
//             break;
//             case 8: console.log("tám mươi ");
//             break;
//             case 9: console.log("chín mươi ");
//             break;
//           }
         
//           switch(a){
//             case 1: console.log("mốt ");
//             break;
//             case 2: console.log("hai ");
//             break;
//             case 3: console.log("ba ");
//             break;
//             case 4: console.log("bốn ");
//             break;
//             case 5: console.log("năm ");
//             break;
//             case 6: console.log("sáu ");
//             break;
//             case 7: console.log("bảy ");
//             break;
//             case 8: console.log("tám ");
//             break;
//             case 9: console.log("chín ");
//             break;
//           }
//       }
// }
// Home8(102);

// bài số 4 
// let n= prompt("Nhap so nguyen n = ");
// let m= prompt("Nhap so nguyen m = ");
// let k= prompt("Nhap so nguyen k = ");
// let check = Home4(n,m,k);
// function Home4(n,m,k) {
//     let flag =1 ;
//     switch (n % 2==0 ) {
//       case 0: flag = 0 ;
//       if( check == 0 ) console.log(n + " la so chan");
//     else console.log(n + " la so le");
//     break;
//     }
//     switch (m % 2==0 ) {
//         case 1: flag = 0 ;
//         if( check == 0 ) console.log(m + " la so chan");
//     else console.log(m + " la so le");
//     break;
//     }
//     switch (k % 2==0 ) {
//         case 2: flag = 0 ;
//         if( check == 0 ) console.log(k + " la so chan");
//     else console.log(k + " la so le");
//     break;
//     }
//     return flag ;
// }                                                                                 

// 

// bài số 9
function Home9() {
    let a = prompt("nhâp vào cạnh a : ");
    let b = prompt("nhâp vào cạnh b : ");
    let c = prompt("nhâp vào cạnh c : ");
    if(a + b <= c || a + c <= b ||  b + c <= a)
	{
		console.log("Tam giac khong hop le. Xin kiem tra lai !");
	}
	else
	{
		console.log("Day la tam giac: ");
	    if((a == b) && (b == c))
		{
			console.log("Deu");
		}
		else
		{
			if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c)
			{
				console.log("Vuong");
			}
			if(a == b || a == c || b == c)
		    {
			    console.log("Can");
		    }
			else
			{
				console.log("Thuong");
			}
		}
}
}
Home9();

