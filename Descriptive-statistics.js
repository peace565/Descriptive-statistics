//1. Create a  class that has class/static properties and methods.show how to access them//
class Student{
    static numberofheads=1;
    constructor(name,score){
    this.name=name;
    this.score=score;
    
    }
 
    static Score(student){
        console.log(student.name+' '+ 'who scored'+" "+ student.score+' '+ 'has' +' '+Student.numberofheads+' '+ 'head')
    }
}
let topstudent=new  Student("Ngozi",100)
console.log('accessing Student.numberofheads static property')
console.log(Student.numberofheads)

console.log('accessing static method Score(student)');
Student.Score(topstudent);
//2.Using ES6+ classes,prepare code that computes decriptive statistics:measures of central tendency 
class CentraltenCalculator{
    constructor(numbers)
{this.numbers=numbers;}

calculatemean(){
    const sum=this.numbers.reduce((total,num) =>total +num,0);
    const mean=sum/this.numbers.length;
    return mean;
}

calculatemedian(){
    const sortedNumbers=this.numbers.sort((a,b)=>a-b);
    const middleindex=
    Math.floor(sortedNumbers.length/2);
    const median=
    sortedNumbers.length%2===0
    ?(sortedNumbers[middleindex-1]+sortedNumbers[middleindex])/2
    :sortedNumbers[middleindex];
    return median;
}

calculatemode(){
    const frequencyMap=
    this.numbers.reduce((map,num)=>{
        map.set(num,(map.get(num)||0)+1);
        return map;
    },new Map());
    let mode;
    let maxfrequency=0;
    for(const[num,frequency]of frequencyMap.entries()){
        if(frequency>maxfrequency){
            maxfrequency=frequency;
            mode=num;
        }
    }
    return mode;
}
}
const numbers=[4,7,2,3,2,2,2]
const calculator=new
CentraltenCalculator(numbers);
const mean=calculator.calculatemean();
const median=calculator.calculatemedian();
const mode=calculator.calculatemode();

console.log(mean,median,mode);
//2b. Do the same for measures of dispersion
class Measuresofdiscalculator{
    constructor(data){
        this.data=data;
    }
calculateMean(){
    const sum=this.data.reduce((acc,val)=>acc+val,0);
    return sum/this.data.length;
}


calculatevariance(){
    const Mean=this.calculateMean();
    const sqrdifferences=this.data.map(val=>(val-Mean)**2);
    const sumofsqrdifferences=sqrdifferences.reduce((acc,val)=>acc+val,0);
    return sumofsqrdifferences/this.data.length;
}
calcstandarddeviation(){
    const variance=this.calculatevariance();
    return Math.sqrt(variance);
}
calcrange(){
    const min=Math.min(...this.data);//the three dots here are used to spread the operator
    const max=Math.max(...this.data);
    return max-min;
}
calcmeandeviation(){
    const Mean=this.calculateMean();
    const deviations=this.data.map(val=>Math.abs(val-mean));
    const sumofdeviations =deviations.reduce((acc,val)=>acc+val,0);
    return sumofdeviations/this.data.length;
}
calcquartiledeviation(){
    const Sorteddata=this.data.sort((a,b)=>a-b);
    const firstquartile=Sorteddata[Math.floor(Sorteddata.length/4)];
    const thirdquartile=Sorteddata[Math.floor((3*Sorteddata.length)/4)];
    return (thirdquartile-firstquartile)/2;
}

}
const data=[6,3,14,9,4,4];
const Calc=new
Measuresofdiscalculator(data);
const Mean=Calc.calculateMean()
const variance=Calc.calculatevariance()
const standarddeviation=Calc.calcstandarddeviation()
const range=Calc.calcrange()
const meandeviation=Calc.calcmeandeviation();
const quartiledeviation=Calc.calcquartiledeviation()

console.log('Variance:'+variance);

console.log('Standard deviation:'+standarddeviation);

console.log(' Range:'+ range);

console.log('Mean deviation:'+meandeviation);

console.log('Quartile deviation:'+quartiledeviation);

