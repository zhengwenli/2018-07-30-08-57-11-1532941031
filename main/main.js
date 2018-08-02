module.exports = function main(num) {

    //0~9对应的LED灯表现形式，分别放入对应的数组
    var zero = ["._.","|.|","|_|"];
    var one = ["...","..|","..|"];
    var two = ["._.","._|","|_."];
    var three = ["._.","._|","._|"];
    var four = ["...","|_|","..|"];
    var five = ["._.","|_.","._|"];
    var six = ["._.","|_.","|_|"];
    var seven = ["._.","..|","..|"];
    var eight = ["._.","|_|","|_|"];
    var nine = ["._.","|_|","..|"]
    
    /*
      LED分为三行显示数字，所以本程序的思想是如果数字位数多于1，先
      将数字拆分，然后将拆分后每个数字的第1行，第2行，第3行分别合并
      到同一行.
      用两个for循环来实现将数字转换成相应LED显示形式，LED分为三行
      显示数字，内循环用来实现将拆分后每个数字的第j行放在graph中，
      外循环通过循环3次，得到数字的完整三行LED显示。 
    */
    var graph = '';
    for(var j = 0; j < 3; j++){
        for(var i =0; i < num.length; i++){
            switch (Number(num[i])){
                case 0:
                graph +=zero[j];
                break;
                case 1:
                graph +=one[j];
                break;
                case 2:
                graph +=two[j];
                break;
                case 3:
                graph +=three[j];
                break;
                case 4:
                graph +=four[j];
                break;
                case 5:
                graph +=five[j];
                break;
                case 6:
                graph +=six[j];
                break;
                case 7:
                graph +=seven[j];
                break;
                case 8:
                graph +=eight[j];
                break;
                case 9:
                graph +=nine[j];
                break;
            }
            if(i!=num.length-1){
                graph += " ";
            }
        }
        graph +="\n";
    }
    console.log(graph);
    return graph;
};