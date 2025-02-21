# Promise?
- it is introduce to fullfill the requirments and drawbacks which  work on the callback function.
- it is taking two parameters **resolve** and **reject**
- it is following three states that are
- once promise created means it is **pending** state.
- it is success means **resolve**
- it is failure means **reject**
- resolve block executed means **.then will be executed**
- reject block executed means **.catch method will be executed**

-- **resolve execute means automatically finally block will execute and reject means catch block will execute**


# throw:
- the **throw** statement allows you to create a custom error.
- the **throw** statement **throws** generates an error
- the technical terms for this is
- the **throw** statement **throws an exception**
- the exception can be a javascript string, a number, a boolean or object.

# promise advanced concepts:
- promise.all()
- promise.allsettled()
- promise.any()
- promise.race()

## promise.all:
- promise all work like collect multiple items and executed simaltaniously.
- promise all work based on the **logical AND** operator.
- any one reject means all reject
## promise.allsettled():
- we are collecting some promises some resolve ans some reject
- we are using for each method for this 
## promise.any():
- at least any one resolve
- for this we can use **logical or**
## promise.race():


