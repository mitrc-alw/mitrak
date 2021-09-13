import styled from "styled-components";

export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100vw;
    overflow: hidden;
    background: ${({ background }) => (background ?? "white")};
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.3);
    
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const ImgLogo = styled.img`
    width: 10rem;
    height: auto;
    padding: 0.5rem;
    padding-left: 2.5rem;
    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

export const Logo = styled.a`
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`;

export const MenuLink = styled.a`
    padding: 1rem 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #6B454D;
    transition: all 0.3s ease-in;
    font-size: 1.1rem;

    &:hover {
        color: #7b7fda;
    }
`;

export const ExpandableList = styled.div`
    position: absolute;
    height: 50px;
    width: 60px;
    background: red;
    bottom: -20;
    z-index: 1000;
`;

export const ExpandableLink = styled.div`

`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ showMobileMenu }) => (showMobileMenu ? "300px" : "0")};
        transition: max-height 0.3s ease;
    }
`;

export const Text = styled.span`
    font-size: 0.9rem;
    color: ${({color}) => (color)};
    padding: 0.5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.5rem;

    @media (max-width: 768px) {
        display: none;
    }
`;