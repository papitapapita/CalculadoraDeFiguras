class Circle{
    constructor(area, radius, diameter, perimeter){
        this.area = area;
        this.radius = radius;
        this.diameter = diameter;
        this.perimeter = perimeter;
    }
    getArea(){
        return this.area;
    }
    getRadius(){
        return this.radius;
    }
    getDiameter(){
        return this.diameter;
    }
    getPerimeter(){
        return this.perimeter;
    }
    setArea(area){
        this.area = area;
    }
    setRadius(radius){
        this.radius = radius;
    }
    setDiameter(diameter){
        this.diameter = diameter;
    }
    setPerimeter(perimeter){
        this.perimeter = perimeter;
    }
    calcArea(){
        this.area = Math.pow(this.radius,2)*Math.PI;
        return this.area;
    }
    calcPerimeter(){
        this.perimeter = 2*(this.radius)*(Math.PI);
        return this.perimeter;
    }
    calcDiameter(){
        if(this.area != undefined){
            this.diameter = 2*(Math.sqrt(this.area/Math.PI));
        }else if(this.radius != undefined){
            this.diameter = 2*this.radius;
        }else if(this.perimeter != undefined){
            this.diameter = this.perimeter/Math.PI;
        }
        return this.diameter;
    }
    calcRadius(){
        if(this.area != undefined){
            this.radius = Math.sqrt(this.area/Math.PI);
        }else if(this.diameter != undefined){
            this.radius = (this.diameter/2);
        }else if(this.perimeter != undefined){
            this.radius = this.perimeter/(2*Math.PI);
        }
        return this.radius;
    }
}


const result = {
    area: document.querySelector("#area-result"),
    perimeter: document.querySelector("#perimeter-result"),
    diameter: document.querySelector("#diameter-result"),
    radius: document.querySelector("#radius-result")
};

const input = {
    area: document.querySelector("#area-input"),
    perimeter: document.querySelector("#perimeter-input"),
    diameter1: document.querySelector("#diameter1-input"),
    diameter2: document.querySelector("#diameter2-input"),
    diameter3: document.querySelector("#diameter3-input"),
    radius1: document.querySelector("#radius1-input"),
    radius2: document.querySelector("#radius2-input"),
    radius3: document.querySelector("#radius3-input"),
}

let circle = new Circle();

function calcArea(){
    circle.setRadius(parseInt(input.area.value));
    result.area.innerText = circle.calcArea();
}

function calcPerimeter(){
    circle.setRadius(parseInt(input.perimeter.value));
    result.perimeter.innerText = circle.calcPerimeter();
}

function calcDiameter(){
    if(input.diameter1.value != undefined && input.diameter1.value != ""){
        circle.setArea(parseInt(input.diameter1.value));
    }else if(input.diameter2.value != undefined && input.diameter2.value != ""){
        circle.setRadius(parseInt(input.diameter2.value));
    }else if(input.diameter3.value != undefined && input.diameter3.value != ""){
        circle.setPerimeter(parseInt(input.diameter3.value));
    }
    result.diameter.innerText = circle.calcDiameter();
    input.diameter1.value = input.diameter2.value = input.diameter3.value = "";
    circle.setArea(undefined);
    circle.setPerimeter(undefined);
    circle.setRadius(undefined);
}

function calcRadius(){
    if(input.radius1.value != undefined && input.radius1.value != ""){
        circle.setArea(parseInt(input.radius1.value));
    }else if(input.radius2.value != undefined && input.radius2.value != ""){
        circle.setPerimeter(parseInt(input.radius2.value));
    }else if(input.radius3.value != undefined && input.radius3.value != ""){
        circle.setDiameter(parseInt(input.radius3.value));
    }
    result.radius.innerText = circle.calcRadius();
    input.radius1.value = input.radius2.value = input.radius3.value = "";
    circle.setArea(undefined);
    circle.setPerimeter(undefined);
    circle.setDiameter(undefined);
}