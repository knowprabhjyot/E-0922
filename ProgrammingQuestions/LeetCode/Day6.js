// https://leetcode.com/problems/roman-to-integer/


var romanToInt = function(s) {
    let number = {
     'I': 1,
     'V': 5,
     'X': 10,
     'L': 50,
     'C': 100,
     'D': 500,
     'M': 1000
    };
    
    let subNum = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    
        let output = 0;
        for (let i = 0 ; i < s.length; i++) {
            
        if (subNum[s[i] + s[i+1]]) {
            output+= subNum[s[i] + s[i+1]];
            i++;
        } else {
            output += number[s[i]];
        }
        }
            
    return output;
    
};
