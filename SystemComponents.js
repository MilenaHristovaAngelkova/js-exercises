function systemComponents(arr) {
    let names = {};

    arr.forEach(element => {
        let currComponent = element.split(' | ');
        let systemName = currComponent[0];
        let componentName = currComponent[1];
        let subcomponentName = currComponent[2];

        if (!names.hasOwnProperty(systemName)) {
            names[systemName] = {[componentName]: [subcomponentName]};
        } else{
            if(!names[systemName].hasOwnProperty([componentName])) {
                names[systemName] = {...names[systemName], [componentName]: [subcomponentName]};
            } else {
                if(!names[systemName][componentName].hasOwnProperty(subcomponentName)){
                    names[systemName][componentName].push(subcomponentName);
            }
          }  
        }      
    });

    for (let [key, value] of Object.entries(names).sort((a,b) => {
        if ((Object.keys(a[1]).length === Object.keys(b[1]).length)){
            return -1;
        }
    })) {
        console.log(key);

        value = names[key];
        for(let val of Object.keys(value)){
            console.log(`|||${val}`)
            value[val].forEach(element => {
                console.log(`||||||${element}`)
            });
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);