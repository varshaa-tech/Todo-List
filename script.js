// var newdiv = document.getElementById("text").value;
let count = 1;
function checked(labelid, checkboxid, labelid2) {
    let labelbox = document.getElementById(labelid);
    let labelbox2 = document.getElementById(labelid2);
    let checkbox = document.getElementById(checkboxid);
    labelbox.classList.toggle("checked");
    labelbox2.classList.toggle("checked");
}
function deletethetask(todoid) {

    let todobox = document.getElementById(todoid);
    inbox.removeChild(todobox);
}
const newdiv = document.getElementById("text");
var date = document.getElementById("date");
function editthetask(todoid, labelid, labelid2) {
    let todobox = document.getElementById(todoid);
    let laabelid = document.getElementById(labelid);
    let laabelid2 = document.getElementById(labelid2);
    let button = document.getElementById("change");
    console.log(laabelid);
    newdiv.value = laabelid.textContent;
    date.value = laabelid2.textContent;
}
addthetask.addEventListener("click", function () {

    let checkboxid = "todocheckbox" + `${count}`;
    let labelid = "labelid" + `${count}`;
    let labelid2 = "laabelid" + `${count}`;
    let todoid = "todoli" + `${count}`;
    let image = document.getElementById("image");
    const neewdiv = newdiv.value;
    var date1 = date.value;
    if (neewdiv.trim() !== "" && date1.trim() !== "") {
        let todoli = document.createElement("li");
        todoli.id = todoid;
        todoli.classList.add("todolist2");
        inbox.appendChild(todoli);
        let todocontainer = document.createElement("input");
        todocontainer.type = "checkbox";
        todocontainer.id = checkboxid;
        todocontainer.classList.add("checkbox");
        todocontainer.onclick = function () {
            checked(labelid, checkboxid, labelid2);
        }
        todoli.appendChild(todocontainer);
        let todolabel = document.createElement("label");
        todolabel.setAttribute("for", checkboxid);
        todolabel.innerHTML = `${neewdiv}`;
        todolabel.id = labelid;
        todolabel.classList.add("todolabel");
        todoli.appendChild(todolabel);
        let todolabel2 = document.createElement("label");
        todolabel2.setAttribute("for", checkboxid);
        todolabel2.id = labelid2;
        todolabel2.innerHTML = `${date1}`;
        todolabel2.classList.add("todolabel2");
        todoli.appendChild(todolabel2);
        let button1 = document.createElement("button");
        button1.classList.add("button1");
        button1.textContent = "DELETE";
        button1.id = "deletethetask";
        button1.onclick = function () {
            deletethetask(todoid);
        }
        todoli.appendChild(button1);
        let button2 = document.createElement("button");
        button2.classList.add("button2");
        button2.textContent = "EDIT";
        button2.id = "edit";
        button2.onclick = function () {
            editthetask(todoid, labelid, labelid2);
            deletethetask(todoid);
        }
        todoli.appendChild(button2);
        count++;
        let new2 = document.getElementById("img");
        {
            if (neewdiv.trim() == "Walking") {
                new2.src = "https://cdn.dribbble.com/users/2672479/screenshots/5470786/800_walking.gif";
            }
            else if (neewdiv.trim() == "Sleeping") {
                // let new2 = document.createElement("img");
                new2.src = "https://media1.tenor.com/images/1a87c2eb26e7c67e38a765bdfb1b2e57/tenor.gif?itemid=15962346";
            }
            else if (neewdiv.trim() == "Dinner") {
                new2.src = "https://media0.giphy.com/media/AYjvccWdysTz3Rk9m4/giphy.gif";
            }
            else if (neewdiv.trim() == "Breakfast") {
                new2.src = "https://media1.tenor.com/images/cab14951529ba413caee2384609ad402/tenor.gif?itemid=12408155";
            }
            else if (neewdiv.trim() == "Lunch") {
                new2.src = "https://media1.giphy.com/media/YO4n5zUV6IcsJRvdR1/giphy.gif";
            }
            else if (neewdiv.trim() == "Meditation") {
                new2.src = "https://media.giphy.com/media/10YsDrPztzLcD6/giphy.gif";
            }
            else if (neewdiv.trim() == "Studying") {
                new2.src = "https://media.tenor.com/pHdrrx1ZBTEAAAAC/study.gif";
            }
            else {
                new2.src = "https://th.bing.com/th/id/R.31dd2fb35856801665a09fd6bd044fa9?rik=0NJyXvv0%2fVzpSg&riu=http%3a%2f%2fi.stack.imgur.com%2fPi5r5.gif&ehk=P9RXzjb4npS6%2fAN%2bqPKPn%2f4fWBc%2btKvoVEID6Hf4PhY%3d&risl=&pid=ImgRaw&r=0";
            }
        }
        // image.removeChild(new2);
        newdiv.value = "";
        date.value = "";
    }
    else if (neewdiv.trim() == "") {
        alert("please enter the task");
    }
    else {
        alert("enter the date");
    }
});