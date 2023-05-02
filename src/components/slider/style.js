import styled from 'styled-components'


// const data = (prop) => {
//     console.log(prop);
// }
// data()

export const Container = styled.div `
position: relative;
/* padding: 20px 15px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 40px;

`

export const Wrapper = styled.div `
position: relative;
width: 500px;
height: 200px;
margin: 0 auto;
overflow: hidden;
`

export const Slides = styled.div `
display: flex;
flex-direction: row;
`
export const Image = styled.img `
width: 500px;
height: 200px;
position: absolute;
top: 0;
left: 0;
transform: ${(prop)=> prop.data};
transition: 0.5s ease all;
`

export const ButtonWrap = styled.div `
position: absolute;
top: 100%;
z-index: 5;

`
export const Button = styled.button `
margin-right: 20px;
:last-child{
    margin-right: 0;
}
`