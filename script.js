//adding style and template creation
function appTemplate(app, index) {
  const colors = ['#ff6f61', '#6a1b9a', '#00897b', '#3949ab', '#f4511e'];
  const style = 'background-color: ' + colors[index % colors.length] + ';';

  return {
    tag: "div",
    className: "app-card",
    style: style,
    children: [
      { tag: "p", text: app.id },
      { tag: "p", text: app.name },
      { tag: "p", text: app.developer }
    ]
  };
}

// DOM creation
function createAppCard(template) {
  const card = document.createElement(template.tag);
  if (template.className) card.className = template.className;
  if (template.style) card.setAttribute('style', template.style);

  template.children.forEach(child => {
    const childEl = document.createElement(child.tag);
    childEl.textContent = child.text;
    card.appendChild(childEl);
  });

  return card;
}

// Rendering application
function renderApplications(applications) {
  const container = document.getElementById("app-container");
  container.innerHTML = "";

  applications.forEach((app, index) => {
    const template = appTemplate(app, index);
    const card = createAppCard(template);
    container.appendChild(card);
  });
}

fetch('data.json')
  .then(response => response.json())
  .then(appData => {
    renderApplications(appData.applications);
  })
  .catch(error => console.error("Error loading JSON:", error));
