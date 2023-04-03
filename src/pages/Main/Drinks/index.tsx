import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"

export default function Drinks(){
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: ' Coca-Cola',
      description:'refrigerante mais amado da família brasileira',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: ' Guaraná Antartica',
      description: 'saboroso refrigerante de guaraná versão latinha',
      price: 6,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    }
  ]
  return (
    <>
     <Head title="Drinks"/>
     <SnackTitle>Bebidas</SnackTitle>
     <Snacks snacks={data}></Snacks>
    </>
  )
}
