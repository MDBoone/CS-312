const addTable = (req, res) => {
    res.render("renderTables", {});
};

const getValues = (req, res) => {
    const { dimensions, colors } = req.body;
    if (!dimensions || !colors || !confirm) {
        console.log("The fields must not be empty");
    }
    else{
        if((dimensions < 1) || dimensions > 26){
            console.log('Row and Column value is out of range');
        }
        else if((colors < 1) || (colors > 10)){
            console.log('Color value is out of range');
        }
        else{
            res.render("renderTables",{dimensions, colors,});
            createTableOne(colors);
        }

    }
};

function createTableOne(colors){
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');

    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    for (let i = 0; i < 2; i++){
        let row = document.createElement("tr");
        for (let j = 0; j <colors; j++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
    }
    tableBody.appendChild(rowOne);
    tableBody.appendChild(rowTwo);
    body.appendChild(table);

}

module.exports = {
    addTable,
    getValues,
};