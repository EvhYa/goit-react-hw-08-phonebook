import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  text-align: left;
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  > li {
    /* &::before{
        content: " ";
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: auto 0;
        background-color: yellowgreen;
        text-align: center;
        float: center;
    } */
    width: 300px;
    /* max-width: 400px; */
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }
  list-style: none;
`;
