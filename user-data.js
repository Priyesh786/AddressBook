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

