
function TriangleArea(base = 5, height = 4) {
    const area = (base * height) / 2;
    console.log(`Площа трикутника з основою ${base} та висотою ${height} дорівнює ${area}`);
}


function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}


Jet.AssignPilot = function(jet, name, yearsOfExperience, hasChildren) {
    jet.pilot = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasChildren: hasChildren
    };
};


function EquilateralTriangle(equalSide) {
    this.equalSide = equalSide;
}


EquilateralTriangle.prototype.getEqualSide = function() {
    return this.equalSide;
};


EquilateralTriangle.calculateArea = function(equalSide, base) {
    const a = equalSide;
    const b = base;
    return (b / 4) * Math.sqrt(4 * Math.pow(a, 2) - Math.pow(b, 2));
};




TriangleArea();


const myJet = new Jet("blue", 800, 40000, "Boeing", "New York");
Jet.AssignPilot(myJet, "John Doe", 10, true);
console.log(myJet);


const triangle = new EquilateralTriangle(5);
console.log("Equal Side:", triangle.getEqualSide());

console.log("Area of Equilateral Triangle:", EquilateralTriangle.calculateArea(triangle.getEqualSide(), triangle.getEqualSide()));
