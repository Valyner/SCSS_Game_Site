 


let y = Math.random()*100
console.log(y)

let sayac = 0
let i =prompt('0 ile 100 arası sayi gir')
while (sayac <3) {
    
    if (Number(i)==Number(y)){
        document.write("Dogru");
        sayac = 3;
        break
    }
    else if (Number(i)>Number(y)){
        let i =prompt('azalt')
         
        sayac++;
    }
    else{
        document.write("Arttır");
        sayac++;
    }
    


}
 

 