import react from "react";
import { View, Text } from 'react-native';

export default function Changelog() {
    const date = new Date().toLocaleDateString();
    return (
        <View style={{alignItems: 'flex-start', margin: '5%', rowGap: '16'}}>
            <Text>FinaVIS ChangeLog</Text>
            <Text>version v0.1_11.7.23</Text>
            <Text>Bottom Bar Icons next release</Text>
            <Text>Bottom bar options - Summary, +, Changelog</Text>
            <Text>1. Summary - People (brief details: id, name, gone, got)</Text>
            <Text>2. SummaryList - List of Expenses (fetch based on current month and personId)</Text>
            <Text>3. SummaryDetail - Details Read/Edit</Text>
            <Text>?. Seacrh in Summary List</Text>
            <Text>Change FinaVIS Summary heading as Flat/FlashList Header</Text>
        </View>
    )
}