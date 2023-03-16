// Your Script here.
function a(str){
    for(let i=0;i<str.length;i++){
        let j=(String.fromCharCode(str[i].charCodeAt(0)+13))
        let p1=str.substr(0,i);
        let p2=str.substr(i+1);
        str=p1+j+p2;
    }
    return (str)
}
