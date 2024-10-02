var n=5 ;
function square(n) {
    var ans=n*n;
    return ans;
}
    var square1=square(n);
    var square2=square(8);                                                    
    
    console.log(square1)
    console.log(square2)
   
    //creation phase
     GlobalExecutionContext = {
        LexicalEnvironment: {
            EnvironmentRecord: {
                Type: "Object",
                n: undefined,
                square1: undefined,
                square2: undefined
            },
            outer: null,
            ThisBinding: "global object or window object"
        },
        VariableEnvironment: {
            EnvironmentRecord: {
                Type: "Object",
                
            },
            outer: null,
            ThisBinding: "global object or window object"
        }
    }
    //execution phase
    GlobalExecutionContext = {
        LexicalEnvironment: {
            EnvironmentRecord: {
                Type: "Object",
                n: 5,
                square1: 25,
                square2: 64
            },
            outer: null,
            ThisBinding: "global object or window object"
        },
        VariableEnvironment: {
            EnvironmentRecord: {
                Type: "Object",
                
            },
            outer: null,
            ThisBinding: "global object or window object"
        }
    }
    
    