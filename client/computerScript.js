// const { get } = require("mongoose")

let display_main = document.querySelector('.display-main')
let search_product_btn = document.querySelector('.search-product-btn')
let display_thumbnail =  document.querySelector('.display-thumbnail')
let input_product_name= document.querySelector('.input-product-name')


get_all_computers_thumbnail()


search_product_btn.addEventListener('click',(e) =>{

    //e.defaultPrevented()
    get_main_infor()
    console.log('Testing')

})


async function get_main_infor(){
    try{


        let response = await axios.get(`http://localhost:3001/computers/${input_product_name.value}`)
        console.log(response.data)



    }catch(error){

    }
}


async function get_all_computers_thumbnail(){
    try{

        let response = await axios.get(`http://localhost:3002/computers`)
       // console.log(response.data[0].name)
        let list_of_actors =[response.data]
        // console.log(list_of_actors)
        let data_list =""
        list_of_actors[0].map((element) => {
            data_list +=    `<ul id="ul-long" style="background-color: #e0e0e0">
                            <li class="li-long"><img class="img-Size" data-custom-value="${element._id}" src=${element.images.image_1}> </li>
                            <li class="li-long"> ${element.name} </li>
                            </ul>
            `
        })
        display_thumbnail.innerHTML = data_list
    }catch(error)
    {

    }
}

// document.getElementsByClassName('img-Size').addEventListener('click',function(e) {

//     let clciked_image = e.target

//     let product_id = clciked_image.getAttributed('data-custom-value')
//     console.log(product_id)

// })