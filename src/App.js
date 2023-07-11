import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         newWho: 'Marceline',
         newWat: 'something',
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

    listOfDudes= () => {
        return this.state.characters.map(dude =>
        (<li 
            key={dude.id} className='dude'>
            <a className="ctrl">x</a>
            <article className=''>
            {dude.who}
            <span>{dude.wat}</span>
            </article>

            <input className='ctrl' type='number' value={dude.cool} onChange={this.handleCool(dude)}/>
        
        </li>))
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



    handleSubmit = event => {
        // event.preventDefault()
        if (event.key === 'Enter') {
            this.setState(state => {
                const newDude = {
                    id: Math.max(...state.characters.map(d => d.id)) + 1,
                    who: this.state.newWho,
                    wat: this.state.newWat,
                    cool: 20
                }

        // this.setState({ 
        //     characters: [...this.state.characters, newDude]
            return { characters: [...state.characters, newDude] }})

    }}
    render() {
        
            
        return (
            <div>
                <ul>{this.listOfDudes()}</ul>
                <form className='add-new' onKeyPress={this.handleSubmit}>
                <input type='text' 
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
