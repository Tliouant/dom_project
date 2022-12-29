
            let i = 0;
            // let input1 = document.getElementById("notb")
            // let input2 = document.getElementById("qotb")
            let btn1 = document.getElementById("buttonadd1")
            let btn2 = document.getElementById("buttonadd2")
            let btn3 = document.getElementById("buttonadd3")
            let ps5 = document.getElementById("ps")
            let xbox1 = document.getElementById("xsx")
            let xbox2 = document.getElementById("xss")
            let a = document.getElementById("priceps5")
            let b = document.getElementById("pricexsx")
            let c = document.getElementById("pricexss")
            // let btn2 = document.getElementById("buttondelete")
            let table = document.querySelector("tbody")
            btn1.addEventListener("click",() => {
                let tr1 = document.createElement ("tr")
                document.querySelector("tbody").appendChild(tr1)
                let td1 = document.createElement ("td")
                i = i +1
                    td1.innerText = i
               tr1.appendChild(td1)
      
                let td2 = document.createElement ("td")
                td2.innerText = ps5.innerText
                tr1.appendChild(td2)
                let td3 = document.createElement ("td")
                let price = a.innerHTML
                td3.innerText = (qps.value) * (price)
                tr1.appendChild(td3)
                let btn4 = document.createElement ("button")
                btn4.innerText = ("delete")
                tr1.appendChild(btn4)
                btn4.addEventListener ("click", () => {
                    tr1.remove()
                    
                })
                let totprice = document.getElementById("tot")
            totprice.value = (qxss.value) * (c.value) + (qxsx.value) * (b.value) + (qps.value) * price
            })



            btn2.addEventListener("click",() => {
                let tr1 = document.createElement ("tr")
                document.querySelector("tbody").appendChild(tr1)
                let td1 = document.createElement ("td")
                i = i +1
                    td1.innerText = i
               tr1.appendChild(td1)
                
                let td2 = document.createElement ("td")
                td2.innerText = xsx.innerText
                tr1.appendChild(td2)
                let td3 = document.createElement ("td")
                td3.innerText = (qxsx.value) * (b.value)
                tr1.appendChild(td3)
                let btn4 = document.createElement ("button")
                btn4.innerText = ("delete")
                tr1.appendChild(btn4)
                btn4.addEventListener ("click", () => {
                    tr1.remove()
                    
                })
                let totprice = document.getElementById("tot")
            totprice.value = (qxss.value) * (c.value) + (qxsx.value) * (b.value) + (qps.value) * price
            })

            btn3.addEventListener("click",() => {
                let tr1 = document.createElement ("tr")
                document.querySelector("tbody").appendChild(tr1)
                let td1 = document.createElement ("td")
                i = i +1
                    td1.innerText = i
               tr1.appendChild(td1)
                
                let td2 = document.createElement ("td")
                td2.innerText = xss.innerText
                tr1.appendChild(td2)
                let td3 = document.createElement ("td")
                td3.innerText = (qxss.value) * (c.value)
                tr1.appendChild(td3)
                let btn4 = document.createElement ("button")
                btn4.innerText = ("delete")
                tr1.appendChild(btn4)
                btn4.addEventListener ("click", () => {
                    tr1.remove()
                    
                })
                let totprice = document.getElementById("tot")
            totprice.value = (qxss.value) * (c.value) + (qxsx.value) * (b.value) + (qps.value) * price
            })
            
