var elements = [
    {id: "1", name: "Peter", designation: "Producer", salary: 1000},
    {id: "2", name: "Sam", designation: "Director", salary: 2000},
    {id: "3", name: "Nick", designation: "DoP", salary: 1500}
];
var message = {
    "type": "template",
    "payload": {
        "template_type": "table",
        "text": "Account details",
        "columns": [
            ["Sl", "center"], ["Name"], ["Designation"], ["Salary", "right"]
        ],
        "table_design": "regular",
        speech_hint: "Here is your account details",
        elements: []
    }
};
var ele = [];
for (var i = 0; i < elements.length; i++) {
    var elementArr = [elements[i].id, elements[i].name, elements[i].designation, elements[i].salary];
    ele.push({'Values': elementArr});
}
message.payload.elements = ele;
print(JSON.stringify(message));