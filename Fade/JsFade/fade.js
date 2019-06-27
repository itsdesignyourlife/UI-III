

class Section {
    constructor(people) {
        this.element = people;
        this.tab = people.dataset.tab;
        this.person = document.querySelector(`.about[data-about='${this.tab}']`);
        this.element.addEventListener('click',() => this.show());
        //this.person = Array.from(this.person).map(card => new TabCard(card));
        console.log(people)
    }   

    noshow() {
        document.querySelector('.active').classList.toggle('active')
        document.querySelector('.tab-active').classList.toggle('tab-active')

    }

    show() {
        this.noshow();
        this.person.classList.toggle('active');
        this.element.classList.toggle('tab-active')
    }    
}

let i = 0;

const count = (array) => {
    if (i >= array.length) i =0;
    array[i].click();
    i ++;
}

class About {
    constructor (people) {
        this.element = people;
        this.abouts = Array.from(document.querySelectorAll('.about'))
        this.tab = Array.from(document.querySelectorAll('.tab'))
        this.setInterval();
        console.log(people)
        console.log(this.abouts)
    }

    setInterval() {
        setInterval(count, 5000, this.tab)
    }
}


document.querySelectorAll(".tab").forEach(tabs => new Section(tabs)) 
let abouts = document.querySelectorAll('.abouts')
abouts = new About(abouts)






