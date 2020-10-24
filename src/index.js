module.exports = function toReadable (number) {
  var th = ['hundred','thousand','million', 'billion','trillion'];
    var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function toWords(s) {
    
     if(s<10){
        return dg[s];
    } else if (s<20){
        return tn[s-10];
    } else if (s<100){
        let dozens = Math.floor(s/10);
        let units = s-(dozens*10);    
        let dozensStr=tw[dozens-2];
        let unitsStr=dg[units];
        return units===0? dozensStr: dozensStr+' '+unitsStr;
    } else{
        let hundreds = Math.floor(s/100);    
        let hundredsStr= dg[hundreds]+' '+th[0];
        let dozens = Math.floor((s-(hundreds*100))/10);
        let units = s-(dozens*10)-(hundreds*100);    
        let dozensStr=tw[dozens-2];
        let unitsStr=dg[units];
        let dozStr = tn[units];
        if(s%100===0){
            return hundredsStr;
        } else if((s-hundreds*100)<10){
            return hundredsStr + ' '+ unitsStr;
        } else if((s-hundreds*100)<20){
            return hundredsStr + ' '+ dozStr;
        } else if((s-hundreds*100)%10===0){
            return hundredsStr + ' '+ dozensStr;
        } else{
            return hundredsStr+ ' '+dozensStr + ' ' +unitsStr;
        }
    }
}
return toWords(number);
}
