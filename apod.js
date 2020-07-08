let req = new XMLHttpRequest();
    
req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW")
        
req.addEventListener("load", function(){
    if (req.status == 200) {
        let resposta = JSON.parse(req.responseText);
        let date = document.querySelector("#date");
        let image = document.querySelector("#image");
        let frame = document.querySelector("#frame");
        let title = document.querySelector("#title");
        let copyright = document.querySelector("#copyright");
        let explanation = document.querySelector("#explanation");        
    
        date.textContent = resposta.date;
        title.textContent = resposta.title;
        copyright.textContent = resposta.copyright;
        explanation.textContent = resposta.explanation;

        if (resposta.media_type == "image") {
            image.src = resposta.url;
            frame.classList.add("invisible");
        } else {
            frame.src = resposta.url;
            image.classList.add("invisible")
        }
        image.classList.add("image");
        frame.classList.add("frame")

    } else {
        alert ("Ocorreu um erro")
    }
    });

    req.send();
