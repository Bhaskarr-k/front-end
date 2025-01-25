# loops in javascript:

- the various loop mechanisms offer diffrent ways to determine the start and end points of the loop. there are various situations that re more easily served by one type of loop over the others.
- for statement

  do while statement

  while statement

  labeled statement

  break statement

  continue statement

  for in statement

  for of statement

### for statement:
- a for loop repeats until a specified condition evaluates to false. the javascript **for** loops is similar to the java and c **for** loop.
- A **for** statement looks as follows:
- syntax:
        for (initilization; condition; afterthought)
            
            statement

- when a for loop executes the following occurs.
- hte initilizing expreesion **initializaion** if any is executed this expreesion usually initilizes one or more loop counters but the syntax alllows an expreesion of any degree of complexity. this expression can also declare variables.
- the **condition** expreesion is evaluated if the value of **condition** is true the loop statements execute. otherwise the **for** loop terminates.
- the **statement** executes to execute multiple statements use a block statement ({}) to group those statements.
- if present the update expression **afterthougt** is executed.
- control returns to step2.

### while statement:
- A while statement executes its statements as long as a specified condition evaluates to **true**. A **while** statement looks as follows:
- while (condition)

  statement.

- If the **condition** becomes **false**, **statement** within the loop stops executing and control passes to the statement following the loop.
- The condition test occurs before **statement** in the loop is executed. If the condition returns **true**, **statement** is executed and the **condition** is tested again. If the condition returns **false**, execution stops, and control is passed to the statement following **while**.
- To execute multiple statements, use a block statement (**{ }**) to group those statements.

- example1:
- the following **while** loop iterates as long as **n** is less than **3**.
- let n = 0;

  let x = 0;

  while (n < 3) {

    n++;

    x += n;

  }
- With each iteration, the loop increments **n** and adds that value to **x**. Therefore, **x** and **n** take on the following values:
- after the first pass:**n** = 1 and **x** = 1
- after the first pass:**n** = 2 and **x** = 3
- after the first pass:**n** = 3 and **x** = 6

- After completing the third pass, the condition **n < 3** is no longer **true**, so the loop terminates.

### do-while statement:
- The do...while statement repeats until a specified condition evaluates to false.
- A **do...while** statement looks as follows:
- do 
   
    statement

 while(condition);

- **statement** is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ }) to group those statements.)
- If **condition** is **true**, the statement executes again. At the end of every execution, the condition is checked. When the condition is **false**, execution stops, and control passes to the statement following **do...while**.
- example:
- In the following example, the **do** loop iterates at least once and reiterates until **i** is no longer less than **5**.
- let i = 0;

  do {

    i += 1;

    console.log(i);


  } while (i < 5);
