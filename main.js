let carts=document.querySelectorAll('.add-cart');

for(i=0 ;i<carts.length ;i++){
    carts[i].addEventListener("click",() =>{
       cartNumber();
    })
}

function cartNumber(){
    localStorage.setItem("cat",1);

}