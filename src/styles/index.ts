import styled, {createGlobalStyle} from 'styled-components'
const EstiloGlobal = createGlobalStyle`
*{
margin: 0;
padding:0;
box-sizing: borderbox;
font-family: Roboto, sans-serif;
}
`

export const Container = styled.div`
display:grid;
grid-template-colums: 224px auto;
`
export default EstiloGlobal
