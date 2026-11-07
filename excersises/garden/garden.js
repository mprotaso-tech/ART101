// .click(...) runs this function when the Add button is clicked.
$("#add-button").click(function () {
    // .val() reads the field; .trim() removes spaces at either end.
    let label = $("#item-label").val().trim();

   if (label == "" || label.length > 20) {
        $("#message").text("Creature's name should be no longer than 20 characters");
    }
    else {
        // HTML inside $(...) creates a new element, not yet on the page.
        let item = $("<li></li>");
        // .text(...) sets its label literally, including < and >.
        item.text(label);
        // .append(...) adds it after the existing list items.
        $("#items").append(item);
        // Clear the field and return focus for the next item.
        $("#item-label").val("");
        $("#item-label").focus();
        $("#message").text("");
    }
});