import React from "react";

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { FlashList } from "@shopify/flash-list";
import { FlatList } from "react-native";

import DATA from "./data";
import { COLORS } from "../../constants";
import { yckLogo } from '../../constants';



export default function Summary() {

    const date = new Date().toLocaleDateString();

    HeaderComponent = () => {
        return (
            <View style={styles.summaryHeader}>
                <Text>FinaVIS Summary</Text>
                <Text>{date}</Text>
            </View>
        )
    }
    
    FlatListNoData = () => {
        return (
            <View style={styles.noData}>
                <Text>Add People To See Summary</Text>
            </View>
        )
    }
    ListItem = ({item}) => {
        const tot = item.inc; 
        const gon = item.gon; 
        const got = item.got; 
        const exp = Math.abs(got-gon);
        return (
            <TouchableOpacity style={{padding: 20}}>
                <View style={{flex:1, justifyContent: 'space-between'}}>
                    <View style={styles.logoContainer}>
                        <Image src={yckLogo} style={styles.logo} />
                    </View>
                    <Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.month}</Text>&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <Text style={{fontSize: 16, color: COLORS.blue, fontWeight: 'bold'}}>₹{tot} &nbsp; {'->'} &nbsp;</Text>
                        <Text style={{fontSize: 16, color: COLORS.blue, fontWeight: 'bold'}}>₹{tot-exp}</Text> {'\n'}
                        &nbsp;<Text style={{color: COLORS.red}}>₹{gon}</Text> &nbsp;
                        &nbsp;<Text style={{color: COLORS.green}}>₹{got}</Text>
                    </Text>
                </View>
                {/* <Expenditure item={item} month={'JUL2023'} /> */}
            </TouchableOpacity>
        )

    };
    ItemSeparator = () => {
        return <View style={styles.separator} />
    }
    // Expenditure = ({item}) => {
    //     const tot = item.inc; 1000
    //     const gon = item.gon; 500
    //     const got = item.got; 700
    //     const exp = Math.abs(got-gon);
    //     return (
    //         <Text>
    //             <Text style={{color: COLORS.red}}>{exp}</Text> &nbsp;
    //             <Text style={{color: COLORS.green}}>{tot-exp}</Text>
    //         </Text>
    //     );
    // }

    return (
        <View style={styles.container}>
            <HeaderComponent />
            <FlatList
                data={DATA}
                renderItem={ListItem}
                ListEmptyComponent={FlatListNoData}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '3%'
    },
    summaryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    noData: {
        marginTop: 250,
        fontSize: 43
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CCC'
    },
    logoContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        height: 88,
        width: 88,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 64,
        width: 64
    }
});