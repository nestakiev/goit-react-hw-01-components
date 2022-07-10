import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 200px;
    border: 1px solid black;
    padding-top: 30px;
    box-sizing: border-box;
`;

export const Description = styled.div`
    background-color: white;
    text-align: center;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
`;
export const DescriptionName = styled.p`
    color: black;
    margin: 10px 0;
    font-size: 20px;
    font-weight: 700;
    
`;

export const DescriptionText = styled.p`
    color: grey;
    margin: 5px 0;
    font-size: 16px;
    
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 30px 0 0;
    background-color: lightgrey;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    text-align: center;
    border: 1px solid black;
`;

export const StatsName = styled.span`
    font-size: 10px;
    color: grey;
`;

export const StatsValue = styled.span`
    font-size: 12px;
    font-weight: 700;
`;