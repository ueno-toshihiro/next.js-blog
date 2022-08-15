import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  align-items: center;
  background: ${(props)  => props.theme.colors.white};
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
  background: ${(props) => props.theme.colors.grey.light};
  display:  flex;
  height: 80px;
  padding: 0 1rem;
`;

export const BackButton = styled.a`
  align-items: center;
  border: 2px solid #000;
  border-radius: 0;
  background: ${(props)  => props.theme.colors.white};
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
    color: ${(props)  => props.theme.colors.white};
  }

  &:hover:before {
    background: ${(props)  => props.theme.colors.white};
  }
`;

export const ButtonText = styled.span`
  color: ${(props)  => props.theme.colors.secondary};
  font-weight: bold;
  padding-left: 0.5rem;
`;

export const Triangle = styled.div`
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid ${(props)  => props.theme.colors.secondary};
  border-bottom: 0.5rem solid transparent;
  height: 0;
  width: 0;
`;

