// solution 1
    // let arr = [1,33,55,66,3,8,9,12,23,56,11];
    // let num = 55;

    // let greaterThanNum = (arr) => {
    //     let newArr = [];

    //     for(let i =0; i<arr.length; i++){
    //         if(arr[i]> num){
    //             newArr.push(arr[i]);
    //         }
    //     }
    //     return newArr;
    // }

    // for(el of greaterThanNum(arr)){
    //     console.log(el);
    // }


// solution 2
    // let str = "abcdabcdefgggh";

    // let uniqueCh = (str) =>{
    //     let newStr = "";
    //     for(ch of str){
    //             if(!newStr.includes(ch)){
    //                 newStr += (ch);
    //             } 
    //     }
    //     return newStr;
    // }
    // console.log(uniqueCh(str));

// solution 3
    // let country=["Australia","Germany","UnitedStatesofAmerica","longestttttRussianFederationssssssssss"];
    
    // let longestCountryName = (arr) => {
    //     let countArr = [];
    //     for(el of arr){
    //         let count = 0;

    //         for(ch of el){
    //             count++;
    //         }
    //         countArr.push(count);
    //     }

    //     let maxvalue = 0;
    //     for(let i=0; i<countArr.length; i++){
    //         if(countArr[i] > maxvalue){
    //             maxvalue = countArr[i];
    //         }
    //     }

    //     for(let i=0; i<countArr.length; i++){
    //         if(countArr[i] ==  maxvalue){
    //             return i;
    //         }
    //     }
    // }

    // let longest = country[longestCountryName(country)];
    // console.log(longest);

// solution 4
    // let str = "Sneha kumari";
    
    // let vowelsCount = (str) => {
    //     let count = 0;
    //     for(ch of str){
    //         if(ch == 'a' || ch == 'e' || ch == 'i'|| ch == 'o'|| ch == 'u'){
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    // console.log(vowelsCount("apna college"));  //str

// solution 5
    let randomNum = (start, end) => {
        let rn = Math.floor(Math.random()*(end-start+1))+start;
        console.log(rn);
    }    
     
    randomNum(100,200);