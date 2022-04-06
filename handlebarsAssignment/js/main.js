var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://reqres.in/api/users?page=1');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    // console.log(data);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(ReqResUsers){
  var rawTemplate = document.getElementById("dataTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(ReqResUsers);

  var dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = ourGeneratedHTML;
}