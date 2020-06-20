import React, { Component, useEffect, useState } from 'react';
import { Text, View, CheckBox } from 'react-native';

import axios from 'axios';

import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

import {
    Wrapper,
    Header,
    Container,
    Logo,
    Nav,
    NavItem,
    NoConnection,
    Group,
    Title,
    ScrollGroups,
    Form,
    TextInput,
    Result,
    Label,
    Word,
    ScrollResults,
    Button
} from './styles';

import logo from '../../images/Netflix-logo2.png';
import { Divider } from 'react-native-elements';

export default function Home() {

    const [groups, setGroups] = useState([]);
    const [groupsSelected, setGroupsSelected] = useState([]);
    const [results, setResults] = useState([]);
    const [letter, setLetter] = useState([]);

    async function getGroups() {
        const response = await fetch('https://stophack.herokuapp.com/api/wordgroups');
        const data = await response.json();
        setGroups(data);
    }

    useEffect(() => {
        getGroups();
    }, []);

    function selectGroup(id) {
        const alreadySelected = groupsSelected.findIndex(item => item === id);

        console.log("Selected");

        if (alreadySelected >= 0) {
            const filteredItems = groupsSelected.filter(item => item !== id);
            setGroupsSelected(filteredItems);
        } else {
            setGroupsSelected([...groupsSelected, id]);
        }
        console.log(groupsSelected);
    }

    function hack(letter) {
        console.log('click')
        const groups = groupsSelected;
        axios.post(`https://stophack.herokuapp.com/api/hack`, {
            wordGroups: groups,
            letter: letter
        }).then(res => {
            setResults(res.data);
        })
        console.log(results);
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <Title>Montar jogo</Title>
                    <Ionicons name="md-car" size={32} color="#999" />
                </Header>
                <Divider></Divider>
                <ScrollGroups>
                    {groups.map(group => (
                        <Group check={groupsSelected.includes(group._id)} onPress={() => selectGroup(group._id)} key={group._id}><Text>{group.label}</Text></Group>
                    ))}
                </ScrollGroups>
                <Divider></Divider>
                <Form>
                    <TextInput onChangeText={text => setLetter(text)}></TextInput>
                    <Button onPress={() => hack(text)} title="Buscar"></Button>
                </Form>
                <ScrollResults>
                    {results && results.map(result => (
                        <Result key={result._id}><Label>{result.wordGroup.label}</Label><Word>{result.label}</Word></Result>
                    ))}
                </ScrollResults>
                <ScrollResults>
                    {groupsSelected.map(group => (
                        <Text key={group}>{group}</Text>
                    ))}
                </ScrollResults>
            </Container>
        </Wrapper>
    );
}