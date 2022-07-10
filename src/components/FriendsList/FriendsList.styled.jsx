import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Friend = styled.li`
    display: flex;
    align-items: center;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.online ? "green" : "red"};
    margin-right: 10px;
`;

export const Avatar = styled.img`
    height: auto;
    margin-right: 10px;
`;

export const Name = styled.p`
    font-size: 16px;
`;