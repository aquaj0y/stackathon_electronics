const db = require('../db')
const { Computer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const computers = [
        {
            name: `HP 14" Laptop - Jet Black`,
            description: `Get your job done easily with this HP 14" laptop It is 
            equipped with an Intel processor N100 and 8GB DDR4 RAM to deliver a reliable and powerful performance.`,
            category:{
                type: "Laptop",
                brand: "HP",
                model: "14-ep0008ca",
            },
            processor: {
                type:"Intel Processor N100",
                speed:"3.4 GHz",
            },
            storage:{
                ram_size: "8 GB",
                type: "DDR-4",
                disk: "500 SSD",
            },
            display:{
                graphics_card: "Inte UHD Graphics",
                size: "15.6",
            },
            operation_system: "Windows 11",
            prices:{
                regular_price: 449.99,
                sale_price: 400.00,
            },
            quantity: 25,
            rating: 4,
            year_release: "2023-08-02",
            images:
                [{
                image: ""
                }],
          }
          ,
          {
            name: `Dell Inspiron 15 3520`,
            description: `Get the ultimate performance with the Dell Inspiron 15 3520 laptop 
            featuring a 12th Gen Intel® Core™ i5-1235U processor, 512 GB SSD, and 16 GB DDR4 RAM. 
            Enjoy a crystal-clear display with a native resolution of 1920 x 1080 and a 15.6" screen.`,
            category:{
                type: "Laptop",
                brand: "Dell",
                model: "i3520-5964BLK-PCA",
            },
            processor: {
                type:"Intel Core i5-1135G7",
                speed:"2.4 GHz",
            },
            storage:{
                ram_size: "8 GB",
                type: "DDR-4",
                disk: "500 SSD",
            },
            display:{
                graphics_card: "Intel UHD Graphics",
                size: `15.6`,
            },
            operation_system: "Windows 11",
            prices:{
                regular_price: 429.99,
                sale_price: 400.00,
            },
            quantity: 12,
            rating: 3,
            year_release: "2023-05-02",
            images:
                [{
                image: ""
                }],
          },
          {
            name: `Lenovo IdeaCentre 3i Desktop, i7-13700`,
            description: `Lenovo IdeaCentre 3i Desktop, i7-13700, UHD Graphics 770 , 16GB, 1TB.`,
            category:{
                type: "Desktop",
                brand: "Lenovo",
                model: "90VT001XUS",
            },
            processor: {
                type:"i7-13700",
                speed:"4.10 GHz",
            },
            storage:{
                ram_size: "16 GB",
                type: "",
                disk: "250 SSD",
            },
            display:{
                graphics_card: "Intel UHD Graphics",
                size: "Monitor not included",
            },
            operation_system: "Windows 11",
            prices:{
                regular_price: 949.99,
                sale_price: 800.00,
            },
            quantity: 22,
            rating: 4,
            year_release: "2022-05-02",
            images:
                [{
                image: ""
                }],
          },
          {
            name: ` Apple Macbook Pro`,
            description: ` Apple Macbook Pro A1398 15.4"(Mid 2015 Retina Display) 
            Intel-Core i7 (2.5GHz)/16GB RAM /256GB SSD/MacOS`,
            category:{
                type: "Laptop",
                brand: "Apple",
                model: "Macbook Pro A1398",
            },
            processor: {
                type:"Intel Core i8 4 cores",
                speed:"2.8 GHz",
            },
            storage:{
                ram_size: "8 GB",
                type: "DDR-4",
                disk: "Serial ATA Drive @ 5400 rpm",
            },
            display:{
                graphics_card: "Intel Iris Pro Graphics 6200",
                size: `14"`,
            },
            operation_system: "OS X El Capitan",
            prices:{
                regular_price: 2099.99,
                sale_price: 2099.99,
            },
            quantity: 25,
            rating: 4,
            year_release: "2023-10-15",
            images:
                [{
                image: ""
                }],
          },
          {
            name: `MSI Codex R Gaming PC`,
            description: `Redefine modern gaming with the MSI Codex R gaming PC. 
            Powered by the Intel Core i5 CPU and NVIDIA RTX graphics, you can expect 
            superior performance in gaming, content creating, and other demanding tasks.
             This desktop also offers 1TB of space to stash your gaming collection and 
             includes customizable lighting effects to set your own unique look.`,
            category:{
                type: "Desktop",
                brand: "MSI Codex",
                model: "Codex R 12NUC5-066CA",
            },
            processor: {
                type:"Intel Core i5-12400F",
                speed:"2.5 GHz",
            },
            storage:{
                ram_size: "16 GB",
                type: "DDR5 4800MHz",
                disk: "1 TB",
            },
            display:{
                graphics_card: "NVIDIA GeForce RTX 4060",
                size: `Monitor not included`,
            },
            operation_system: "Windows 11 Home",
            prices:{
                regular_price: 1199.99,
                sale_price: 1099.99,
            },
            quantity: 18,
            rating: 4,
            year_release: "2022-10-15",
            images:
                [{
                image: ""
                }],
          }
    ]

    await Computer.insertMany(computers)
    console.log("Created some computers")

}


const run = async () => {
    await main()
    db.close()
    }
    
run()
