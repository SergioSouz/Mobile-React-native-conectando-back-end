import React, { useEffect, useState } from "react";
import api from './services/api';


import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from "react-native";

export default function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    });
  },[]);

  async function handleAddProject(){
    const response = await api.post('projects',{
      title : `Novo projetos ${Date.now()}`,
      owner : "sergio de souza silva" 
    });

    setProjects([...projects,project]);
  }

  return(
    <>
      <StatusBar barStyle='dark-content' backgroundColor="#7159c1"/>

      <SafeAreaView  style = {styles.container} >
        <FlatList 
          data = {projects}
          keyExtractor={project => project.id}
          renderItem = {({ item: project })=> (
            <Text style= { styles.title }>{project.title}</Text>
            )}
        />

        <TouchableOpacity 
          style = {styles.button}
          onPress={handleAddProject}
        >
          <Text style = {styles.buttonText}> Adicionar Porjetos</Text>
        </TouchableOpacity>
      </SafeAreaView>
     
    </>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#7159c1',
  },

  title:{
    fontSize:30,
    color:'#fff',
    fontWeight: 'bold',

  },
  button:{
    backgroundColor:'#fff',
    margin:40,
    height:50,
    borderRadius:10,
    justifyContent: "center",
    alignItems:'center',


  },
  buttonText:{
    fontWeight:"bold",
    fontSize: 14,

  }
})