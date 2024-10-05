 function getAge( firstName , lastName ,age){
    const user ={
        firstName,
        lastName,
        age,
        // getAgeYear(){
        //     return new Date().getFullYear()-user.age;
        // }
    }
    return user;
 }

 function getAgeYear(age){
    return new Date().getFullYear()-age
 }

 const getAge1 = getAgeYear('32');

 const user1  = getAge("Jay", "Singh","23");

