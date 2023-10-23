(function () {
  var field_index = 2;
  var FieldAdderRemover = {};

  function updateFields() {
    let i = 1;
    Array.from(document.querySelectorAll(".field .field_title")).forEach(el => {
      el.textContent = "Field " + i++;
    });
  }

  FieldAdderRemover.addField = function (containerId) {
    let field_clone = document.querySelector(".field").cloneNode(true);
    for (prop of ["name", "for", "id"]) {
      Array.from(field_clone.querySelectorAll("[" + prop +"]")).forEach(el => {
        let current_prop = el.getAttribute(prop);
        el.setAttribute(prop, current_prop.replace("1", field_index));
      });
    }
    document.querySelector("#" + containerId).appendChild(field_clone);
    updateFields();
    field_index++;
  };

  // Expose the FieldAdderRemover object for use by consumers
  if (typeof window !== 'undefined') {
    window.FieldAdderRemover = FieldAdderRemover;
  } else if (typeof module === 'object' && module.exports) {
    module.exports = FieldAdderRemover;
  }
})();
