import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header, footer {
    flex: 0;
  }

  main {
    flex: 1;
  }

  nav {
    width: 300px;
  }

  section {
    padding: 1rem 2rem;
  }
`;

export const Header = styled.div`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding-right:1rem;
`;

export const HeadHomeImage = styled.img`
  height: 4rem;
`;

export const HeadImage = styled.img`
  height: 3rem;
`;

export const LoginElmContainer = styled.div`
  align-items: center;  
  display:  flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 0.8rem;
  margin: 0 0 0.5rem;
  padding: 0;
`;

export const LoginButton = styled.button`
  border: none;
  background: none;
  color: ${(props)  => props.theme.colors.secondary};
  cursor: pointer;
`;

export const FooterContent = styled.div`
  align-items:  center;
  display:  flex;
  height: 80px;
  padding: 0 1rem;
`;

export const BackButton = styled.a`
  align-items: center;
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  cursor: pointer;
  display: flex;
  padding: 0.5rem 1rem;
  transform-style: preserve-3d;
  text-decoration: none;

  &::before {
    background: #000;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all .3s;
    width: 5px;
  }

  &:hover {
    background: #000;
    color: #fff;
  }

  &:hover:before {
    background: #fff;
  }
`;

export const ButtonText = styled.span`
  padding-left: 0.5rem;
`;

export const Triangle = styled.div`
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid ${(props)  => props.theme.colors.secondary};;
  border-bottom: 0.5rem solid transparent;
  height: 0;
  width: 0;
`;

