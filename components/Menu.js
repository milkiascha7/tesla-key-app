import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { faChevronRight, faCog, faMusic,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from './Styles';
import items from './items';


export default function Menu() {
  return (
    <ScrollView style={styles.menuItem}>
        {items.map(item =>(
            <TouchableOpacity key={item.id}>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
                        <View style={styles.menuTextBox}>
                            <Text style={styles.menuText}>{item.title}</Text>
                            {item.subTitle && (
                                <Text style={styles.subtitle}>{item.subTitle}</Text>
                            )}
                        </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
        ))} 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flex: 1,
    marginTop:20,
    marginLeft:20,
    marginRight:20,

  },
  menuRow:{
      flexDirection:'row',
      alignItems:'center',
      marginBottom:20
  },
  icon:{
      color:'white'
  },
  arrowIcon:{
    color:'#4D4D4E'
  },
  menuText:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      marginLeft:15,
      textTransform:'uppercase'
  },
  menuTextBox:{
      flexGrow:1,
  },
  subtitle:{
    color:'white',
      fontSize:11,
      fontWeight:'400',
      marginLeft:15
  },
});
