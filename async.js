async function assignment(){
    let answer = await fetch("https://swapi.dev/api/people")
    let answer2 = await answer.json();
    console.log("556453", answer2)
     let realAnswer = answer2.results
     let result = realAnswer.map(people => `<ol> Name: ${people.name} ------ Birth Year: ${people.birth_year} ------- Films: ${people.films} ------ Gender: ${people.gender}</ol>`

     )
     document.body.innerHTML = result.join('')
    }

    


assignment()