import React from 'react';
import axios from 'axios';
import reults from './reults';

export default class PersonInput extends React.Component {
    state ={
        id:0,
        clickEvent : ' X',
        AbscisCase :''
        
       };

    postDataHandler = (e) => {
        
        const D2ata = {
            id:this.state.id,
            clickEvent:this.state.clickEvent
        }
        reults.post('/user.json', { D2ata }) 
        .then(res =>
            {console.log(res);
             this.setState({id: res.data});
         })
         .catch(res => {
            console.log(res);
         });
           e.preventDefault();

        /*Data).then(response=>{
            console.log(response);
        });*/
    }

       handleChange = event => {
           this.setState({id: event.target.value });
       }
      handleSubmit = event => {
          event.preventDefault();

          const user = {
              clickEvent :this.state.clickEvent,
          };
          axios
          .post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
              console.log(res);
              console.log(res.data);
          });
      };

     render(){
         return(
             <form onSubmit={this.postDataHandler}>

                 <clickF ****__>
             </form>
         )
     }
}
