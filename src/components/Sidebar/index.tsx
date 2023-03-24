import { Container } from "./styles";

import { ReactComponent as BurgerIcon} from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon} from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon} from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg';
import { useState } from "react";

export function Sidebar(){
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
    <button type="button" onClick={handleToggleMenu}>
      <img src={menuImg}/>
    </button>
    <nav>
      <ul>
        <li>
          <a href="#">
            <BurgerIcon/>
            <span>Hambúrgueres</span>
          </a>
        </li>
        <li>
          <a href="#">
            <PizzaIcon/>
            <span>Pizzas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <SodaIcon/>
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <IceCreamIcon/>
            <span>Sorvetes</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
  )
}

