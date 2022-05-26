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
        this.perimeter = 2*(this.side);
        return this.side;
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

const result = document.querySelector("#result");
console.log(value);

document.querySelector("#button").onClick = function(){
    const value = document.querySelector("#value").value;
    let square = new Square();
    square.setSide(value)
    result.innerText = square.calcArea();
}
