chrome.runtime.sendMessage({ todo: "showPageAction" });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "changeColor") {
        var addColor = '#' + request.clickedColor;
        $('.type--h6').css('font-style', 'italic');
        $('.type--h6').css('color', addColor);
    }

});
var myDiv = document.createElement("div");
myDiv.innerHTML = `<form id="info-form">
<select class= "form-element" name = "prod-dropdown" id = "prod-dropdown" >
    <option value="" selected disabled>Product name</option>
        </select>
        <input class="form-element" type="text" id="contact-date" placeholder="Next contact date" />
        <select class="form-element" id="prodStage">
            <option value="" selected disabled>Product stage</option>
        </select>
        <select class="form-element" id="latestJob">
            <option value="" selected disabled>Latest job</option>
        </select>
        <input type="text" class="form-element" id="description" placeholder="Description" />
        <input type="submit" id="submit-btn" value="Finish">
    </form>`;
document.body.prepend(myDiv);


