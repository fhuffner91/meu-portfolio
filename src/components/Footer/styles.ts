import styled from 'styled-components';

export const FooterStyles = styled.footer`
  
  font-weight: 300;
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  background: var(--main-gray);
  border-top: 4px solid var(--main-red);

 p {
  margin: 2rem;
}

 i {
  vertical-align: middle;
}

@media (max-width: 28.75em) {
  *{
    flex-direction: column;
    text-align: center;
  }
}
  `;