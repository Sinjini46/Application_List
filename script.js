// Template function that returns a structure with dynamic background color
function appTemplate(app, index) {
  const colors = [
    '#ff6f61', '#6a1b9a', '#00897b', '#3949ab', '#f4511e'
  ];

  // Create the style string using concatenation
  var style = 'background-color: ' + colors[index % colors.length] + ';';

  return {
    tag: "div",
    className: "app-card",
    style: style,  // Apply color dynamically
    children: [
      { tag: "p", text: app.id },
      { tag: "p", text: app.name },
      { tag: "p", text: app.developer }
    ]
  };
}

// Fetch and render data
fetch('data.json')
  .then(response => response.json())
  .then(appData => {
    const container = document.getElementById("app-container");

    appData.applications.forEach((app, index) => {
      const template = appTemplate(app, index);

      const card = document.createElement(template.tag);
      if (template.className) card.className = template.className;
      if (template.style) card.setAttribute('style', template.style); // Apply dynamic style

      // Add children directly
      template.children.forEach(child => {
        const children = document.createElement(child.tag);
        children.textContent = child.text;
        card.appendChild(children);
      });

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
