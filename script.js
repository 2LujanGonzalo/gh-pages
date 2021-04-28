function convertir() {
   let dec= document.getElementById("input").value;
   let bin = parseInt(dec).toString(2)
   let oct = parseInt(dec).toString(8)
   let hex = parseInt(dec).toString(16)
   console.log(dec);
   document.getElementById('bin').innerHTML= bin;
      document.getElementById('oct').innerHTML= oct;
         document.getElementById('hex').innerHTML= hex;
}
 
