import styled from 'styled-components';

export const PostBox = styled.div`
font-family: 'Roboto', sans-serif;
`;

export const PostStyle = styled(PostBox)`
margin-bottom: 2rem;
border-top: 1px solid black;
padding: 1.5rem 0.5rem 0.5rem 0.5rem;
`;

export const PostHeader = styled(PostStyle)`
display: flex;
flex-flow: row nowrap;
align-items: center;
`;

