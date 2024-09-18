// let useName = 'Anurag';


const user = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    pata:{
        city:'Bangalore',
        pinCode:354953478,
        state:'Karnataka',
        moreDetails:{
            population:4589930534989,
            area:'74354983432 sq km',
        },
    },
    age:15,
    isGraduate:false,
}

// Object.seal(user)
Object.freeze(user)

delete user.useName


