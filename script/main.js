let wickets = 0
let runs = 0
let overs = 0
let balls = 0
let totalBalls = 0
let Runs = []
let currentInning = 1;
let timelineForOver = []
// let timeline = []
let timelineOver = []
let freeHitActive = false
let freeHitBall = 0
let team1name
let team2name
let maxOver 


document.addEventListener('DOMContentLoaded', () => {
    let wicketButton = document.getElementById('wicketButton')
    wicketButton.addEventListener('click', wicket);

    let oneButton = document.getElementById('oneButton')
    oneButton.addEventListener('click', one);

    let zeroButton = document.getElementById('zeroButton')
    zeroButton.addEventListener('click', zero)

    let twoButton = document.getElementById('twoButton')
    twoButton.addEventListener('click', two)

    let threeButton = document.getElementById('threeButton')
    threeButton.addEventListener('click', three)

    let fourButton = document.getElementById('fourButton')
    fourButton.addEventListener('click', four)

    let fiveButton = document.getElementById('fiveButton')
    fiveButton.addEventListener('click', five)

    let sixButton = document.getElementById('sixButton')
    sixButton.addEventListener('click', six)

    let declareButton = document.getElementById('declareButton')
    declareButton.addEventListener('click', declare)

    let wideButton = document.getElementById('wideButton')
    wideButton.addEventListener('click', wide)

    let byeButton = document.getElementById('byeButton')
    byeButton.addEventListener('click', bye)

    let legByeButton = document.getElementById('legByeButton')
    legByeButton.addEventListener('click', legBye)

    let noBallButton = document.getElementById('noBallButton')
    noBallButton.addEventListener('click', noBall)

    let undoButton = document.getElementById('undoButton')
    undoButton.addEventListener('click', undo);

    let penaltyBowlButton = document.getElementById('penaltyBowlButton')
    penaltyBowlButton.addEventListener('click', penaltyBowl)

    team1name = localStorage.getItem('team1name')
    team2name = localStorage.getItem('team2name')
    maxOver = localStorage.getItem('maxOver')

    document.getElementById('teamOneName').innerHTML = team1name
    document.getElementById('teamTwoName').innerHTML = team2name
})

const wicket = () => {
    enable()
    document.getElementById('wicketButton').value="W"
    if(freeHitBall >= balls){
        document.getElementById('wicketButton').value="Runout"
    }
    if(wickets<10){
        wickets = wickets + 1
        // balls = balls + 1
        totalBalls = totalBalls + 1
        timelineForOver.push("W")
        // timeline.push("W")
        increaseBalls()
        // updateTimeline();
        toBePrinted()
    }
    else{
        wickets = 0
        runs = 0
        balls = 0
        overs = 0
        totalBalls = 0
    }
}

const one = () => {
    enable()
    runs = runs + 1
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(1)
    // timeline.push(1)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const updateTimeline = () => {
    const timelineElement = document.getElementById('timelineOver');
    timelineElement.innerHTML = timelineForOver.join('  '); 
}

const zero = () => {
    enable()
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(0)
    // timeline.push(0)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const two= () => {
    enable()
    runs = runs + 2
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(2)
    // timeline.push(2)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const three = () => {
    enable()
    runs = runs + 3
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(3)
    // timeline.push(3)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const four = () => {
    enable()
    runs = runs + 4
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(4)
    // timeline.push(4)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const five = () => {
    enable()
    runs = runs + 5
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(5)
    // timeline.push(5)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const six = () => {
    enable()
    runs = runs + 6
    // balls = balls + 1
    totalBalls = totalBalls + 1
    timelineForOver.push(6)
    // timeline.push(6)
    increaseBalls()
    // updateTimeline();
    toBePrinted()
}

const wide = () => {
    enable()
    document.getElementById('declareButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('legByeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    runs = runs + 1
    balls = balls - 1
    totalBalls = totalBalls - 1
    timelineForOver.push("WD")
    // timeline.push("WD")
    // updateTimeline();
    document.getElementById('runs').innerHTML=runs;
}

const bye = () => {
    enable()
    document.getElementById('legByeButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    document.getElementById('declareButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('wideButton').disabled = true
    timelineForOver.push("B")
    // timeline.push("B")
    // updateTimeline();
}

const legBye = () => {
    enable()
    document.getElementById('byeButton').disabled = true
    document.getElementById('legByeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    document.getElementById('declareButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('wideButton').disabled = true
    timelineForOver.push("LB")
    // timeline.push("LB")
    // updateTimeline();
}

const noBall = () => {
    enable()
    document.getElementById('declareButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('legByeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    freeHitBall = balls + 1
    runs = runs + 1
    balls = balls - 1
    totalBalls = totalBalls - 1
    document.getElementById('runs').innerHTML=runs;
    timelineForOver.push("NB")
    document.getElementById('wicketButton').value="Runout"
    freeHitActive = true
    // timeline.push("NB")
    // updateTimeline();
}

const freeHit = () => {
    if(freeHitActive){
        if(freeHitBall === balls){
            freeHitActive = false
        }
    }
}

const undo = () => {
    // decreaseOvers()
    const undoBall1 = timelineForOver[timelineForOver.length-1]
    const undoBall2 = timelineForOver[timelineForOver.length-2]
    if((undoBall2 === 'WD' || undoBall2 === 'NB') && (typeof(undoBall1) === "number" || undoBall1 === 'W')){
        timelineForOver.pop()
        timelineForOver.pop()
        if(typeof(undoBall1) === "number")
            runs = runs - 1 - undoBall1

        else
            wickets = wickets - 1
        
        updateTimeline()
        toBePrinted()
    }
    else if((undoBall2 === 'B' || undoBall2 === 'LB') &&  (typeof(undoBall1) === "number" || undoBall1 === 'W')){
        timelineForOver.pop()
        timelineForOver.pop()
        balls = balls - 1
        if(typeof(undoBall1) === "number"){
            runs = runs - undoBall1
           }
        else{
            wickets = wickets - 1
        }
        updateTimeline() 
        toBePrinted()
    } 
    else if(balls === 0 && timelineForOver[1] === 'W' && (timelineForOver[0] === 'WD' || timelineForOver[0] === 'NB')){
        wickets = wickets - 1
        runs = runs - 1
        timelineForOver.pop()
        timelineForOver.pop()
        document.getElementById('wicket').innerHTML = wickets
    }
    else if(balls === 0 && typeof(timelineForOver[1]) === 'number' && (timelineForOver[0] === 'WD' || timelineForOver[0] === 'NB')){
        runs = timelineForOver[1]
        runs = runs - 1
        timelineForOver.pop()
        timelineForOver.pop()
        document.getElementById('runs').innerHTML = runs
    }
    else if(balls === 0 && timelineForOver[timelineForOver.length-1]){
        runs = runs - 5
        timelineForOver.pop()
        document.getElementById('runs').innerHTML = runs
    }
    else if(timelineForOver == null){
        console.log("hello")
    }
    else {
        timelineForOver.pop()
        if(undoBall1 === 'W'){
            balls = balls - 1
            wickets = wickets - 1
        }
        else if(typeof(undoBall1) === "number"){
            balls = balls - 1
            runs = runs - undoBall1
        }
        else if(undoBall1 === 'WD' || undoBall1 === 'NB'){
            runs = runs - 1
        }
        else if(undoBall1 === 'P(+5)'){
            runs = runs - 5
        }
        updateTimeline()
        toBePrinted()
    }
}

const toBePrinted = () => {
        increaseOvers()
        maxOvers()
        maxWicket()
        document.getElementById('wicket').innerHTML = wickets;
        document.getElementById('runs').innerHTML = runs;
        document.getElementById('overs').innerHTML = overs;
        document.getElementById('balls').innerHTML = balls;
        if(currentInning === 2){
            document.getElementById('target').innerHTML = Runs[0] + 1
        }
        if(totalBalls === 0){
            document.getElementById('runRate').innerHTML = 0;
        }
        else{
            document.getElementById('runRate').innerHTML =((runs/totalBalls)*6).toFixed(2);
        }
        // if(timelineForOver[timelineForOver.length-1] === "NB" || timelineForOver[timelineForOver.length-2] === "NB"){
        //     document.getElementById('wicketButton').value="Runout"
        //     freeHitActive = true
        // }
        freeHit()
        if(freeHitActive === false){
            document.getElementById('wicketButton').value="W"
            freeHitBall = balls + 1
        }
        //  FreeHit()
        winRuns();
}

const increaseOvers = () => {
    if(balls === 6){
        overs = overs + 1
        document.getElementById('wicketButton').value="W"
        timelineOver.push(timelineForOver)
        updateTimeline()
        
        balls=0
    }
    if(balls === 0){
        
        updateTimeline()
        if((timelineForOver[timelineForOver.length - 2] === "WD")){
            
        } 
        else if(timelineForOver[timelineForOver.length - 2] === "NB"){
            
        }   
        else if(timelineForOver[timelineForOver.length - 1] === "P(+5)"){
            
        }
        else{
            timelineForOver = []
            
        }
    }
}

const decreaseOvers = () => {
    if(balls === 0 && overs > 0){
        overs = overs - 1
        balls = 6
        timelineForOver = timelineOver[timelineOver.length - 1]
        // timelineOver.pop()
    }
    else if(balls === 0 && overs === 0){
        overs = 0
        balls = 0
    }
}

const increaseBalls = () => {
    balls += 1
    updateTimeline()
}

const maxOvers = () => {
    // if(overs < (maxOver * 0.2)){
    //     document.getElementById('powerplayStatus').innerHTML = "1 (Max 2 players can be outside 30 yards circle)"
    // }
    // else if((overs >= (maxOver * 0.2)) && (overs < (maxOver * 0.8))){
    //     document.getElementById('powerplayStatus').innerHTML = "2 (Max 4 players can be outside 30 yards circle)"
    // }
    // else{
    //     document.getElementById('powerplayStatus').innerHTML = "3 (Max 5 players can be outside 30 yards circle)"
    // }
    if(overs == maxOver){
        declare()
    }
}

const maxWicket = () => {
    if(wickets === 10){
        declare()
    }
}

const winRuns = () => {
    if(currentInning === 2 && Runs[0] < runs){
        declare()
    }
}

const declare = () => {
    enable();

    if (currentInning === 1) {
        currentInning = 2;
        document.getElementById('currentStatus1').innerHTML="Bowling"
        document.getElementById('currentStatus2').innerHTML="Batting"
        document.getElementById('presentInning').innerHTML="INNING 2"
    } else {
        Runs.push(runs)
        disable()
        const winner = calculateWinner();
    }
    wickets = 0;
    Runs.push(runs)
    runs = 0;
    balls = 0;
    overs = 0;
    totalBalls = 0;
    timelineForOver = []
    // timeline = []
    timelineOver = []

    toBePrinted();
}

const calculateWinner = () => {
    const team1Runs = Runs[0]
    const team2Runs = Runs[1]
    let winner = "";

    if (team1Runs > team2Runs) {
        winner =  team1name;
    } else if (team2Runs > team1Runs) {
        winner =  team2name;
    } else {
        winner =  "Match Tied";
    }
    // currentInning = 1
    // window.location.href = `winner.html?team=${winner}`;
    // alert(`The winner is ${winner}`);
    localStorage.setItem('winner', winner)
    window.location.replace("winner.html")
}

const penaltyBowl = () => {
    runs = runs + 5
    timelineForOver.push('P(+5)')
    updateTimeline()
    toBePrinted()
}

const enable = () => {
    document.getElementById('wicketButton').disabled = false
    document.getElementById('declareButton').disabled = false
    document.getElementById('byeButton').disabled = false
    document.getElementById('legByeButton').disabled = false
    document.getElementById('threeButton').disabled = false
    document.getElementById('fourButton').disabled = false
    document.getElementById('sixButton').disabled = false
    document.getElementById('wideButton').disabled = false
    document.getElementById('zeroButton').disabled = false
    document.getElementById('oneButton').disabled = false
    document.getElementById('twoButton').disabled = false
    document.getElementById('threeButton').disabled = false
    document.getElementById('noBallButton').disabled = false
}

const disable = () => {
    document.getElementById('wicketButton').disabled = true
    document.getElementById('declareButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('legByeButton').disabled = true
    document.getElementById('threeButton').disabled = true
    document.getElementById('fourButton').disabled = true
    document.getElementById('sixButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('zeroButton').disabled = true
    document.getElementById('oneButton').disabled = true
    document.getElementById('twoButton').disabled = true
    document.getElementById('threeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
}
