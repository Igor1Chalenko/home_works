
function getAvgMark(){
    let sumMark = this.marks.reduce((sum, current) => sum + current, 0);
    return sumMark / this.marks.length;
}

function getMaxMark(){
    return Math.max.apply(null, this.marks);
}

function getMinMark(){
    return Math.min.apply(null, this.marks);
}

function getTotal(){
    return this.marks.reduce((sum, current) => sum + current, 0);
}

function getInfo(){
    return `name - ${this.name}, faculty - ${this.faculty}, total - ${this.getTotal()}`;
}

function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
    this.getAvgMark = getAvgMark;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
}

student = new Student("Viktor Novikov", "back-end", [8,7,10,6]);

console.log(student.getAvgMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());

