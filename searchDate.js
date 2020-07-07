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
                let title = document.querySelector("#title");
                let copyright = document.querySelector("#copyright");
                let explanation = document.querySelector("#explanation");

                date.textContent = respostaData.date;
                image.src = respostaData.url;
                title.textContent = respostaData.title;
                copyright.textContent = respostaData.copyright;
                explanation.textContent = respostaData.explanation;
                
            } else {
                alert ("Ocorreu um erro")
            }    
        });
    reqDate.send();                  
})
           