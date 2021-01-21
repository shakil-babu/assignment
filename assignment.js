




// kilometer to meter
function kilometerToMeter(kilometer){
    if(kilometer <=0){
        return "Distance can't be negative!"
    }else{
        let meter = kilometer * 1000 ;
        return meter ;
    }
}
let Meter= kilometerToMeter(-199);
console.log(Meter);



// budget calculator

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){
    if(numberOfWatch <= 0 || numberOfPhone <= 0 || numberOfPhone <=0){
        return 'Invalid input number!'
    }else{
        let watchPrice = numberOfWatch * 50 ;
        let phonePrice = numberOfPhone * 100 ;
        let laptopPrice = numberOfLaptop * 500 ;
        let totalPrice = watchPrice + phonePrice + laptopPrice ;
        return totalPrice ;
    }
 
}

let total_price = budgetCalculator(2,-1,5);
console.log(total_price);




// hotel cost

function hotelCost(day){
    let totalHotelCost ;
    if(day <=10 && day>=1){
        totalHotelCost = day * 100 ;
    }else if(day > 10 && day <=20){
        totalHotelCost = day * 80 ;
    }else if(day > 20){
        totalHotelCost = day * 50 ;
    }else{
        return 'Invalid number!' ;
    }
    return totalHotelCost ;
}

let totalCost = hotelCost(13);
console.log(totalCost);





// mega friend

function megaFriend(friends){
    if(friends.length == 0){
        return 'Emty array is not allowed!'
    }else{
        let mega_friend = friends[0];
        for(let i = 0 ; i<friends.length ; i++){
            if(friends[i].length > mega_friend.length){
                mega_friend = friends[i] ;
            }
        }
        return mega_friend ;
    }
}

let largeFriend = megaFriend(['Shakil Babu','Torikus Sadik Raihan','Fahim Morshed']);
console.log(largeFriend);