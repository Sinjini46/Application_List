fetch('data.json')
.then(response => response.json())
.then(appData =>{
    appData.applications.forEach(app =>{
        const container=document.getElementById("app-container");
        const appElement=document.createElement("div");
        appElement.className="app-card";
        appElement.innerHTML=`
        <h2>${app.id}</h2>
        <h3>${app.name}</h3>
        <p>${app.developer}</p>
        `;
        container.appendChild(appElement);
    });
}).catch(error => console.error("Error in json",error));