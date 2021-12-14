// let tracts = [{
//          Tract: "1000",
//          ParcelNumber: "100-341-2345",
//          OwnerName: "John Doe",
//          OwnerAddress: "5244 Royal Oaks dr Oroville CA",
//          OwnerPhoneNumber: "209-430-5378",
//          Title: "unchecked",
//          Appraisal: "unchecked",
//          Survey: "unchecked",
//          Negotiations: "unchecked",
//          Escrow: "unchecked",
//          FinalReview: "unchecked"
//      },
//      {
//          Tract: "1100",
//          ParcelNumber: "101-341-2545",
//          OwnerName: "Jane Dillard",
//          OwnerAddress: "5243 Royal Oaks dr Oroville CA",
//          OwnerPhoneNumber: "209-430-5379",
//          Title: "unchecked",
//          Appraisal: "checked",
//          Survey: "unchecked",
//          Negotiations: "unchecked",
//          Escrow: "unchecked",
//          FinalReview: "unchecked"
//      }
// ];

getLocalTracts();
console.log(tracts);

// creates initial tract list when page loads
const tractListUl = document.getElementById("tracts_list");

tracts.forEach(tract => {
    const tractListLi = document.createElement('li');
    tractListLi.innerText = tract.Tract;
    tractListUl.appendChild(tractListLi);
});

function displayTractInformation() {
    // resets the classes before reiterating again
    
    document.getElementById("title").classList.remove("checked");
    document.getElementById("appraisal").classList.remove("checked");
    document.getElementById("survey").classList.remove("checked");
    document.getElementById("negotiations").classList.remove("checked");
    document.getElementById("escrow").classList.remove("checked");
    document.getElementById("fReview").classList.remove("checked");
    let id = getTractNum();
    const tractData = tracts;
    if (tractData !== null) {
        for (t of tractData) {
            if (id == t.Tract) {
                document.getElementById("tNum").innerText = "Tract Number: " + t.Tract;
                document.getElementById("pNum").innerText = "Parcel Number: " + t.ParcelNumber;
                document.getElementById("oName").innerText = "Owner's Name: " + t.OwnerName;
                document.getElementById("oAddress").innerText = "Owner's Address: " + t.OwnerAddress;
                document.getElementById("oPhoneNum").innerText = "Owner's Phone Number: " + t.OwnerPhoneNumber;
                let titleWork = document.getElementById("title").value = t.Title;
                if (titleWork == "checked") {
                    document.getElementById("title").classList.add("checked");
                }
                let appraisalWork = document.getElementById("appraisal").value = t.Appraisal;
                if (appraisalWork == "checked") {
                    document.getElementById("appraisal").classList.add("checked");
                }
                let surveyWork = document.getElementById("survey").value = t.Survey;
                if (surveyWork == "checked") {
                    document.getElementById("survey").classList.add("checked");
                }
                let negotiationsWork = document.getElementById("negotiations").value = t.Negotiations;
                if (negotiationsWork == "checked") {
                    document.getElementById("negotiations").classList.add("checked");
                }
                let escrowWork = document.getElementById("escrow").value = t.Escrow;
                if (escrowWork == "checked") {
                    document.getElementById("escrow").classList.add("checked");
                }
                let fReviewWork = document.getElementById("fReview").value = t.FinalReview;
                if (fReviewWork == "checked") {
                    document.getElementById("fReview").classList.add("checked");
                }
            }



        }
    }


    let y = document.getElementById("intro");
    y.style.display = "none";
    let x = document.getElementById("tractInformation");
    x.style.display = "inline";
    let z = document.getElementById("addTractForm");
    z.style.display = "none";
    
    

    
}

let list = document.getElementById("tractProgressCheckList");

list.addEventListener("click", function(ev){
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);


function getTractNum(){
    let id = document.getElementById("tractSearch").value;
    return id
}



function titleCheck() {
    let id = getTractNum();
    const tractData = tracts;
    for (t of tractData) {
        if (id == t.Tract) {
            if (t.Title === "unchecked") {
            t.Title = "checked";
            } else if (t.Title === "checked")
                t.Title = "unchecked";
        }
    }
    console.log(tracts);    
}

function appraisalCheck() {
    let id = getTractNum();
    const tractData = tracts;
    for (t of tractData) {
        if (id == t.Tract) {
            if (t.Appraisal === "unchecked") {
            t.Appraisal = "checked";
            } else if (t.Appraisal === "checked")
                t.Appraisal = "unchecked";
        }
    }
    console.log(tracts);
}

function surveyCheck() {
    let id = getTractNum();
    const tractData = tracts;
    for (t of tractData) {
        if (id == t.Tract) {
            if (t.Survey === "unchecked") {
            t.Survey = "checked";
            } else if (t.Survey === "checked")
                t.Survey = "unchecked";
        }
    }
    console.log(tracts);
}

function negotiationsCheck() {
    let id = getTractNum();
    const tractData = tracts;
    for (t of tractData) {
        if (id == t.Tract) {
            if (t.Negotiations === "unchecked") {
            t.Negotiations = "checked";
            } else if (t.Negotiations === "checked")
                t.Negotiations = "unchecked";
        }
    }
    console.log(tracts);
}

function escrowCheck() {
    let id = getTractNum();
    const tractData = tracts;
    for (t of tractData) {
        if (id == t.Tract) {
            if (t.Escrow === "unchecked") {
            t.Escrow = "checked";
            } else if (t.Escrow === "checked")
                t.Escrow = "unchecked";
        }
    }
    console.log(tracts);
}

function fReviewCheck(){
    let id = getTractNum();
    const tractData = tracts;
    for (t of tractData) {
        if (id == t.Tract) {
            if (t.FinalReview === "unchecked") {
            t.FinalReview = "checked";
            } else if (t.FinalReview === "checked")
                t.FinalReview = "unchecked";
        }
    }
    console.log(tracts);
}
var br = document.createElement("br");

function createNewTract() {
    
    // create form
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("id", "tractForm");

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
    saveBtn.setAttribute("id", "saveButton");
    saveBtn.setAttribute("onclick", "saveInfo()");
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

    let x = document.getElementById("intro");
    x.style.display = "none";
    let y = document.getElementById("tractInformation");
    y.style.display = "none";
    let z = document.getElementById("addTractForm");
    z.style.display = "inline";
}

function saveInfo() {
    const newTract = new Object();
    newTract.Tract = document.getElementById("numeroRegistrado").value;
    newTract.OwnerName = document.getElementById("nome").value;
    newTract.OwnerAddress = document.getElementById("endereco").value;
    newTract.OwnerPhoneNumber = document.getElementById("numeroTelefone").value;
    newTract.ParcelNumber = document.getElementById("numeroTerreno").value;
    newTract.Title = "unchecked";
    newTract.Appraisal = "unchecked";
    newTract.Survey = "unchecked";
    newTract.Negotiations = "unchecked";
    newTract.Escrow = "unchecked";
    newTract.FinalReview = "unchecked";
    tracts.push(newTract);
    const tractListLi = document.createElement("li");
    tractListLi.innerText = newTract.Tract;
    tractListUl.appendChild(tractListLi);
    document.getElementById("tractForm").reset();
    saveTracts();
    alert("Save Successful")
    console.log(tracts)
    let theForm = document.getElementById("tractForm");
    theForm.remove();
}

// api space
let articles = [];
var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'pageSize=5&' +
          'apiKey=9445f4240c084802a49f6f0a9de685e3';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

window.addEventListener("load", async (event) => {
    buildList(url);
})


async function buildList(page) {
    let table = document.getElementById("newsAPI");
    table.innerHTML = "";

    let response = null;
    try {
        response = await fetch(page);
    } catch(e) {
        console.error(e);
    }

    if (response.ok) {
        try {
            articles = await response.json();
        } catch(e) {
            console.error(e);
        }

        let tableBody = document.createElement("tBody");
        table.appendChild(tableBody);

        for (let row of articles.articles) {
            let address = articles.url;
            let tr = document.createElement("tr");
            tableBody.appendChild(tr);
            
            
            let td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = row.title;
            td.dataset.detail = row.url;
            td.style.cursor = "pointer";
            td.setAttribute("onclick", "location.href= 'https://www.bbc.com/news'")


        }
    }
}

