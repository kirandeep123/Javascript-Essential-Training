function logScope(){
    var localVar =2;

    if(localVar){
        var localVar = "I am different ";
        console.log("nested local var ");
    }
    console.log("logscope local var " +localVar);
}

logScope();