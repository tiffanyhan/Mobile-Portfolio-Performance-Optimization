MOBILE PORTFOLIO PROJECT AND PIZZERIA PAGE
===========================================

This is a portfolio page that links to a page for a pizzeria. 
The pizzeria page generates a menu of random pizzas from a master 
list of ingredients and pizza names. The pizzas may also be re-sized 
using a slider located at the top of the menu.

How to access and use the pizzeria page:

  1.  Open index.html
  2.  Scroll down and click on the link to 'Cam's Pizzeria'.
  3.  Scroll down to the 'Our Pizzas!' section to see the list
      of randomly generated pizzas.
  4.  Refresh the page in order to generate new pizzas.
  5.  Move the slider located at the top of the menu in order to
      change the size of the pizzas.
      
PERFORMANCE OPTIMIZATIONS

a) General optimizations:

  1.  document.querySelector was replaced by
      document.getElementById or document.getElementsByClassName.
  2.  variable declarations and if possible, variable assignments were
      moved out of for loops
      
b) Performance optimizations for page scrolling:

  1.  The number of pizzas created for the background was changed so
      that it is dynamically calculated.  This way, no extra pizza
      movers are unnecessarily generated.
  2.  In the function updatePositions, the items variable was moved
      outside of the function so that accessing the DOM only happens
      once instead of at every scroll event.  In addition,
      document.querySelectorAll was changed to
      document.getElementsByClassName for further performance boosts.
  3.  In the for loop of updatePositions,
      document.body.scrollTop / 1250 was moved outside of the for
      loop and given its own variable name.  The purpose of this
      is so that the DOM is accessed once per scroll event instead
      of 24 times per scroll event.
      
c) Performance optimizations for changing pizza sizes:

  1.  The function determineDx within resizePizzas was renamed to
      determineWidth, and all declared and defined variables were
      removed from the function.  In addition, the function was
      changed to return percentage values instead of decimal values.
  2.  In the function changePizzaSizes within resizePizzas, the call
      to the newly named determineWidth was moved outside of the for
      loop.  This is because all the pizzas will turn into the same
      size, so the new width only needs to be determined once for all
      the pizzas.
  3.  Also in the function changePizzaSizes within resizePizzas,
      document.querySelectorAll was moved outside of the for loop
      and given its own variable name so that accessing the DOM
      occurs once per slider event.  In addition,
      document.querySelectorAll was changed to
      document.getElementsByClassName for further performance gains.
  4.  The only thing left in the for loop is code that changes
      the width of each pizza to the new width.
    
Authors: Udacity and Tiffany Han

Source code: https://github.com/tiffanyhan/frontend-nanodegree-mobile-portfolio
