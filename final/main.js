let checklist = ["Title", "Survey", "Appraisal", "Negotiations", "Inspection", "Escrow", "Closed"];

let tracts_info = [{
        tract: "1000",
        "Owner": "John Doe",
        "OwnerAddress": "145 Parkway Oroville",
        "OwnerPhoneNumber": "2095677895",
        "apn": "123456789"
    }

];

const ol = document.getElementById("tractList");
tracts_info.forEach(tract_info => {
    let li = document.createElement('li');
    li.innerText = tract_info.tract;
    ol.appendChild(li);
})

const tractsList = tracts_info.map(tract_info => tract_info.tract);
//console.log(tractores);
function loopThroughTractsInfo() {
    console.log(tracts_info.tract);
}

// global variables
var br = document.createElement("br");

function newTract() {
    var li = document.createElement("li");
    var inputTractValue = document.getElementById("tractInput").value;
    var t = document.createTextNode(inputTractValue);
    li.appendChild(t);
    if (inputTractValue === '') {
        alert("You must enter a value!");
    } else {
        document.getElementById("tractList").appendChild(li);
    }
    document.getElementById('tractInput').value = "";
}

function createNewTract() {
    // create form
    var form = document.createElement("form");
    form.setAttribute("method", "post");

    // input for Tract Number
    var TN = document.createElement("input");
    TN.setAttribute("type", "text");
    TN.setAttribute("id", "numeroRegistrado");
    TN.setAttribute("name", "Tractnumber");
    TN.setAttribute("placeholder", "Tract Number");

    // input for Owner Name
    var ON = document.createElement("input")
    ON.setAttribute("type", "text");
    ON.setAttribute("id", "nome")
    ON.setAttribute("name", "ownerName");
    ON.setAttribute("placeholder", "Owner Name");

    // input for Owner Address
    var OA = document.createElement("input")
    OA.setAttribute("type", "text");
    OA.setAttribute("id", "endereco")
    OA.setAttribute("name", "ownerAddress");
    OA.setAttribute("placeholder", "Owner Address");

    // input for APN Number
    var APN = document.createElement("input");
    APN.setAttribute("type", "text");
    APN.setAttribute("id", "numeroTerreno")
    APN.setAttribute("name", "APN");
    APN.setAttribute("placeholder", "APN");

    // input for Owner Phone number
    var PN = document.createElement("input");
    PN.setAttribute("type", "text");
    PN.setAttribute("id", "numeroTelefone")
    PN.setAttribute("name", "phoneNumber");
    PN.setAttribute("placeholder", "Owner Phone Number")

    // creating the save button
    var saveBtn = document.createElement("input");
    saveBtn.setAttribute("type", "button");
    saveBtn.setAttribute("onclick", "closeTheGap()");
    saveBtn.setAttribute("value", "Save");

    // append items to form
    form.appendChild(TN);
    form.appendChild(br.cloneNode());
    form.appendChild(ON);
    form.appendChild(br.cloneNode());
    form.appendChild(OA);
    form.appendChild(br.cloneNode());
    form.appendChild(APN);
    form.appendChild(br.cloneNode());
    form.appendChild(PN);
    form.appendChild(br.cloneNode());
    form.appendChild(saveBtn);
    // adds to the actual DOM here
    document.getElementById("addTractForm").appendChild(form);

}

function saveInfo() {
    const newTract = new Object();
    newTract.tract = document.getElementById("numeroRegistrado").value;
    newTract.Owner = document.getElementById("nome").value;
    newTract.OwnerAddress = document.getElementById("endereco").value;
    newTract.OwnerPhoneNumber = document.getElementById("numeroTelefone").value;
    newTract.apn = document.getElementById("numeroTerreno").value;
    tracts_info.push(newTract);
    console.log(tracts_info)
}

function addTractToList() {
    const ol = document.getElementById("tractList");
    tracts_info.forEach(tract_info => {
        let li = document.createElement('li');
        li.innerText = tract_info.tract;
        tracts_info.filter(onlyUnique);
        ol.appendChild(li);
    })   
}

// function saveButton() {
//     addTractToList();
//     tractNum = ((document.getElementById("TN") || {}).value) || "";
//     tracts_info.push(tractNum);
// }

function closeTheGap(){
    saveInfo();
    addTractToList()
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function createCheckList() {
    let i = 0
    let theLIst = document.getElementById("checkList")
    let arrayLength = checklist.length;
    for (i; i < arrayLength; i++){
        let li = document.createElement("li");
        li = checklist.value;
        theLIst.appendChild(li);
    }
}

createCheckList();