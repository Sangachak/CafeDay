function calculateTotal() {    
    let men1 = parseInt(document.getElementById("one").value) || 0;
    let men2 = parseInt(document.getElementById("two").value) || 0;
    let men3 = parseInt(document.getElementById("three").value) || 0;
    let men4 = parseInt(document.getElementById("four").value) || 0;
    let men5 = parseInt(document.getElementById("five").value) || 0;
    let men6 = parseInt(document.getElementById("six").value) || 0;
    let men7 = parseInt(document.getElementById("seven").value) || 0;
   
    let tot=men1+men2+men3+men4+men5+men6+men7;
    document.getElementById("num").textContent = tot;

    let val=(men1*60)+(men2*70)+(men3*80)+(men4*100)+(men5*130)+(men6*140)+(men7*200);
    // document.getElementById("totals").textContent = val;
    if (val!=0) {
        document.getElementById("totals").textContent = "Total: "+val;
    } else {
        document.getElementById("totals").textContent = "Nothing here.";
    }

    document.getElementById("orderTotalp").textContent="Cart Total: "+val;

    

     
  }

  document.getElementById("one").addEventListener("input", calculateTotal);
  document.getElementById("two").addEventListener("input", calculateTotal);
  document.getElementById("three").addEventListener("input", calculateTotal);
  document.getElementById("four").addEventListener("input", calculateTotal);
  document.getElementById("five").addEventListener("input", calculateTotal);
  document.getElementById("six").addEventListener("input", calculateTotal);
  document.getElementById("seven").addEventListener("input", calculateTotal);

 

  
  calculateTotal();


  let checkout=document.getElementById("checkout");
  

  checkout.addEventListener("click",()=>{
    let orderPlacePage=document.getElementById('orderPlacePage');
    orderPlacePage.scrollIntoView({behavior:'smooth'})
  });

  
