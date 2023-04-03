import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle"

export default function Burgers(){
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: ' Mega',
      description: 'saboroso burger com três carnes e queijo',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: ' Bacon',
      description: 'saboroso burger com bacon e queijo',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg.jpg',
    }
  ]



  return (
    <>
    <Head title="Hambúrgueres"/>
    <SnackTitle>Hambúrgueres</SnackTitle>
    <Snacks snacks={data}/>
    </>
  )
}
