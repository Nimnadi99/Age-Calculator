const dateInput = document.querySelector(".dateInput");
const calButton = document.querySelector(".calculateButton");
const inputYear = document.querySelector(".year");
const inputMonth = document.querySelector(".month");
const inputDate = document.querySelector(".day");
const currentAge  = document.querySelector(".currentAge");

//How to disable future date in datepicker using JavaScript?---------------------------------------------//
const today = new Date().toISOString().split('T')[0];
  // console.log(currentDate); //Fri Feb 16 2024 19:42:02 GMT+0530 (India Standard Time)
    // console.log(currentDate.toISOString()); //2024-02-16T14:12:36.892Z
    // console.log(currentDate.toISOString().split('T')); //(2) ['2024-02-16', '14:13:22.177Z']
    // /*(2) ['2024-02-16', '14:13:22.177Z']
    //     0 : "2024-02-16"
    //     1 : "14:13:22.177Z"*/
    // console.log(currentDate.toISOString().split('T')[0]); //2024-02-16
dateInput.setAttribute("max",today);
//-------------------------------------------------END-------------------------------------------------//

function dataDisplay(){
    //Current Date 
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = (currentDate.getMonth()+1);
    let currentDay = currentDate.getDate();
    let currentYearMonthAllDays = getDaysInMonth(currentMonth,currentYear);

    //User Birthdate
    let UserBirthDate = new Date(dateInput.value);
    let UserBirthyear = UserBirthDate.getFullYear();
    let UserBirthMonth = (UserBirthDate.getMonth()+1);
    let UserBirthDay = UserBirthDate.getDate();
    //Age in Current values
    let ageInYears = currentYear - UserBirthyear;
    let ageInMonths = currentMonth - UserBirthMonth;
    let ageInDays = currentYearMonthAllDays - UserBirthDay;

     //Display Current Age values in Web page
    if(ageInMonths<0){
        let correntMonthsGap = ageInMonths += 12;
        inputMonth.innerHTML = correntMonthsGap;
    }else{
        inputMonth.innerHTML = ageInMonths;
    }


    inputYear.innerHTML = ageInYears;
    inputDate.innerHTML = ageInDays;
   
    
    currentAge.style.display = "block";
}

function getDaysInMonth(year, month){
    return new Date(year,month,0).getDate();
}