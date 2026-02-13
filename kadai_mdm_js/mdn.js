//現在の日時を取得する
const today= new Date();

// 年の取得
const year = today.getFullYear(); 

// 月の取得、月は0から始まるため+1する
const month = today.getMonth() + 1; 

// 日付（日）の取得
const day = today.getDate(); 

//現在の日時を出力する
console.log(year + '年' + month + '月' + day + '日');
  