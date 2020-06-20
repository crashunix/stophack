import styled from 'styled-components/native';

export const Wrapper = styled.View`
background: #fff;
flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    padding: 10px 15px;
`;

export const Title = styled.Text`
    font-size: 32px;
`;

export const Container = styled.ScrollView``;

export const Logo = styled.Image`
    width: 46px;
    height: 46px;
    margin-left: -20px;
`;

export const Nav = styled.View`
    color: #fff;
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled.Text`
    color: #fff;
    font-size: 16px;
    margin: 0 10px;
`;

export const NoConnection = styled.Text`
    text-align: center;
    height: 100%;
    font-size: 16px;
    color: #fff;
`;

export const Group = styled.TouchableOpacity`
    padding: 15px;
    ${props => props.check ? 'background: #e1e1e1' : 'background: white'};
`;

export const ScrollGroups = styled.ScrollView`
    max-height: 400px;
    min-height: 400px;
`;

export const Form = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export const TextInput = styled.TextInput`
    border: 1px solid #ccc;
    margin: 0 10px 0 0;
`;

export const Button = styled.Button`
    flex: 1;
`;

export const ScrollResults = styled.ScrollView`
    max-height: 215px;
    min-height: 215px;
`;

export const Result = styled.View`
    flex-direction: column;
    padding: 15px;
`;

export const Label = styled.Text`
    font-size: 14px;
`;
export const Word = styled.Text`
    font-size: 18px;
`;