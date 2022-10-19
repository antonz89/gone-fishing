const prompt = require('prompt-sync')({sigint: true});

    console.log(`\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish
    for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n`)
    console.log(`==============================================================================\n`)

let caughtFish = [];
let caughtFishCount = 0;


for (let i = 6; i<12; i++){
    if (i === 6){
        console.log(`The time is ${i}:00am. So far you've caught: ${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
            yourCatch();

        console.log(`Your action: [c]atch or [r]elease?`);
            let decision = prompt(`> `);
                while (decision !== 'c' && decision !=='r'){
                    console.log(`Please select [c] or [r]`);
                        decision = prompt(`> `);
                }
        if(decision === "c"){
            console.log(`\nYou chose to keep the fish.`);
            
        } else if (decision === "r"){
                console.log(`\nYou chose to release the fish.`);
                    caughtFish.pop();
                     caughtFishCount--;
        } 
        console.log(`\n==============================================================================\n`);
   
    } else if (i === 7){
        console.log(`The time is ${i}:00am. So far you've caught: ${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
            yourCatch();

        console.log(`Your action: [c]atch or [r]elease?`);
            decision = prompt(`> `);
                while (decision !== 'c' && decision !=='r'){
                  console.log(`Please select [c] or [r]`);
                      decision = prompt(`> `);
                }
        if(decision === "c"){
            console.log(`\nYou chose to keep the fish.`);
        }else if (decision === "r"){
            console.log(`\nYou chose to release the fish.`);
                caughtFish.pop();
                    caughtFishCount--;
        }
         console.log(`\n==============================================================================\n`);

    } else if (i === 8){
        console.log(`The time is ${i}:00am. So far you've caught: ${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
            yourCatch();
                weightCheck();
        console.log(`\n==============================================================================\n`);

    } else if (i === 9){
        console.log(`The time is ${i}:00am. So far you've caught: ${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
            yourCatch();
                weightCheck();
        console.log(`\n==============================================================================\n`);

    } else if (i === 10){
        console.log(`The time is ${i}:00am. So far you've caught: ${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
            yourCatch();
                weightCheck();
        console.log(`\n==============================================================================\n`);

    } else if (i === 11){
        console.log(`The time is ${i}:00am. So far you've caught: ${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}\n`);
            yourCatch();
                weightCheck();
        console.log(`\n==============================================================================\n`);
        
        console.log(`The time is 12:00pm. Times up!\n`)
            console.log(`You caught ${caughtFish.length} fish: `)
                for (let i = 0; i<caughtFish.length; i++){
                    console.log(`*${caughtFish[i].name}, ${caughtFish[i].weight} lbs, $${caughtFish [i].value}`);
                }

                console.log(`\nTotal weight: ${getTotalWeight()} lbs`);
        console.log(`Total value: $${getTotalValue()}`);

    }
}

// -------functions
function generateRandomWeight(){
    let weight = Number((Math.random()*5).toPrecision(3));
    while(weight<1){
        weight = Number((Math.random()*5).toPrecision(3));
    }
    return weight;
}
function generateRandomValue(){
    let value = Number((Math.random()*5).toPrecision(3));
    
    while(value < 0.1){
        value = Number(value.toPrecision(3));
    }
    
    if(value<1){
        value = Number(value.toPrecision(2));
    }
    return value;
}
function generateRandomName(){
    let adjectives = ['Shiny','Red','Dull','Blue','Slimy','Green','Floppy','Silver','Orange','Vibrant','Dry','Silly'];
    let types = ['Salmon','Bass','Trout','Flounder','Perch','Snapper','Cod','Catfish','Grouper','Tuna','Blobfish'];
    let adj1 = adjectives[Math.floor(Math.random()*adjectives.length)];
    let adj2 = adjectives[Math.floor(Math.random()*adjectives.length)];
    let type = types[Math.floor(Math.random()*types.length)];

    while(adj1===adj2){
         adj2 = adjectives[Math.floor(Math.random()*adjectives.length)];
    }
    return `${adj1} ${adj2} ${type}`;
}
function generateRandomFish(){
    let fish = {};
    fish.name = generateRandomName();
    fish.weight = generateRandomWeight();
    fish.value = generateRandomValue();

    return fish
}
function getTotalWeight(){
    let totalWeight = 0;
    for (let i = 0; i < caughtFish.length; i++){
        totalWeight += caughtFish[i].weight;
    }
    return Number(totalWeight.toPrecision(3));
}
function getTotalValue(){
    let totalValue = 0;

    for(let i = 0; i<caughtFish.length; i++){
        totalValue += caughtFish[i].value;
    }
    return Number(totalValue.toPrecision(3));

}
function weightCheck(){
    if(getTotalWeight()<10){
        console.log(`Your action: [c]atch or [r]elease?`)
            decision = prompt(`> `);
                while (decision !== 'c' && decision !=='r'){
                    console.log(`Please select [c] or [r]`)
                        decision = prompt(`> `);
                }
        if(decision === "c"){
            console.log(`\nYou chose to keep the fish.`);
            
        } else if (decision === "r"){
            console.log(`\nYou chose to release the fish.`);
                caughtFish.pop();
                    caughtFishCount--;
        }
    }
    
    if (getTotalWeight()>10){
        console.log(`This fish would put you over 10 lbs, so you release it.`)
            prompt(`Press [enter] to continue.`)
                caughtFish.pop();
                    caughtFishCount--;
    } 
}
function yourCatch(){
    caughtFish.push(generateRandomFish());
        
        console.log(`You caught a ${caughtFish[caughtFishCount].name} weighing ${caughtFish     [caughtFishCount].weight} lbs and valued at $${caughtFish[caughtFishCount].value}\n`);
            caughtFishCount++;
}






