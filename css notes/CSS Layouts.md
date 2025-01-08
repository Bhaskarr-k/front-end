# layouts in CSS:
- in CSS layout refers to the arangement and positioning of elements on a web page.
- it involves controlling how elements ar displayed, aligned, and spaced relative to one another and within their contrainer.
- layouts divided into three tyeps they are given below.

-    Float layout
-    flex layout
-    Grid layout 
## float layout:
- the CSS float layout property speicifies how an element should float.
- the float property is use for positioning and performing content.
- the float property can have one of the follwing values:
- left: the element floats to the left of its container.
- right: the element floats to the right of its container.
- none: the element does not float(will be fisplayes just wher eit occurs in the next this is default)
- inherit: the element inherits the float value of its parent.
# SS flexbox? 
- flexbox is short for the flexible Box layout module.
- flexbox is a layout method for arraging items in rows or columns.
- flexbox means it easier to design a flexible responisve layout structure , without using float or positioning.
### key concepts of flexbox.
#### flex container:
- the parent element where **dsiplay:flex** or **display: inline-flex** is applied.
- it established a flex formating context ofr its child elements.
#### flex items:
- the dorect children of a flex container.
- these items are laid out according to the flexbox rules.
### flex container properties:
### isplay:
- it is use for an diaplying the header and footer part
- Ex:  display:flex;
### flex direction:
- defines the direction of the main axis.
#### values
-**row**: items are arranged left to right
- **rowreverse**: items are arranged right to left.
- **column**: items are arraged top to bottom.
- **column-reverse**: items are arranged bottom to top.
### flex wrap:
- Determines whether items wrop to the next line if they overflow the container.
#### values:
- **nowrap**: all items stay in a single line.
- **wrap**: items wrap onto the next line.
- **wrap-reverse**: items wrap in reverse order.
### flex flow:
- a shrothand for flex direction and flex wrap.
### justify content:
aligns items along the main axis.
#### values:
- **flex-start**: items align at the start.
- **flex-end**: items align at the end.
- **center**: items align in the center.
- **space-between**: items are evenly distributed, with no space at the edges.
- **space-around**: items are evenly distributed with equal space around.
- **spece-evenly**:
items are evenly distributed with equal space between and at the edges.
### align items:
- aligns ites along the cross axis.
#### values:
- **stretch**: items stretch to fill container.
- **flex-start**: items align at the start.
- **flex-end**: items align in the center.
- **baseline**: items align along their baseline.
### align content:
aligns multiple lines of items along he cross axis.
#### values:
- **stretch**: lines stretch fill the container.
- **flex-start**: lines align at the start.
- **flex-end**: lines align end.
- **cenetr**: lines align in the center.
- **space-between**: lines are evenly distributed with no space at the edges.
- **space-around**: lines are evenly distributed with equal space around.
## flex item properties
### order:
- defiens the order of the item within the container lower values are displayed first.
### flex-grow:
- determines how much a flex item will glow relative to others.
### flex-shrink:
- determines how much a flex item will shrink relative ot others.
### flex-basis:
- specifies the intital soze of a flex item before space is distributed.
### flex:
- a shorthand for **flex-grow, flex-shrink,and flex-basis**
## align-self:
- overrides **align-items** for a specific iy=tem.
### values:
- **auto**: inherites from **align-items**.
- **flex-start,flex-end,center,baseline,stretch**



