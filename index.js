var currvalue

function getvalue(event) {
    currvalue=event.target.innerText;
    
    let display= document.getElementById("displaynum");
    display.innerText=display.innerText+currvalue;
    // console.log(display,'abc');
    currvalue=display.innerText;
    // console.log(currvalue ,"abc");
    // console.log(currvalue);
}
function back(){
    let display=document.getElementById("displaynum");
    // console.log(display);
    // console.log(currvalue);
    const arr=[...currvalue];
    // console.log(arr);
    currvalue=arr.join();
    arr.pop();
    let temp="";
    for(let i=0;i<arr.length;i++){
        temp=temp+arr[i];
    }
    // console.log(temp);
    display.innerText=temp;
    currvalue=display.innerText;
    // console.log(currvalue);

       


    }

function value() {

    currvalue=eval(currvalue);
    // console.log(currvalue,'abc');
    let display=document.getElementById("displaynum")
    display.innerText="";
    display.innerText=currvalue;

}
function cleared(event) {
    let display=document.getElementById("displaynum");
    display.innerText="";
    // console.log('abc');
}