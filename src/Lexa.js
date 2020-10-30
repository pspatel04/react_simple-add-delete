import React from 'react';


const Lexa = (props) =>{
        const {lexas,deleteLexa} = props;
        // const lexaList = lexas.map(lexa=>{

        //     if(lexa.age>24)
        //     {
        //     return (
        //         <div className="lexa" key={lexa.id}>
        //         <div>{lexa.name}</div>
        //         <div>Age: {lexa.age}</div>
        //         <div>Crew: {lexa.crew}</div>
        //     </div>
        //     )
        //     }
        //     else{
        //         return null;
        //     }
        // })
        const lexaList = lexas.map(lexa =>{
            return lexa.age>24 ? (
                <div className="lexa" key={lexa.id}>
                         <div>Name:{lexa.name}</div>
                           <div>Age: {lexa.age}</div>
                        <div>Crew: {lexa.crew}</div>
                        <button onClick={ () => deleteLexa(lexa.id)}>Delete Lexa</button>
                    </div>
            ): null;
        })
    
    
        
        return(
       <div  className= "lexa-list">
           {lexaList}
       </div>
        )
    
}

export default Lexa;