var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var symbol = `!@#$%^&*(),.<>/';:"][{}\|?`
var number = "1234567890"

function password(pass) {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0
    if (pass.length > 6) {
        for (var i = 0; i < pass.length; i++) {
            if (upper.includes(pass[i])) {
                count1++
            }
        }
        for (var t = 0; t < pass.length; t++) {
            if (lower.includes(pass[t])) {
                count2++
            }
        }
        for (var w = 0; w < pass.length; w++) {
            if (symbol.includes(pass[w])) {
                count3++
            }
        }
        for (var j = 0; j < pass.length; j++) {
            if (number.includes(pass[j])) {
                count4++
            }
        }

        if (count1 == 0) {
            return "Invalid Password. Uppercase missing"
        } else if (count2 == 0) {
            return "Invalid Password. Lowercase missing"
        } else if (count3 == 0) {
            return "Invalid Password. Symbol missing"
        }else if (count4 == 0) {
            return "Invalid Password. Number missing"
        } else {
            return "Valid Password"
        }
        
    }
    else{
        return "Small password"
    }
}

module.exports = {
    password
}