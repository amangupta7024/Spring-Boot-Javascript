document.addEventListener("DOMContentLoaded", function(){
    const apiUrl = "http://localhost:8081/getEmp"
    const tableBody = document.getElementById("tableBody");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            data.forEach(employees => {
                const row = document.createElement("tr");
                row.innerHTML= `
                <th> ${employees.id} </th>
                <th> ${employees.name} </th>
                <th> ${employees.age} </th>
                <th> ${employees.salary} </th>
                `

                tableBody.appendChild(row);
            })

        }).catch(error => {
            console.log("error is comming while api calling " + error);
        })
})