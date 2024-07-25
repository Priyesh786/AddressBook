let prompt = require('prompt-sync')();


/*     INPUT USERS      */

let employee_details = [];

function add_user(){
    const user_name = prompt("Enter Your Full-Name : ");
    const user_id = prompt("Enter Your Employee-ID : ");
    const user_email = prompt("Enter Your email-ID : ");
    const user_city = prompt("Enter Your City : ");
    const user_ph_no = prompt("Enter Your Phone Number : ");
    const user_state = prompt("Enter Your State : ");
    
    let user_obj = {full_name: user_name, employee_id: user_id, email: user_email, city: user_city, phone_no: user_ph_no, state: user_state}
    employee_details.push(user_obj);
}


/*    GET USER BY FULL NAME     */

function get_user_by_full_name()
{
const f_name = prompt("Enter the full name of the user :")
const result = employee_details.find(name => name.full_name === f_name);

if(!result) {
    console.log("User doesn't exist.")
    return;
}
console.log("User exists.");
console.log(`Full Name: ${result.full_name}`);
console.log(`Employee ID: ${result.employee_id}`);
console.log(`Email ID: ${result.email}`);
console.log(`City: ${result.city}`);
console.log(`Phone Number: ${result.phone_no}`);
console.log(`State: ${result.state}`);
}

