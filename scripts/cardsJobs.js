function createJobCard(item) {
    let card = document.createElement("li")
    card.classList.add("card", "bg-color-grey-6")

    let h3 = document.createElement("h3")
    h3.classList.add("title-4", "color-grey-1")
    h3.innerHTML = `${item.title}`

    let divCardHeader = document.createElement("div")
    divCardHeader.innerHTML = `
        <span class="text-3 color-grey-2">${item.enterprise}</span>
        <span class="text-3 color-grey-2">${item.location}</span>
    `

    let p = document.createElement("p")
    p.classList.add("text-2", "color-grey-2")
    p.innerHTML = `${item.descrition}`

    let divCardFooter = document.createElement("div")
    divCardFooter.classList.add("card-footer")
    divCardFooter.innerHTML = `
        <div>
            <span class="text-3 color-grey-2 bg-color-grey-3">${item.modalities[0]}</span>
            <span class="text-3 color-grey-2 bg-color-grey-3">${item.modalities[1]}</span>
        </div>   
    `

    let btnCard = document.createElement("button")    
    btnCard.classList.add("btn-card", "bg-color-brand-1", "color-grey-6", "text-btn")
    btnCard.id = `card_${item.id}`
    
    const testForItem = arraySelected.findIndex((element) => item.id == element.id)

    if (testForItem == -1) {
        btnCard.innerText = "Candidatar"
    }else {
        btnCard.innerText = "Remover candidatura"
    }

    btnCard.addEventListener("click", function(){
        let idToCheck = Number(btnCard.id.substring(5))
        
        let indexCheck = arraySelected.findIndex((element) => idToCheck == element.id)
        
        if (indexCheck == -1) {
            arraySelected.push(jobsData[idToCheck])

            let listUpdate = JSON.stringify(arraySelected)
            localStorage.setItem("selectedJobs", listUpdate)

            btnCard.innerText = "Remover candidatura"

            listSelectedItems(arraySelected)
        }else{
            arraySelected.splice(indexCheck, 1)

            let listUpdate = JSON.stringify(arraySelected)
            localStorage.setItem("selectedJobs", listUpdate)

            btnCard.innerText = "Candidatar"

            listSelectedItems(arraySelected)
        }
    })

    divCardFooter.appendChild(btnCard)

    card.append(h3, divCardHeader, p, divCardFooter)

    return card
}

function listCards() {
    const cardWrapper = document.querySelector(".cards-wrapper")

    cardWrapper.innerHTML = ""

    jobsData.forEach((element) => cardWrapper.appendChild(createJobCard(element)))
}

listCards()