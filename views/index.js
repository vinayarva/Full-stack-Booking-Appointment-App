


function handleFormSubmit(event) {
  event.preventDefault();

  const editID =  document.getElementById("userID").value
    
  const userDetail = {
    username: event.target.username.value,
    phoneNumber: event.target.phoneNumber.value,
    email: event.target.email.value,
  };

  if(editID){
            axios.put("http://localhost:4000/edit/"+editID  , userDetail).then(res => console.log(res)).catch((err)=> console.log(err))

  }else{
    axios
    .post("http://localhost:4000/", userDetail)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

    

    document.getElementById("username").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";

    window.location.reload();  
}

document.addEventListener("DOMContentLoaded", (event) => {
  axios.get("http://localhost:4000/").then((response) => {
    const users = response.data;

    for (let i = 0; i < users.length; i++) {
        displayUser(users[i])
    }
  });
});

function displayUser(user){

    const ul = document.getElementById("items")
    const li = document.createElement("li");
    li.className = "list"
    li.innerText = `${user.username}  ${user.phoneNumber}  ${user.email}`;
     li.style.wordSpacing = "20px"

    const delete_btn = document.createElement("button")
    delete_btn.className = "delete_btn"
    delete_btn.innerText = "Delete"
    delete_btn.style.margin = "5px"

    const edit_btn = document.createElement("button")
    edit_btn.className = "edit_btn"
    edit_btn.innerText = "Edit"
    edit_btn.style.margin ="5px"

    delete_btn.addEventListener("click",(event)=>{
        const element =  event.target.parentElement
        ul.removeChild(element)
        axios.delete("http://localhost:4000/delete/"+user.id).then(res => console.log(res)).catch((err)=> console.log(err))

    })

    edit_btn.addEventListener("click",(event)=>{
        // const element =  event.target.parentElement
        // ul.removeChild(element)    
        document.getElementById("username").value = user.username;
        document.getElementById("phoneNumber").value = user.phoneNumber;
        document.getElementById("email").value = user.email;

        document.getElementById("userID").value = user.id  //storing the id in the hidden input
        
    })

    
    li.appendChild(edit_btn)
    li.appendChild(delete_btn)
   

    ul.appendChild(li)
}
