let coronacases = document.getElementById('coronacase');

fetch('https://data.covid19india.org/data.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const statedata = data.statewise;

        statedata.forEach((details) => {
            coronacases.innerHTML += `
                <tr>
                    <td class="border border-white">${details.state}</td>
                    <td class="border border-white text-warning fw-semibold">${details.active}</td>
                    <td class="border border-white">${details.lastupdatedtime}</td>
                    <td class="border border-white text-success fw-semibold">${details.confirmed}</td>
                    <td class="border border-white text-danger fw-semibold">${details.deaths}</td>
                </tr>`;
        });
    })
    .catch((err) => {
        console.log("error data not found", err);
    });

