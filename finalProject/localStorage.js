function saveTracts() {
    window.localStorage.setItem('tractList', JSON.stringify(tracts));
    alert("Save Successful")
}

function getLocalTracts() {
    let tracts = window.localStorage.getItem('tractList');
    return JSON.parse(tracts);
}

let tracts = getLocalTracts();
    // If no contacts are found in the local storage a new array is created
    if (tracts === null) {
        tracts = [];
    }