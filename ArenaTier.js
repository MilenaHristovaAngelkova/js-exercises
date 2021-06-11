function arenaTier(input) {
    let gladiator1 = '';
    let gladiator2 = '';
    let gladiatorName = '';
    let gladiatorTechnique = '';
    let gladiatorSkill = 0;
    let gladiatorsDetails = {};

    input.forEach(element => {
        if (element.includes('->')){
        let inputArr2 = element.split(" -> ");
        gladiatorName = inputArr2[0];
        gladiatorTechnique = inputArr2[1];
        gladiatorSkill = Number(inputArr2[2]);

        if (!gladiatorsDetails.hasOwnProperty(gladiatorName)){
            gladiatorsDetails[gladiatorName] = {[gladiatorTechnique]: gladiatorSkill};
        } else if (!gladiatorsDetails[gladiatorName].hasOwnProperty(gladiatorTechnique)){
            gladiatorsDetails[gladiatorName] = {...gladiatorsDetails[gladiatorName], [gladiatorTechnique]: gladiatorSkill};
        } else {
            if (gladiatorsDetails[gladiatorName][gladiatorTechnique] < gladiatorSkill){
                gladiatorsDetails[gladiatorName][gladiatorTechnique] = gladiatorSkill;
            }
        }
        } else if (element.includes('vs')) {
            let parts = element.split(' ');
            gladiator1 = parts[0];
            gladiator2 = parts[parts.length - 1];
            
            if (gladiatorsDetails.hasOwnProperty(gladiator1) && gladiatorsDetails.hasOwnProperty(gladiator2)){
                for (let key of Object.keys(gladiatorsDetails[gladiator1])){
                    if (Object.keys(gladiatorsDetails[gladiator2]).includes(key)){
                        gladiatorsDetails[gladiator1][key] > gladiatorsDetails[gladiator2][key] ? 
                        delete gladiatorsDetails[gladiator2] : delete gladiatorsDetails[gladiator1]
                    }
                }
            }
        }
        });
     
    ///sum all the skills for each gladiator name  
    function skillsSum(object, key) {
        let totalSkill = Object.values(object[key]).reduce((total, innerVal) => total + innerVal,0);       
        return totalSkill;
    }
    for (let key of Object.keys(gladiatorsDetails).sort((a,b) => {
        if (skillsSum(gladiatorsDetails, a) > skillsSum(gladiatorsDetails, b)) {
            return -1;
        } else if (skillsSum(gladiatorsDetails, a) < skillsSum(gladiatorsDetails, b)) {
            return +1;
        }
        })){
        console.log(`${key}: ${skillsSum(gladiatorsDetails, key)} skill`);

        techsAndSkills = gladiatorsDetails[key];
        for (let val of Object.keys(techsAndSkills).sort((a,b) => {
            if (techsAndSkills[a] > techsAndSkills[b]){
                return -1;
            } else if (techsAndSkills[a] < techsAndSkills[b]){
                return +1;
            }
        })){
            console.log(`- ${val} <!> ${techsAndSkills[val]}`);
        }
    }
};

arenaTier(["Pesho -> BattleCry -> 400","Gosho -> PowerPunch -> 300","Stamat -> Duck -> 200","Stamat -> Tiger -> 250","Ave Cesar"]);
arenaTier(["Pesho -> Duck -> 400","Julius -> Shield -> 150","Gladius -> Heal -> 200","Gladius -> Support -> 250","Gladius -> Shield -> 250","Pesho vs Gladius",
"Gladius vs Julius","Gladius vs Gosho","Ave Cesar"]);