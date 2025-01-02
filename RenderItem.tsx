import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import {Tarea} from './App';

interface ItemProps{
    item: Tarea;
    marcarEstado: (item: Tarea) => void;
    eliminarTarea: (item: Tarea) => void;
}

// export default function renderItem({ item }: { item: Tarea }) {
export default function renderItem({ item, marcarEstado,eliminarTarea }: ItemProps) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => marcarEstado(item)}>
          <Text style={item.estado ? styles.textDone : styles.text}>{item.titulo}</Text>
          <Text style={styles.text}>{new Date(item.fecha).toLocaleDateString()}</Text>
        </TouchableOpacity>
        {item.estado && (
          <TouchableOpacity onPress={() => eliminarTarea(item)}
            style={styles.removeButton}>
            <Text style={styles.whiteText}>Eliminar</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }