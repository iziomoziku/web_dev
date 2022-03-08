(function (window) {
  let App = window.App || {};
  let $ = window.jQuery;
  class CheckList {
    constructor(selector) {
      if (!selector) {
        throw new Error("No selector provided");
      }
      this.$element = $(selector);
      if (this.$element.length === 0) {
        throw new Error("Could not find element with selector: " + selector);
      }
    }
  }

  function Row(coffeeOrder) {
    let $div = $("<div></div>", {
      "data-coffee-order": "checkbox",
      class: "checkbox",
    });

    let $label = $("<label></label>");

    let $checkbox = $("<input></input>", {
      type: "checkbox",
      value: coffeeOrder.emailAddress,
    });

    let description = coffeeOrder.size + " ";
    if (coffeeOrder.flavor) {
      description += coffeeOrder.flavor + " ";
    }
    description += coffeeOrder.coffee + ", ";
    description += " (" + coffeeOrder.emailAddress + ")";
    description += " [" + coffeeOrder.strength + "x]";

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  CheckList.prototype.addRow = function (coffeeOrder) {
    // Create a new instance of a row, using the coffee order info
    let rowElement = new Row(coffeeOrder);
    // Add the new row instance's $element property to the checklist
    this.$element.append(rowElement.$element);
  };

  App.CheckList = CheckList;
  window.App = App;
})(window);
