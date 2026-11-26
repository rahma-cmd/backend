let userRole="admin";
let accessLevel;
if(userRole==="admin"){
    accessLevel="full access granted";

}else if(userRole==="manager"){
    accessLevel="limied access granted";
}else{
    accessLevel="no acess granted";
}
console.log("Access Level:", accessLevel);
let isLoggedIn=true;
let userMessage;
if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="welcome , admin";
    }else{
        userMessage="welcome user"

    }
}else{
    userMessage="please log in to access the system";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch(userType){
    case "admin":
        userCategory="Adminstrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory ="Subscriber";
        break;
    default:
        userCategory="Unknown";
        
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated":"not authenticated";
console.log("Authentication Status:", authenticationStatus);
