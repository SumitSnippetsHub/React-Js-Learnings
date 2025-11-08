# Topic - Closure
    * A closure is a feature in jsvascript where an inner function has access to the outer(enclosing) function's variables

    function outer(){
        var b = 10;
        function inner(){
            var a = 20;
            console.log(a+b);
        }
        return inner;
    };

# Re-render : How it works ?
    * our whole code/method is get re-rendered but 
    but 
    let [count,setCount]= useState(0); //intialization and only this line get ignore at re-render time

# Callback in Updater Function 
    * let incCount = () => {
        setCount((currCount) =>{
            currCount + 1;
        });

         setCount((currCount) =>{
            currCount + 1;
        }); 
    }  
        