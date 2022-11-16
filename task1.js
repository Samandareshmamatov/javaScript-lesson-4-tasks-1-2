let str = "aS12 @dv s459*+2cskm8ki1j";
let total = 0;
for (let i = 0; i < str.length; i++) {
    Number(str[i]);
    if (Number(str[i]) % 1 == 0) {
        total += Number(str[i]);
    } else {
        total += 0;
    }
}
console.log(total);