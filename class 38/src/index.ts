// tuple
// const number: [string, Number] = ["Math", 465]

const number: number = 20
// type numberType=Number

// const circleRadius = 20

// const findDiameter = (rad: number): number => {
//     return rad * 2
// }
// const findCircumfance = (rad: number): number => {
//     return rad * 2 * Math.PI
// }

// console.log(findDiameter(circleRadius));
// console.log(findCircumfance(circleRadius));
// class Shap {
//     protected color;
//     constructor(color: string) {
//         this.color = color
//     }
// }
// class Circle extends Shap {
//     private radius;
//     constructor(radius: number, color: string) {
//         super(color)
//         this.radius = radius
//     }
//     public printVal() {
//         console.log('this is radius', this.radius, this.color);
//     }
// }
// const newObj = new Circle(20, 'red')
// console.log(newObj.printVal());

// class 38
// class A {
//     public display = () => {
//         console.log("display A");
//     }
// }
// class B extends A {
//     public display = () => {
//         console.log("display B");
//     }
// }
// const obj=new A()
// obj.display()
// const obj2=new B()
// obj2.display()

const getInfo = async () => {
    try {
        const a = await setTimeout(() => {
            console.log("Set Time");

        }, 3000)
        console.log('a', a);
    } catch (error) {
        console.log('error', error);

    }
    finally {
        console.log('finally');

    }
}
getInfo()
