function compareTime (t1string,t2string){
    let dateTIme1= new Date(t1string);
    let dateTIme2= new Date(t2string);

    return dateTIme1.getTime()>dateTIme2.getTime();
}

module.exports= compareTime;