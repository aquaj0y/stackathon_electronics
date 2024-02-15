// const { get } = require("mongoose")

let display_main = document.querySelector('.display-main')
let search_branch_btn = document.querySelector('.search-branch-btn')


get_all_computers_thumbnail()


async function get_main_infor(){
    try{

        let response = await axios.get(`http://localhost:3001/`)

    }catch(error){

    }
}


async function get_all_computers_thumbnail(){
    try{

        let response = await axios.get(`http://localhost:3001/computers`)
        console.log(response.data)
        let list_of_actors =[response.data]
        // console.log(list_of_actors)
        // let data_list =""
        // list_of_actors[0].map((element) => {
        //     data_list +=    `<ul id="ul-long" style="background-color: #e0e0e0">
        //                     <li class="li-long"><img class="img-Size" src=${element.image}> </li>
        //                     <li class="li-long"> ${element.name} </li>
        //                     </ul>
        //     `
        // })
        // list_cast.innerHTML = data_list
    }catch(error)
    {

    }
}