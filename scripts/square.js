class Square{
    constructor(area, side, diagonal, perimeter){
        this.area = area;
        this.side = side;
        this.diagonal = diagonal;
        this.perimeter = perimeter;
    }
    getArea(){
        return this.area;
    }
    getSide(){
        return this.side;
    }
    getDiagonal(){
        return this.diagonal;
    }
    getPerimeter(){
        return this.perimeter;
    }
    setArea(area){
        if(this.area <= 0){
            console.log("The number should be greater than zero");
        }else{
            this.area = area;
        }
    }
    setSide(side){
        if(this.side <= 0){
            console.log("The number should be greater than zero");
        }else{
            this.side = side;
        }
    }
    setDiagonal(diagonal){
        if(this.diagonal <= 0){
            console.log("Diagonal should be greater than zero");
        }else{
            this.diagonal = diagonal;
        }
    }
    setPerimeter(perimeter){
        if(this.perimeter <= 0){
            console.log("The number should be greater than zero");
        }else{
            this.perimeter = perimeter;
        }
    }
    calcArea(){
        this.area = Math.pow(this.side,2);
        return this.area;
    }
    calcPerimeter(){
        this.perimeter = 4*(this.side);
        return this.perimeter;
    }
    calcDiagonal(){
        this.diagonal = Math.sqrt(2)*this.side;
        return this.diagonal;
    }
    calcSide(){
        if(this.area != undefined){
            this.side = Math.sqrt(this.area);
        }else if(this.diagonal != undefined){
            this.side = Math.sqrt(2)*(this.diagonal/2);
        }else if(this.perimeter != undefined){
            this.side = this.perimeter/4;
        }
        return this.side;
    }
}

const result = {
    area: document.querySelector("#area-result"),
    perimeter: document.querySelector("#perimeter-result"),
    diagonal: document.querySelector("#diagonal-result"),
    side: document.querySelector("#side-result")
};

const input = {
    area: document.querySelector("#area-input"),
    perimeter: document.querySelector("#perimeter-input"),
    diagonal: document.querySelector("#diagonal-input"),
    side1: document.querySelector("#side1-input"),
    side2: document.querySelector("#side2-input"),
    side3: document.querySelector("#side3-input")
}

let square = new Square();

function calcArea(){
    square.setSide(input.area.value);
    result.area.innerText = square.calcArea();
}

function calcPerimeter(){
    square.setSide(parseInt(input.perimeter.value));
    result.perimeter.innerText = square.calcPerimeter();
}

function calcDiagonal(){
    square.setSide(parseInt(input.diagonal.value));
    result.diagonal.innerText = square.calcDiagonal();
}

function calcSide(){
    if(input.side1.value != undefined && input.side1.value != ""){
        square.setArea(parseInt(input.side1.value));
    }else if(input.side2.value != undefined && input.side2.value != ""){
        square.setPerimeter(parseInt(input.side2.value));
    }else if(input.side3.value != undefined && input.side3.value != ""){
        square.setDiagonal(parseInt(input.side3.value));
    }
    result.side.innerText = square.calcSide();
    input.side1.value = input.side2.value = input.side3.value = "";
    square.setArea(undefined);
    square.setPerimeter(undefined);
    square.setDiagonal(undefined);
}

