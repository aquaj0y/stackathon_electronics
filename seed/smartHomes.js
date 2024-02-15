const db = require('../db')
const { SmartHome } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const smartHomes = [
    {
      name: 'Google Nest Doorbell',
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyMBnilYaI-1-1Mp3i7scwjwn8TIgCPVz5vkitxN3m7NFcF0T0AHPco0DTGrql6t-wQihdgwv1NClgIDnhqbFFw1sg8WWakXva8KPj74WozPxFHYF8PUpppv6i-QW1uv6vALlySpi7i7w&usqp=CAc',
      brand: 'Google',
      price: 179.98,
      color: ['snow', 'carbon'],
      productDetails: 'The 2nd-gen wired Nest Doorbell is always on, so you can know what’s happening at your front door around the clock.',
      review: 'Really love this ringbell',
      onSale: false
    },    
    {
      name: "EcoTherm Smart Thermostat",
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC7n7MDtpYr_Nsn062LcnVT0qGU6N3HfJ7BAEBH8gv_g_-24VQFlR0W4Q4d8AmFzdYksaSUifw_Xay-5C-rtcrByemeGN2_tEi9lb1dE7PxOk_chVCnaM9GCh5nXnrNzs6nw0dEo4&usqp=CAc',
      brand: "EcoHome",
      price: 249.99,
      color: ["White", "Almond", "Ivory", "Black"],
      productDetails: "EcoTherm Smart Thermostat adapts to your schedule, optimizes temperature for comfort and savings, and can be controlled from anywhere with your smartphone.",
      review: "Transformed my home's comfort and cut down on energy bills!",
      onSale: true
    },
    {
      name: "Sentinel Vision Pro",
      img: 'https://media.wired.com/photos/64bad9e4e416fd283a85c5de/master/w_960,c_limit/HTC-Vive-Flow-Gear.jpg',
      brand: "Sentinel",
      price: 199.99,
      color: ["Aqua", "Coral", "Ocean", "Pearl"], 
      productDetails: "Sentinel Vision Pro offers 24/7 surveillance with high-definition video, night vision, and motion alerts to keep your home secure.",
      review: "Crystal clear footage and the alerts are always on point!",
      onSale: false
    },
    {
      name: "LumiBright 360",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1l4lne1HTLgX_qXn2RbPSnmiuObrsa3bRw&usqp=CAU',
      brand: "Lumi",
      price: 129.99,
      color: ["Slate", "Silver", "Pearl", "Charcoal"],
      productDetails: "LumiBright 360 provides customizable and energy-efficient LED lighting that can be adjusted for mood, activity, or time of day, all controlled via an intuitive app.",
      review: "Lighting customization is fantastic and really sets the ambiance!",
      onSale: true
    },
    {
      name: "AquaGuard Smart Leak Detector",
      img: 'https://cdn.thewirecutter.com/wp-content/media/2022/05/leaksensor-2048px-2.jpg?auto=webp&quality=75&width=1024',
      brand: "AquaTech",
      price: 99.99,
      color: ["Aqua", "Sky", "Lavender"],
      productDetails: "AquaGuard Smart Leak Detector provides real-time water leakage detection and alerts, helping prevent costly water damage by catching leaks early.",
      "review": "Peace of mind knowing my home is protected from water leaks!",
      onSale: false
    }
  ]

    await SmartHome.insertMany(smartHomes)
    console.log("Created some Smart Homes!")
}
const run = async () => {
    await main()
    db.close()
}

run()