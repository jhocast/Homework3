var main = function () {
    "use strict";

    window.alert("hello world!");

    var words = function (){
        var result = {
            "3": "fizz",
            "5": "buzz"
        };
        return result;
    }
    var fizzbuzz_1 = function(){
        var rWords = words();
        var numbers = new Array(100);
        var len = numbers.length,
            keys = Object.keys(rWords),
            keyLen = keys.length,
            resultArray = [],
            $new_comment,
            funcName = "fizzbuzz_1";
        $("body").append($("<section class='" + funcName + "'>").text(funcName));
        for (var i = 0; i < len; i++){
            var temp = "",
                found = false;
                numbers[i] = i + 1;
                console.log(numbers[i]);
            for (var x = 0; x < keyLen; x++){
                if (numbers[i] %parseInt(keys[x], 10)===0){
                    if(found){
                        temp += rWords[keys[x]];
                    } else {
                        temp = rWords[keys[x]];
                    }
                    found = true;
                } else {
                    if (x===0 && temp == "") {
                        temp += numbers[i];
                    }
                }
            }
            $new_comment = $("<p>").text(temp);
            $new_comment.hide();
            $("." + funcName).append($new_comment);
            $new_comment.fadeIn();
            resultArray[i] = temp;
        }
        return resultArray;
    };

    var fizzbuzz_2 = function(start, end){
        var rWords = words();
        var numbers = new Array(end - start);
        var len = numbers.length,
            keys = Object.keys(rWords),
            keyLen = keys.length,
            resultArray = [],
            $new_comment,
            funcName = "fizzbuzz_2";
        $("body").append($("<section class='" + funcName + "'>").text(funcName));
        for (var i = 0; i < len; i++){
            var temp = "",
                found = false;
                numbers[i] = i + start + 1;
                console.log(numbers[i]);
            for (var x = 0; x < keyLen; x++){
                if (numbers[i] %parseInt(keys[x], 10)===0){
                    if(found){
                        temp += rWords[keys[x]];
                    } else {
                        temp = rWords[keys[x]];
                    }
                    found = true;
                } else {
                    if (x===0 && temp == "") {
                        temp += numbers[i];
                    }
                }
            }
            $new_comment = $("<p>").text(temp);
            $new_comment.hide();
            $("." + funcName).append($new_comment);
            $new_comment.fadeIn();
            resultArray[i] = temp;
        }
        return resultArray;
    };

    var fizzbuzz_3 = function(arr){
        var rWords = words();
        var len = arr.length,
            keys = Object.keys(rWords),
            keyLen = keys.length,
            resultArray = [],
            $new_comment,
            funcName = "fizzbuzz_3";
        $("body").append($("<section class='" + funcName + "'>").text(funcName));
        
        for (var item of arr) {
            var temp = "",
                found = false;
                console.log(item);
            for (var x = 0; x < keyLen; x++){
                if (item %parseInt(keys[x], 10)===0){
                    if(found){
                        temp += rWords[keys[x]];
                    } else {
                        temp = rWords[keys[x]];
                    }
                    found = true;
                } else {
                    if (x===0 && temp == "") {
                        temp += item;
                    }
                }
            }
            $new_comment = $("<p>").text(temp);
            $new_comment.hide();
            //$(".comments").append($new_comment);
            $("." + funcName).append($new_comment);
            $new_comment.fadeIn();
            //resultArray[i] = temp;
            resultArray.push(temp);
        }
        return resultArray;
    };

    var newWords = {
        "3": "foo",
        "5": "bar"
    };

    var fizzbuzz_4 = function(obj){
        var numbers = new Array(100);
        var len = numbers.length,
            keys = Object.keys(obj),
            keyLen = keys.length,
            resultArray = [],
            $new_comment,
            funcName = "fizzbuzz_4";
        $("body").append($("<section class='" + funcName + "'>").text(funcName));
        for (var i = 0; i < len; i++){
            var temp = "",
                found = false;
                numbers[i] = i + 1;
                console.log(numbers[i]);
            for (var x = 0; x < keyLen; x++){
                if (numbers[i] %parseInt(keys[x], 10)===0){
                    if(found){
                        temp += obj[keys[x]];
                    } else {
                        temp = obj[keys[x]];
                    }
                    found = true;
                } else {
                    if (x===0 && temp == "") {
                        temp += numbers[i];
                    }
                }
            }
            $new_comment = $("<p>").text(temp);
            $new_comment.hide();
            $("." + funcName).append($new_comment);
            $new_comment.fadeIn();
            resultArray[i] = temp;
        }
        return resultArray;
    };


    var fizzbuzz_5 = function(arr, obj){
        var len = arr.length,
            keys = Object.keys(obj),
            keyLen = keys.length,
            resultArray = [],
            $new_comment,
            funcName = "fizzbuzz_5";
        $("body").append($("<section class='" + funcName + "'>").text(funcName));
        for (var item of arr){
            var temp = "",
                found = false;
                console.log(item);
            for (var x = 0; x < keyLen; x++){
                if (item %parseInt(keys[x], 10)===0){
                    if(found){
                        temp += obj[keys[x]];
                    } else {
                        temp = obj[keys[x]];
                    }
                    found = true;
                } else {
                    if (x===0 && temp == "") {
                        temp += item;
                    }
                }
            }
            $new_comment = $("<p>").text(temp);
            $new_comment.hide();
            $("." + funcName).append($new_comment);
            $new_comment.fadeIn();
            resultArray.pusch = temp;
        }
        return resultArray;
    };
    console.log(fizzbuzz_1());
    console.log(fizzbuzz_2(200, 300));
    console.log(fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]));
    console.log(fizzbuzz_4(newWords));
    console.log(fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], newWords));
};

$(document).ready(main);
