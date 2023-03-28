import styled from "styled-components";


export const Container = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, auto));
gap: 1.75rem;



@media(max-width: 500px){
  grid-template-columns: 1fr;
}

.snack{
  position: relative;
  background: ${({theme}) => theme.colors.black};
  padding: 1.75rem 1.5rem;
  border-radius: 4px;


  h2{
    margin-bottom: 0.75rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  img{
    object-fit: cover;
    width: 100%;
    height: 11.25rem;
    margin-bottom: 0.375rem;
    border-radius: 4px;
  }

  p{
    font-size: 0.875rem;
  }

  div {
    margin-top: .875rem;
  }
}
`
