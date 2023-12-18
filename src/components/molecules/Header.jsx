import React from 'react'
import buttonApple from '../buttons/buttonApple'
import ButtonGoogle from '../buttons/ButtonGoogle'
import '../molecules/header.css'

const Header = () => {
  return (
    <>
    <div className="decorations">
    <div className="diamond">
    <img src="/src/assets/img/decorative-green-diamond.svg" alt="rombo verde"></img>
    </div>
    <div className="yellow_circle">
    <img src="/src/assets/img/decorative-yellow-circle.svg" alt="círculo amarillo"></img>
    </div>
     </div>
     <div className="title">
        <h1>Mobile App Landing Page</h1>
     </div>
     <div className="subtitle">
        <h2>
            Start focusing on your goals and get more things done with Sync mobile application. It's the first app to harness the power of social connections to help you stay focused and get <br></br> organised
        </h2>
     </div>
     <div className="buttons">
      <buttonApple></buttonApple>
       <ButtonGoogle></ButtonGoogle>
    </div>
        <div className="phone">
            <img src="/src/assets/img/header-iphone.png" alt="teléfono móvil"></img>
            </div>
</>
  )

}

export default Header