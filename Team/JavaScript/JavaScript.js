class Carousel {
    constructor(elements) {
        this.elements = elements;
        this.imgdata = this.elements.dataset.tab
        this.team = document.querySelectorAll(`.team[data-tab="${this.imgdata}"]`)
        this.team = Array.from(this.team).map(teams => new button(teams))
        this.elements.addEventListener('click', (event) => {
            this.selectElement()
            })
        }
selectElement(){
        const tabs = document.querySelectorAll(".carousel_button")
        const imgs = document.querySelectorAll(".team")
        
        imgs.forEach(img => img.style.display = "none")
        this.team.forEach(img => img.selectImg())
        this.team.classList.toggle('teams')
    }
}

class button {
    constructor(btnElements) {
    this.btnElements = btnElements;
    }
    selectImg() {
        this.btnElements.style.display = "";
    
    }
}

let tabs = document.querySelectorAll('.carousel_button')
tabs.forEach(tab => new Carousel(tab))



    
