import React from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends React.Component {
    constructor(props) {
      super(props)

      this.input = React.createRef()
    
      this.state = {
         newWho: '',
         newWat: '',
          characters: [{
              id: 1,
              who: 'Folm',
              wat: 'nieco',
              cool: 11,
          },
          {
              id: 2,
              who: 'Foalm',
              wat: 'niecooo',
              cool: 13,
          },
          ]
      }
    }

    componentDidMount = () => {
        console.log('nieco')
    }

    listOfDudes= () => {
        return this.state.characters.map(dude => (
        <CSSTransition key={dude.id} timeout={200} classNames="dude">
        <li key={dude.id} className='dude'>
            <a className="ctrl" onClick={() => this.removeDude(dude)}>x</a>
            <article>
            {dude.who}
            <span>{dude.wat}</span>
            </article>
            <input className='ctrl' type='number' value={dude.cool} onChange={this.handleCool(dude)}/>
        
                </li></CSSTransition>))
    }

    handleWho = event => {
        this.setState({
            newWho: event.target.value,
    
        })
    }

    handleWat = event => {
        this.setState({
            newWat: event.target.value,

        })
    }

    handleCool = dude => event => {
        // this.setState({
        //     newWat: event.target.value,

        const cool = event.target.value
        this.setState(state => { 
            return { 
                characters : state.characters.map(item => 
                    item===dude ? {...dude, cool} : item)
             }})

    }

    removeDude = dude => {
        this.setState(state => { 
            return {
                 characters: state.characters.filter(item => item !== dude) }})
    }



    handleSubmit = event => {
        // event.preventDefault()
        if (event.key === 'Enter' && this.state.newWat && this.state.newWho) {
            this.setState(state => {
                const newDude = {
                    id: Math.max(...state.characters.map(d => d.id)) + 1,
                    who: this.state.newWho,
                    wat: this.state.newWat,
                    cool: 20
                }

        // this.setState({ 
        //     characters: [...this.state.characters, newDude]

                const updatedCharacters = [...state.characters, newDude];
            return { 
                characters: updatedCharacters, 
            }
        })
                this.resetForm()

    }}

    resetForm = () => {
        this.setState({
            newWho:'',
            newWat:''
        })
        this.input.current.focus()
    }

    render() {
        
            
        return (
            <div>
                <TransitionGroup component="ul">{this.listOfDudes()}</TransitionGroup>
                <form className='add-new' onKeyPress={this.handleSubmit}>
                <input 
                    autoFocus
                    type='text' 
                        ref= {this.input}
                        value={this.state.newWho}
                        onChange={this.handleWho}/>
                <input type='text'
                        value={this.state.newWat}
                        onChange={this.handleWat} />
            </form>
            <p className='preview'>
                {this.state.newWho}
            </p>
            </div>
    )}
}

export default App;
