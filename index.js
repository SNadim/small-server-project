const submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
    const name = document.getElementById("name").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comment").value;
    const comment = {
        userName: name,
        userTelephone: telephone,
        userEmail: email,
        userComment: comments
    }
    newComment(comment);
   //display(name, telephone, email, comments);
});




function newComment(commentInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(commentInfo),
                    headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => display(data));
}



function display(commentObj) {
    
    const user = document.getElementById("comments")
    const li = document.createElement("li");
    const userName = document.createElement("p");
    const userEmail = document.createElement("p");
    const userTelephone = document.createElement("p");
    const userComment = document.createElement("p");
    userName.innerText = commentObj.userName;
    userEmail.innerText = commentObj.userEmail;
    userTelephone.innerText = commentObj.userTelephone;
    userComment.innerText = commentObj.userComment;
    li.appendChild(userName);
    li.appendChild(userEmail);
    li.appendChild(userTelephone);
    li.appendChild(userComment);
    user.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    
}