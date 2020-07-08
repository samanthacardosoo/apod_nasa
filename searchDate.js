let btnDate = document.querySelector("selectDate");

selectDate.addEventListener("submit", function(){
    event.preventDefault()
    let reqDate = new XMLHttpRequest();         
        reqDate.open("GET", `https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW&date=${this.elements.date.value}`);
        
        reqDate.addEventListener("load", function(event) {
            if(reqDate.status == 200) {
                let respostaData = JSON.parse(reqDate.responseText);
                let date = document.querySelector("#date");
                let image = document.querySelector("#image");
                let frame = document.querySelector("#frame");
                let title = document.querySelector("#title");
                let copyright = document.querySelector("#copyright");
                let explanation = document.querySelector("#explanation");

                date.textContent = respostaData.date;
                title.textContent = respostaData.title;
                copyright.textContent = respostaData.copyright;
                explanation.textContent = respostaData.explanation;

                if (respostaData.media_type == "image") {
                    image.src = respostaData.url;
                    frame.classList.add("invisible");
                    image.classList.remove("invisible")
                } else {
                    frame.src = respostaData.url;
                    image.classList.add("invisible")
                    frame.classList.remove("invisible")
                }
                image.classList.add("image");
                frame.classList.add("video")        
                
            } else {
                alert ("Ocorreu um erro")
            }    
        });
    reqDate.send();                  
})
           