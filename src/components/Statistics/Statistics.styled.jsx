import styled from "styled-components";
import { getRandomHexColor } from "utils/getRandomColor";

export const Container = styled.section`
    margin-top: 30px;
`;

export const Title = styled.h2`
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    padding: 15px 0;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 40px;
    text-align: center;
    background-color: ${getRandomHexColor};
`;

export const StatsName = styled.span`
    font-size: 10px;
    color: grey;
`;

export const StatsValue = styled.span`
    font-size: 12px;
    font-weight: 700;
`;