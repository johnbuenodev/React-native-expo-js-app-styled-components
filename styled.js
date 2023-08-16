import styled from "styled-components/native";


export const Container = styled.View`
 flex: 1;
 justify-content: space-between;
 align-items: center;
 background-color: ${props => props.backgroundColor};
`;

export const SimpleView = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
`;

export const Titulo = styled.Text`
 color: cyan;
 font-size: 32px;
`;

export const Texto = styled.Text`
 color: ${props => props.cor};
 font-size: ${props => props.font}px;
`;

export const ButtonCustom = styled.TouchableOpacity`
 padding: 16px;
 width: 300px;
 background-color: orange;
 justify-content: center;
 align-items: center;
 border-radius: 18px;
`;