# CSS selectors?
A CSS selector selects the HTML elements you want to style.
- css selectors are use to  **find** or **select** the HTML elements you want to style.
- there is an 6 types of swelectirs mainly used in CSS
  -       Universel selector(*)
  -       Tag element or element selector
  -       class selector
  -       id selector
  -       Grouping selector
  -       Attribute selector
  -       Pseudo elements selector
  -       pseudo class selector
  -       Relationship selector
  ### Universel selector
  - universel selector denoted with (*) symbol.
  - Universel selector selects all HTML elements on the page.
  ### Tag selector
  - Tag selector selects the all HTML tags based on the name.
  ### class selector
  - class selector dentoed with (.) symbol.
  - the class selector selects HTML elements with a specific class atribute.
  - to selects elements with a specific class, write a period(.) charecter, followed by the class name.
  ### id selector
  - the id selecotr uses the id attribute of an HTML element to select a specific element.
  - the id of an element is unique with in a page, so the id selector is use to select one unique element.
  - to select an element with a specific id, write a hash(#) charecter.
  ### Attribute selector
  - the [attribute] selector is used to select elements with a specified attribute.
  - [attribute="value"]

  ### the CSS Grouping selector
  - the grouping selector selects all the HTML elements with the same style definitions.
  - Grouping selecotr using with the , symbol.
  ### Pseudo elements seletor
  -Style the first letter or line, of an elemen.t
  - Insert content before or after an element. 
   - Style the markers of list items.
   - Style the viewbox behind a dialog box.

  - pseudo elemnts selector denoted with the :: symbol.
  - it is divided into 5 types thet are given below.
  -         ::first-line
  -         ::first-letter
  -         :: before
  -         :: after
  -         :: selection.
  ### first-line element:
  - the first line pseudo elemnet is use to add a special style to the first line of a text.
  #### Note:
  - the first line pseudo element can only be applied to block level elements.
  ### first-letter pseudo element.
  - the ::first-letter pseudo element is use to add a special style to the forst letter of a text.
  ### Before pseudo element:
  - the before pseudo element can be used to insert some content before the content of an element.
  ### after pseudo element.
  - the after pseudo element can be use to insert some content after the content of an element.
  ### selection pseudo element.
  - the :: selection element matches the portion of an element that is selecyed by a user.
  - the following CSS properties can be applied to selection color, bg color, cursor, outline.
  ### another feature avaible in pseudo elements selectors that is
  - **class^=f it is displayes an output start letter**
  - **class$----->it is displayes lost letter**
  - class*----->it is displayes middle letter

  # Pseudo classes
  - A Pseudo class is used to define a special of an element.
  - it is denoted with : symbol.
  - it is classifed into four types they are given below.
         - hover
         - first-child
         - last child
         - nth child
### hover:
- whenever we using hover for elements hover effect applicapable.
- wherver we using hover in html just move on cursor there hover will applies.
### first child:
- it is selected frist paragraph or frist heading
### last child:
- it is selected lost paragraph or lost heading.
### nth child:
- whenver we use nth child we need specifies number in brakcet.otherwise it is not selected anything.
# Relationship selectors:
- it is divided into 2 types they are given below.

            - parent child
            - sibling selector

- again parent child divided into 2 types they are given below.

      - Descendant(space)
      - child selector(>)
## Descendant selector:
- it is denoted with using space.
- the deescendent selector matches all elements that are descendants of a specified element.
## child selector:
- the child selector selects all elements that are children of a specified element
- Ex: div is an parent selector
- P is an child selector
- in between any selecotors or tags not happened.
### sibling relation divided into 2 types they are given below.

     - General sibling selector
     - adjacent sibling selector
  ## General sibling selector:
  - it is denoted with using tilt(~) symbol.
  - the general sibling means[there are total five paragraphs but whenever we use general sibling selecotr it selcts only 4]
  ## adjacent selcetor:
  - adjacent selectpr denoteed with using + symbol.
  - [adjacent sibling means you want to select next]
  -[frist paragraph is adjacent of second at the same time second paragraph is adjacent of thrid]

         



     



