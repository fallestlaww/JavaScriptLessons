function alert() {
    console.log("--------------------")
}

function Robot() {
    let self = this
    self.work = function () {
        console.log("Я Robot - я просто працюю")
    }
}

function CoffeeRobot() {
    Robot.call(this)
    let self = this
    self.work = function () {
        console.log("Я CoffeRobot – я варю каву")
    }
}

function RobotDancer() {
    Robot.call(this)
    let self = this
    self.work = function () {
        console.log("Я RobotDancer – я просто танцюю")
    }
}

function RobotCoocker() {
    Robot.call(this)
    let self = this
    self.work = function () {
        console.log("Я RobotCoocker – я просто готую")
    }
}

let robot = new Robot()
let coffeerobot = new CoffeeRobot()
let dancerrobot = new RobotDancer()
let coockerrobot = new RobotCoocker()

robot.work()
coffeerobot.work()
dancerrobot.work()
coockerrobot.work()

let robots = [robot, coffeerobot, dancerrobot, coockerrobot]
alert()
for (let i = 0; i < robots.length; i++) {
    robots[i].work()
}