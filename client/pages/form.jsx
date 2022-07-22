import React from 'react';
class Apps extends React.Component {



    submitContact = async (event) => {
        event.preventDefault();
        alert(`So your name is ${event.target.name.value}?`);
      };

    render(){
        return(
            <form className="flex flex-col" onSubmit="{submitContact}" method="post">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" />
                <br />
                <label for="idade">Idade:</label>
                <input type="number" id="idade" name="idade" />
                
                <br />
                <label for="sexo">Sexo:</label>
                <input type="text" id="sexo" name="sexo" />
                <button type="submit">Submit</button>
            </form>
    
        );
    }

    
    
}

export default Apps;