let order = []

function create (order) {
    let html = ""
    for(let i=0; i< order.length; i++) {
        if (order[i].striked) {
            html += `<li class="strike">${order[i].title}</li>`
        } else {
            html += `<li>${order[i].title}</li>`
        }
    }
    return html
}

function generate () {
    const itemList = document.getElementById('list')
    document.getElementById('inputbox').value = ""
    itemList.innerHTML = create(order)

}


window.onload = function () {
    const addbtn = document.getElementById('addbtn')
    addbtn.addEventListener('click', function () {
        const input = document.getElementById('inputbox')
        order.push({
            title: input.value,
            striked: false
        })
        generate()
    })
}

generate()

const itemList = document.getElementById('list')
itemList.addEventListener('click', function (e) {
    const title = e.target.innerHTML
    const selectedItem = order.find(function (item)  {
        return item.title === title
    })
    selectedItem.striked = !selectedItem.striked
    generate()
})

document.getElementById('delbtn').addEventListener('click', function () {
    order = order.filter(function (item) {
        return !item.striked
    })
    generate()
})