const numerals = {
    1000: 'M',
    900: 'CM',
    800: 'DCCC',
    700: 'DCC',
    600: 'DC',
    500: 'D',
    400: 'CD',
    300: 'CCC',
    200: 'CC',
    100: 'C',
    90: 'XC',
    80: 'LXXX',
    70: 'LXX',
    60: 'LX',
    50: 'L',
    40: 'XL',
    30: 'XXX',
    20: 'XX',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I'
};
const nums = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function convertToRoman(num) {
    let finalNumeral = '';
    let numArr = num.toString().split('');

    let idx = 0;
    for (let i = numArr.length; i > 0; i--) {
        if (i > 1) {
            for (let x = 0; x < i - 1; x++) {
                numArr[idx] += '0';
            }
        }
        idx++;
    }
    console.log(numArr);
    for(let i=0; i<nums.length; i++){
        if(+numArr[0] % nums[i] === 0){
            let times = +numArr.shift() / nums[i];
            if(times == 1){
                finalNumeral += numerals[+nums[i]]; 
            }else{
                for(let x=0; x < times; x++){
                    finalNumeral = "M"+finalNumeral;
                }
            }

        }
    }
    console.log(finalNumeral)
    return finalNumeral;
}

convertToRoman(649);