class Triangle{
    constructor(area, perimeter, base, height, sideA, sideC, gamma){
        this.area = area;
        this.perimeter = perimeter;
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideC = sideC;
      //this.gamma = gamma;
    }
    getArea(){
        return this.area;
    }
    getSideA(){
        return this.sideA;
    }
    getSideC(){
        return this.sideC;
    }
    getHeight(){
     return this.height;
    }
    getPerimeter(){
        return this.perimeter;
    }
    getBase(){
        return this.base;
    }
    /*getGamma(){
        return this.gamma;
    }*/
    setArea(area){
        if(area > 0 || area == undefined){
            this.area = area;
        }else{
            console.log("Area should be greater than zero");
        }
    }
    setSideA(sideA){
        if(sideA > 0 || sideA == undefined){
            this.sideA = sideA;
        }else{
            console.log("Side A should be greater than zero");
        }
    }
    setSideC(sideC){
        if(sideC > 0 || sideC == undefined){
            this.sideC = sideC;
        }else{
            console.log("Side C should be greater than zero");
        }
    }
    setHeight(height){
        if(height > 0 || height == undefined){
            this.height = height;
        }else{
            console.log("height should be greater than zero");
        }
    }
    setBase(base){
        if(base > 0 || base == undefined){
            this.base = base;
        }else{
            console.log("Base should be greater than zero");
        }
    }
   /* setGamma(gamma){
        if(this.gamma > 0 && this.gamma < 180){
            this.gamma = gamma;
        }else{
            console.log("Valid range for gamma is 0 <gamma < 180");
        }
    }*/
    setPerimeter(perimeter){
        this.perimeter = perimeter;
    }
    calcArea(){
        this.area = (this.height*this.base)/2;
        return this.area;
    }
    calcBase(){
        this.base = 2*(this.area/this.height);
        return this.base;
    }
    calcHeight(){
        this.height = 2*(this.area/this.base);
        return this.height;
    }
    calcSideA(){
        console.log("Hi");
        this.sideA = this.perimeter - this.base - this.sideC;
        return this.sideA;
    }
    /*calcGamma(){
        this.gamma = Math.asin((2*this.area)/(this.sideA*this.base));
        return this.gamma;
    }*/
    calcPerimeter(){
        this.perimeter = this.sideA + this.sideC + this.base;
        return this.perimeter;
    }
    calcSideC(){
        this.sideC = this.perimeter - this.base - this.sideA;
        return this.sideC;
    }
}


const result = {
    area: document.querySelector("#area-result"),
    perimeter: document.querySelector("#perimeter-result"),
    base: document.querySelector("#base-result"),
    height: document.querySelector("#height-result"),
    sideA: document.querySelector("#sideA-result"),
    sideC: document.querySelector("#sideC-result")
};

const input = {
    area1: document.querySelector("#area1-input"),
    area2: document.querySelector("#area2-input"),
    perimeter1: document.querySelector("#perimeter1-input"),
    perimeter2: document.querySelector("#perimeter2-input"),
    perimeter3: document.querySelector("#perimeter3-input"),
    base1: document.querySelector("#base1-input"),
    base2: document.querySelector("#base2-input"),
    height1: document.querySelector("#height1-input"),
    height2: document.querySelector("#height2-input"),
    sideA1: document.querySelector("#sideA1-input"),
    sideA2: document.querySelector("#sideA2-input"),
    sideA3: document.querySelector("#sideA3-input"),
    sideC1: document.querySelector("#sideC1-input"),
    sideC2: document.querySelector("#sideC2-input"),
    sideC3: document.querySelector("#sideC3-input")
}

let triangle = new Triangle();

function calcArea(){
    triangle.setBase(parseInt(input.area1.value));
    triangle.setHeight(parseInt(input.area2.value));
    result.area.innerText = triangle.calcArea();
}

function calcPerimeter(){
    triangle.setSideA(parseInt(input.perimeter1.value));
    triangle.setBase(parseInt(input.perimeter2.value));
    triangle.setSideC(parseInt(input.perimeter3.value));
    result.perimeter.innerText = triangle.calcPerimeter();
}

function calcBase(){
    triangle.setArea(parseInt(input.base1.value));
    triangle.setHeight(parseInt(input.base2.value));
    result.base.innerText = triangle.calcBase();
}

function calcHeight(){
    triangle.setArea(parseInt(input.height1.value));
    triangle.setHeight(parseInt(input.height2.value));
    result.height.innerText = triangle.calcHeight();
}

function calcSideA(){
    triangle.setPerimeter(parseInt(input.sideA1.value));
    triangle.setBase(parseInt(input.sideA2.value));
    triangle.setSideC(parseInt(input.sideA3.value));
    result.sideA.innerText = triangle.calcSideA();
}

function calcSideC(){
    triangle.setPerimeter(parseInt(input.sideC1.value));
    triangle.setBase(parseInt(input.sideC2.value));
    triangle.setSideA(parseInt(input.sideC3.value));
    result.sideC.innerText = triangle.calcSideC();
}