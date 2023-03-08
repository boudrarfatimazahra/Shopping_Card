const Product = [
    {
        id: 10,
        image: '/shoping/7.webp',
        prix: 25,
        total: 25,
        qty: 1
    },
    {
        id: 11,
        image: '/shoping/79a9c5fed746bcfefed38cdea5d9ed99.jpg',
        prix: 50,
        total: 50,
        qty: 1
    },
    {
        id: 12,
        image: '/shoping/grand-pot-nicole-plust-blanc-design_1.jpg',
        prix: 55,
        total: 55,
        qty: 1
    },
]

function cart() {
    const product_html = [
        `<tr>
        <th>Product</th>
        <th>delete</th>
        <th>Cost</th>
        <th>Quantity</th>
        <th>Total</th>
    </tr>`
    ]

    Product.forEach((element, index) => {
        console.log(index);
        product_html.push(`<tr>
        <td class="image"><img src="${element.image}" alt="pot décoratif" width="15%" height="100%"></td>
        <td><svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M684.642617 277.598412l-1.436722-1.467421c-12.489452-12.461823-32.730449-12.461823-45.159526 0L479.700991 434.510138l-158.286026-158.315702c-12.555967-12.524245-32.793894-12.524245-45.225017 0-12.555967 12.462846-12.555967 32.701796 0 45.223994l158.348448 158.317749L276.129573 638.049834c-12.495592 12.429077-12.495592 32.671097 0 45.163619l1.49812 1.434675c12.429077 12.494569 32.66905 12.494569 45.221948 0l158.287049-158.286026 158.283979 158.286026c12.491499 12.494569 32.731472 12.494569 45.220924 0 12.495592-12.493545 12.495592-32.731472 0-45.222971l-158.285003-158.285003 158.285003-158.314679C697.138209 310.299185 697.138209 290.060235 684.642617 277.598412"  /><path d="M818.88197 140.522454c-187.332573-187.363272-491.033479-187.363272-678.364005 0-187.329503 187.329503-187.329503 491.032456 0 678.362982 187.330526 187.392948 491.031433 187.392948 678.364005 0C1006.274918 631.55491 1006.274918 327.851956 818.88197 140.522454M773.656953 773.660418c-162.344458 162.343435-425.569512 162.407903-587.914994 0-162.40688-162.344458-162.40688-425.602258 0-587.914994 162.344458-162.40688 425.569512-162.40688 587.914994 0C936.063833 348.059184 936.000388 611.31596 773.656953 773.660418"  /></svg></td>
        <td class="money">${element.prix}</td>
        <td>
            <div>
                <button class="butAdd" id="add-${element.id}">+</button>
                <input class="change" type="text" value="${element.qty}">
                <button class="butSous" id="sous-${element.id}">-</button>
            </div>
        </td>
        <td class="all">${element.total}</td>
    </tr>`)
    });

    document.querySelector("#card").innerHTML = product_html.join('')

    document.querySelectorAll(".butAdd").forEach((item) => {
        item.addEventListener("click", function (e) {
            console.log(e.target.id)
            const product = Product.find(element => element.id === Number(e.target.id.replace('add-', '')))
            const indexProduct = Product.indexOf(product)
            Product[indexProduct].qty++
            Product[indexProduct].total = Product[indexProduct].total + Product[indexProduct].prix
            cart()
        })
    })

    document.querySelectorAll(".butSous").forEach((item) => {
        item.addEventListener("click", function (e) {
            console.log(e.target.id)
            const product = Product.find(element => element.id === Number(e.target.id.replace('sous-', '')))
            const indexProduct = Product.indexOf(product)
            if (Product[indexProduct].qty > 1) {
                Product[indexProduct].qty--
                Product[indexProduct].total = Product[indexProduct].total - Product[indexProduct].prix
                cart()
            }

        })
    })
}

cart()





// let butDecr = document.querySelectorAll(".butSous")

/* let soustra = 0

    butCre.forEach((element) => {
        element.addEventListener("click", function () {
            

            let parent = this.parentNode
            let numb = parent.querySelector(".change")
            let quatity = Number(numb.value)
            quatity++
            numb.value = quatity
            let grandpa = parent.parentNode
            let family = grandpa.parentNode
            let prix = family.querySelector(".money")
            console.log(prix.textContent)
            let quant = Number(prix.textContent)
            addition = addition + quant
            let total = family.querySelector(".all")
            total.textContent=addition
            
    
        })
    }) */

/*   butDecr.forEach((element) => {
       element.addEventListener("click",function(){

       let parent = this.parentNode
       let numb = parent.querySelector(".change")
       let quatity = Number(numb.value)
       quatity--
       numb.value = quatity
       let grandpa = parent.parentNode
           let family = grandpa.parentNode
           let prix = family.querySelector(".money")
           console.log(prix.textContent)
           let quant = Number(prix.textContent)
           soustra = quant - soustra
           let total = family.querySelector(".all")
           total.textContent=soustra
       //number.value = decre
   })
})




*/