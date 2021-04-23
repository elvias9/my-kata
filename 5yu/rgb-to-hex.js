//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//The following are examples of expected output values:
//rgb(255, 255, 255) // returns FFFFFF


function rgb(r, g, b) {
    if (r<0) r = '00';
    if (r>=255) r = 'FF'; 
   //to convert a decimal into hexadecimal Number.toString(16)
    r = r.toString(16).toUpperCase();
   console.log(r)
   //to have the two digits for each color
    if (r.length === 1) r = '0' + r;
    if (g<0) g = '00';
    if (g>=255) g = 'FF';
    g = g.toString(16).toUpperCase();
    if (g.length === 1) g = '0' + g;
    if (b<0) b = '00';
    if (b>=255) b = 'FF';
    b = b.toString(16).toUpperCase();
    if (b.length === 1) b = '0' + b; 
    return r+g+b;
 }
 
 //another solution
 
 const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);
 
 function toHex(numb) {
   if (numb <= 0)   return '00';
   if (numb > 255)  return 'FF';
   return numb.toString(16).toUpperCase();
 }
 
 
 rgb(211,186,76)//, 'D3BA4C')
 
 
 
 