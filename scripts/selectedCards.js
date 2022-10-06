function createSelectedCard(item) {
    let li = document.createElement("li")
    li.classList.add("card-selected", "bg-color-grey-6")

    let cardHeader = document.createElement("div")
    cardHeader.classList.add("card-selected-header")

    let h3 = document.createElement("h3")
    h3.classList.add("title-5", "color-grey-1")
    h3.innerHTML = `${item.title}`

    let btnDelete = document.createElement("button")
    btnDelete.classList.add("btn-delete", "bg-color-grey-5")
    btnDelete.id = `delete_${item.id}`

    btnDelete.addEventListener("click", function(){
        let idToCheck = Number(btnDelete.id.substring(7))
        
        let indexCheck = arraySelected.findIndex((element) => idToCheck == element.id)

        arraySelected.splice(indexCheck, 1)

        let listUpdate = JSON.stringify(arraySelected)
        localStorage.setItem("selectedJobs", listUpdate)

        listSelectedItems(arraySelected)

        let btnCardToChange = document.getElementById(`card_${item.id}`)
        btnCardToChange.innerText = "Candidatar"
    })

    cardHeader.append(h3, btnDelete)
    li.appendChild(cardHeader)

    li.insertAdjacentHTML("beforeend", `
        <div class="card-selected-footer">
            <span class="text-3 color-grey-2">${item.enterprise}</span>
            <span class="text-3 color-grey-2">${item.location}</span>
        </div>
    `)

    return li
}

function createEmptyCart() {
    let div = document.createElement("div")
    div.classList.add("selected-empty", "bg-color-grey-6")

    div.innerHTML = `
        <p class="text-2 color-grey-2">Você ainda não aplicou para nenhuma vaga</p>
        <div class="bg-color-grey-5"></div>
    `

    return div
}

function listSelectedItems(arr) {
    const selectedContent = document.querySelector(".selected-content")
    selectedContent.innerHTML = ""
    
    if (arr.length > 0) {
        const selectedItemsWrapper = document.createElement("ul")
        selectedItemsWrapper.classList.add("card-selected-wrapper")

        selectedContent.appendChild(selectedItemsWrapper)

        arr.forEach((element) => selectedItemsWrapper.appendChild(createSelectedCard(element)))
    } else {
        selectedContent.appendChild(createEmptyCart())
    }
}

listSelectedItems(arraySelected)