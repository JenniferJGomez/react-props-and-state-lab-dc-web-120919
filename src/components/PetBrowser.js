import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
    return <div className="ui cards">
{
      this.props.renderPets.map( pet =>
        <Pet
        petObj = {pet}
        />
  )}

    </div>
  }
}

export default PetBrowser
