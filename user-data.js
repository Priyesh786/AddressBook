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



/*   GET USER BY EMPLOYEE ID   */

function get_user_by_ID()
{
const emp_id = prompt("Enter the Employee ID of the user :")
const result = employee_details.find(id => id.employee_id === emp_id);

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



/*   UPDATE USER    */

function user_update()
{
    const check = prompt("Enter the Full name or Employee ID of user you want to update :")
    const result1 = employee_details.find(name => name.full_name === check);
    const result2 = employee_details.find(id => id.employee_id === check);
    if(!result1 && !result2) {
        console.log("User doesn't exist.")
        return;
    }

    console.log("User exists.")
    const updated_name = prompt("Enter Your Updated Full Name: ");
    const updated_emp_id = prompt("Enter Your Updated Employee ID: ");
    const updated_email = prompt("Enter Your Updated Email ID: ");
    const updated_city= prompt("Enter Your Updated City Name: ");
    const updated_ph_Number = prompt("Enter Your Updated Phone Number: ");
    const updated_state = prompt("Enter Your Updated state: ");
 
    if(result1)
    {
        result1.full_name = updated_name;
        result1.employee_id = updated_emp_id;
        result1.email = updated_email;
        result1.city = updated_city;
        result1.phone_no = updated_ph_Number;
        result1.state = updated_state;
        return;
    }
    if(result2)
    {
        result2.full_name = updated_name;
        result2.employee_id = updated_emp_id;
        result2.email = updated_email;
        result2.city = updated_city;
        result2.phone_no = updated_ph_Number;
        result2.state = updated_state;
    }
}



/*     DELETE USER      */

function user_delete(){
    const check = prompt("Enter the Full Name or Employee ID of the user to delete  :");
    const result1 = employee_details.findIndex(name => name.full_name === check);
    const result2 = employee_details.findIndex(id => id.employee_id === check);
    if(!result1 && !result2) {
        console.log("User doesn't exist.");
        return;
    }
    console.log("User Deleted.")
    if(result1) {
        employee_details.splice(result1,1);
        return;
    }
    if(result2) {
        employee_details.splice(result2,1);
    }
}



/*    SORT USERS    */

function sort_users() { 
    const sort_by = prompt("Enter the parameter to sort by (full_name, employee_id, email, city, phone_no, state): ");
    if(!['full_name', 'employee_id', 'email', 'city', 'phone_no', 'state'].includes(sort_by)) { 
        console.log("Invalid parameter."); 
        return; 
    } 
    let duplicate_employee_details = [...employee_details]
    duplicate_employee_details.sort((a, b) => { 
        if(a[sort_by] < b[sort_by]) return -1; 
        if(a[sort_by] > b[sort_by]) return 1; 
        return 0; 
    }); 
    console.log(`Users sorted by ${sort_by}:`); 
    duplicate_employee_details.forEach(user => { 
        console.log(
            `Full Name: ${user.full_name}, 
            Employee ID: ${user.employee_id}, 
            Email ID: ${user.email},
            City: ${user.city}, 
            Phone Number: ${user.phone_no}, 
            State: ${user.state}`);
         }); 
}



while(1){
    console.log("Enter 1 to add User");
    console.log("Enter 2 to get user by Full Name");
    console.log("Enter 3 to get user by Employee ID");
    console.log("Enter 4 to update User Details");
    console.log("Enter 5 to delete a user.");
    console.log("Enter 6 to sort a user by any parameter.");
    const operation = prompt("Enter Number to perform operation  ");
    switch(operation)
    {
        case '1':
            add_user();
            break;
   
        case '2':
            get_user_by_full_name();
            break;
   
        case '3':
            get_user_by_ID();
            break;
   
        case '4':
            user_update();
            break;
   
        case '5':
            user_delete();
            break;  

        case '6':  
            sort_users();
            break;                        
    }
}