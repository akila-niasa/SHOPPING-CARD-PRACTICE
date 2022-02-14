function getInput(product,price,isIncrease){
    const productId=document.getElementById(product+"-input")
    let productValue=productId.value
    if(isIncrease==true){
        productValue=parseInt(productValue)+1
    }
     else if(productValue>0){
        productValue=parseInt(productValue)-1
    }
    productId.value=productValue
    const productPrice=document.getElementById(product+"-ammount")
    productPrice.innerText=productValue*price
    subTotal()
}
function getInputValue(product){
    const phoneInput=document.getElementById(product+"-input")
    const phonePrice=phoneInput.value
    return phonePrice
}
function subTotal(){
    const phone=getInputValue("phone")*1219
    console.log(phone);
    const cases=getInputValue("case")*59
    console.log(cases);
    const subTotal=document.getElementById("subTotal")
    subTotal.innerText=phone+cases
    const total=subTotal.innerText
    const tax=document.getElementById("tax")
    tax.innerText=total/100
    const taxValue=tax.innerText
    const finaltotal=document.getElementById("total")
    finaltotal.innerText=total+taxValue
}

document.getElementById("phone-plus-button").addEventListener("click",function(){
getInput("phone",1219,true)
})
document.getElementById("phone-minaz-button").addEventListener("click",function(){
getInput("phone",1219,false)
})
document.getElementById("case-plus-button").addEventListener("click",function(){
    getInput("case",59,true)
    })
    document.getElementById("case-minaz-button").addEventListener("click",function(){
        getInput("case",59,false)
        })