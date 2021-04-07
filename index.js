// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => {return drivers.slice(0,2)
}
returnFirstTwoDrivers()

const returnLastTwoDrivers = () => {return drivers.slice(2, 4)}
returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
selectingDrivers();

function createFareMultiplier(int)
{return function(num){
    return int * num;
};
}

function fareDoubler(fare){return fare * 2}

function fareTripler(fare){return fare * 3}


function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)

}

