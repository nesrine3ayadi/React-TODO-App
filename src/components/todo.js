import React, { Component } from 'react'
import logo from '../footer-logo.png'



export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: [],
            complete: false
           
        }
        
    
        this.updateInput = this.updateInput.bind(this);
        this.addItem = this.addItem.bind(this);
       
        this.completeItem = this.completeItem.bind(this);
        
      };
    
      updateInput(key, value) {
        this.setState({
            [key]:value,
            
        });
      }

      addItem (){
          
          const newItem = {
              id: 1+ Math.random(),
              value: this.state.newItem.slice(),
              complete: false
              
          };

          const list = [...this.state.list];

          list.push(newItem);

          this.setState({
              list,
              newItem:''
          });
      
      }
      deleteItem(id){
          const list =[...this.state.list];

          const updatedList = list.filter(item => item.id != id);

          this.setState({list: updatedList});
      }
    
      completeItem(index){
        let c={}
        const list =[...this.state.list];
       
        for(var i = 0; i < list.length; i++) {
            if(i==index)
            {
               
               list[i].complete = ! list[i].complete;
             
               this.setState({complete:list[i].complete });
            }
            
        }
 
  
      }
      
     
    render() {
        
        return (
            <div>
                <header>
                    <h1>To-Do App!</h1>
                    
                        <label>
                            Add new To-Do
                            <input type="text" placeholder="Entrer new Task" id="newTask" value={this.state.newItem} onChange={ e => this.updateInput('newItem', e.target.value) }  />
                            <button id="addbtn" type="submit" onClick={()=> this.addItem()}> add</button>

                        </label>
                      
                </header>
                <main>
                        <div id="divTask">
                            <h2> Let's get some work done!</h2>
 
                                {this.state.list.map((item, index) =>{
                                    return(
                                        <section id="sectionTask">
                                            <p className={` ${item.complete ?'complete':''}`}>{item.value}</p> 
                                            <button id="delete" onClick={() => this.deleteItem(item.id)}>Delete</button>
                                            <button onClick={() => this.completeItem(index)}>
                                                {` ${item.complete ? 'undo' : 'Complete'}`}
                                            </button>
                                       </section>
                                    )
                                })
                            
                                    
                                    
                                    }
                           
                           
                        </div>


                </main>
                <footer>
                        <img src={logo}/>
                        <p>Proudly powered by Comics JS</p>
                </footer>
            </div>
        )
    }
}
