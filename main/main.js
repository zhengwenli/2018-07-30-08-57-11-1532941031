module.exports = function main(num) {
    //console.log("Debug Info");
    num = Number(num);
    //0~9对应的LED灯表现形式，分别放入对应的数组
    var zero = ["._.","|.|","|_|"];
    var one = ["...","..|","..|"];
    var two = ["._.","._|","|_."];
    var three = ["._.","._|","._|"];
    var four = ["...","|.|","..|"];
    var five = ["._.","|_.","._|"];
    var six = ["._.","|_.","|_|"];
    var seven = ["._.","..|","..|"];
    var eight = ["._.","|_|","|_|"];
    var nine = ["._.","|_|","..|"]

    //数字拆分成单个数字，建立一个contain空数组来容纳拆分的数字
    var contain = [];
    while (num != 0){
        contain.push(num % 10);
        num = (num - num % 10) / 10;
    }
    
    /*
      LED分为三行显示数字，所以本程序的思想是如果数字位数多于1，先
      将数字拆分，然后将拆分后每个数字的第1行，第2行，第3行分别合并
      到一个字符串中，最后再用join('\n')来得到想要的输出形式。
      用两个for循环来实现将数字转换成相应LED显示形式，LED分为三行
      显示数字，内循环用来实现将拆分后每个数字的第j行放在一个temp数
      组中暂存，外循环实现现将内循环的temp数组中的字符串合并为一个字
      符串，也就是将拆分后每个数字的第j行合并到一个字符串，通过循环3次，
      得到数字的完整三行LED显示。最后通过graph.join('\n')控制输出格式。 
    */
    var graph = [];
    for(var j = 0; j < 3; j++){
        var temp = [];
        for(var i =0; i < contain.length; i++){
            switch (contain[contain.length - 1 - i]){
                case 0:
                temp.push(zero[j]);
                break;
                case 1:
                temp.push(one[j]);
                break;
                case 2:
                temp.push(two[j]);
                break;
                case 3:
                temp.push(three[j]);
                break;
                case 4:
                temp.push(four[j]);
                break;
                case 5:
                temp.push(five[j]);
                break;
                case 6:
                temp.push(six[j]);
                break;
                case 7:
                temp.push(seven[j]);
                break;
                case 8:
                temp.push(eight[j]);
                break;
                case 9:
                temp.push(nine[j]);
                break;
            }
        }
        graph.push(temp.join(' '));
    }
    console.log(graph.join('\n'));
    return graph.join('\n');
};