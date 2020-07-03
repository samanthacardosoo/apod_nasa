
let req = new XMLHTTPRequest();
    
req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW")
        
req.addEventListener("load", function(){
        let resposta = JSON.parse(req.responseText);
        let date = document.querySelector("#date");
        let image = document.querySelector("#image");
        let title = document.querySelector("#title");
        let copyright = document.querySelector("#copyright");
        let explanation = document.querySelector("#explanation");        
    
        date.textContent = resposta.date;
        image.src = resposta.url;
        title.textContent = resposta.title;
        copyright.textContent = resposta.copyright;
        explanation.textContent = resposta.explanation;
    });

    req.send();
