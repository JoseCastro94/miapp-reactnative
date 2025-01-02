import React,{useState, useEffect} from 'react';
import { Text, TouchableOpacity, FlatList, View, TextInput } from 'react-native';
import styles from './Styles';
import RenderItem from './RenderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Tarea {
  titulo: string;
  estado: boolean;
  fecha: Date;
}

export default function App() {
  const [descripcion , setDescripcion] = useState('');
  const [listtareas , setListTareas] = useState<Tarea[]>([]);

  const marcarEstado = (item: Tarea) =>{
    const tmp = [... listtareas];
    const index = tmp.findIndex(x => x.titulo === item.titulo);

    const obj = tmp[index];
    tmp [index].estado = !obj.estado;

    setListTareas(tmp);
    guardarDatos();
  };

  const eliminarTarea = (item: Tarea) =>{
    const tmp = [... listtareas];
    const index = tmp.findIndex(x => x.titulo === item.titulo);
    tmp.splice(index, 1);
    setListTareas(tmp);
    guardarDatos();
  };

  const agregarTarea = () =>{
    const tmp = [... listtareas];
    const obj = {
      titulo: descripcion,
      estado: false,
      fecha: new Date(),
    };

    tmp.push(obj);
    setListTareas(tmp);
    setDescripcion('');
    guardarDatos();
  };

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(listtareas));
    } catch (e) {
      console.log(e);
    }
  };

  const obtenerDatos = async () => {
    try {
      const data = await AsyncStorage.getItem('data');
      if (data !== null) {
        setListTareas(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mis Tareas por Hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={descripcion}
          onChangeText={(t: string) => setDescripcion(t)}
          placeholder="Agregar una nueva tarea"
          style={styles.textInput} />
          <TouchableOpacity
          onPress={agregarTarea}
          style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => (
            <RenderItem
              item={item}
              eliminarTarea={eliminarTarea}
              marcarEstado={marcarEstado}
              />
          )}
          data={listtareas}
        />
      </View>
    </View>
  );
}