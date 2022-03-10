import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faFan, faKey, faLock, faToolbox, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'

const Index = () => {

    const [locked, setLocked] = useState(false)

    const clickLock = () => {
        if(locked){
            setLocked(false)
        }else{
            setLocked(true)
        }
    }


    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require("../assets/background.png")} style={styles.backgroundImage} />
            {/* header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCog} size={24} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}> sceen</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faToolbox} size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* mileage */}
            <View style={styles.batterySection}>
                <Image source={require('../assets/battery.png')} style={styles.batteryImage} />
                <Text style={styles.batteryText}> 150 Mi</Text>
            </View>
            {/* status */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            {/* control icons */}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon={faFan} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon={faKey} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={clickLock} >
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon={locked ? faLock : faUnlockAlt} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Menu */}
            <Menu />

        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:"purple"
    },
    backgroundImage:{
        width:"100%",
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
    header:{
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding:2  ,
        marginBottom:10
    },  
    icon:{
        color:'#fff'
    },
    headerTitle:{
        fontSize:16,
        color:'white',
        fontWeight:'bold'
    },
    batterySection:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    batteryImage:{
        height:26,
        width:70,
        marginRight:15
    },
    batteryText:{
        color:"white",
        fontSize:35,
        fontWeight:'bold'
    },
    status:{
        alignItems:'center'
    },
    statusText:{
        fontSize:20,
        color:'#fff',
        fontWeight:"bold"
    },
    controls:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 175

    },
    controlButton:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:50,
        padding:18,
        marginRight:15
    },
})

