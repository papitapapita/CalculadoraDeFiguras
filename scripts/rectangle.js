class Rectangle{
    constructor(area, width, length, diagonal, perimeter){
        this.area = area;
        this.width = width;
        this.length = length;
        this.diagonal = diagonal;
        this.perimeter = perimeter;
    }
    getArea(){
        return this.area;
    }
    getWidth(){
        return this.width;
    }
    getLength(){
        return this.length;
    }
    getDiagonal(){
        return this.diagonal;
    }
    getPerimeter(){
        return this.perimeter;
    }
    setArea(area){
        this.area = area;
    }
    setWidth(width){
        this.width = width;
    }
    setLength(length){
        this.length = length;
    }
    setDiagonal(diagonal){
        this.diagonal = diagonal;
    }
    setPerimeter(perimeter){
        this.perimeter = perimeter;
    }
    calcArea(){
        this.area = this.width * this.length;
        return this.area;
    }
    calcPerimeter(){
        this.perimeter = 2*(this.length+this.width);
        return this.perimeter;
    }
    calcDiagonal(){
        this.diagonal = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.length, 2));
        return this.diagonal;
    }
    calcLength(){
        if(this.area != undefined){
            this.length = this.area/this.width;
        }else if(this.diagonal != undefined){
            if(this.diagonal>this.length){
                this.length = Math.sqrt(Math.pow(this.diagonal, 2) - Math.pow(this.width, 2))
            }else{
                console.log("Invalid input: make sure d>w");
            }
        }else if(this.perimeter != undefined){
            this.length = (this.perimeter/2) - this.width;
        }
        return this.length;
    }
    calcWidth(){
        if(this.area != undefined){
            this.width = this.area/this.length;
        }else if(this.diagonal != undefined){
            if(this.diagonal>this.length){
                this.width = Math.sqrt(Math.pow(this.diagonal, 2) - Math.pow(this.length, 2))
            }else{
                console.log("Invalid input: make sure d>l");
            }
        }else if(this.perimeter != undefined){
            this.width = (this.perimeter/2) - this.length;
        }
        return this.width;
    }
}
