class libro{
    constructor(name,date,format,price,img,url,id,autor){
        
        this.name = name
        this.date = date
        this.format = format
        this.price = price
        this.img = img
        this.url = url
        this.id = id
        this.autor = autor
    }
}


const volumen1 = new libro("Cat And Mouse","1 Dic 1990","Paperback",2.224,"./assets/images/catAndMouse.jpg","https://www.bookdepository.com/es/Cat-Mouse-M-J-Arlidge/9781409188506?ref=grid-view","001","M. J. Arlidge",) 
const volumen2 = new libro("Cuenta a las abejas que me fui","3 Mar 1991","Paperback",2.479,"./assets/images/Cuenta a las abejas que me fui.jpg","https://www.bookdepository.com/es/Cuenta-las-abejas-que-me-fui-Saga-Outlander-9-Diana-Gabaldon/9788418107856?ref=grid-view&qid=1655427571695&sr=1-1","002","Diana Gabaldon",)
const volumen3 = new libro("Great Circle","31 Oct 1991","Paperback",2.290,"./assets/images/great circle.jpg","https://www.bookdepository.com/es/Great-Circle-Maggie-Shipstead/9781529176643?ref=grid-view&qid=1655427653240&sr=1-2","003","Maggie Shipstead",)
const volumen4 = new libro("World of Warcraft: Arthas : Rise of the Lich King","29 Feb 1992","Paperback",2.252,"./assets/images/worldofwarcraft.jpg","https://www.bookdepository.com/es/World-Warcraft-Arthas-Christie-Golden/9781439157602?ref=grid-view&qid=1655427695951&sr=1-2","004","Christie Golden",)


const LibrosBaratos = [volumen1, volumen2]
const LibrosCaros = [volumen3, volumen4]
let TodosLosLibros = [...LibrosBaratos, ...LibrosCaros]
console.log(TodosLosLibros)