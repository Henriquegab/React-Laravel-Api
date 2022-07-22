import React from 'react';
// import '../styles/globals.css';
class App extends React.Component {
   
        // Constructor 
        constructor(props) {
            super(props);
    
            this.state = {
                items: [],
                DataisLoaded: false
            };
        }
    
        // ComponentDidMount is used to
        // execute the code 
        componentDidMount() {
            fetch(
                    "http://127.0.0.1:8000/api/aluno")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            items: json,
                            DataisLoaded: true
                        });
                })
        }
        render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded) return <div>
                <h1> Perae man kkkjkj </h1> </div> ;
    
            return (
            <div className = "App">
                <h1> Dados pegos da Api em Laravel usando React </h1>  {
                    items.map((item) => ( 
                    <ol key = { item.id } >
                        Nome: { item.nome }, 
                        Idade: { item.idade }, 
                        Sexo: { item.sexo } 
                        </ol>
                    ))
                }
            </div>
        );
    }
}
   
export default App;