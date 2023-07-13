import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Summary from '../../summary/Summary';
import Changelog from '../../changelog/Changelog';

const Tab = createBottomTabNavigator();

function BottomBar(props) {


    function handlePress(event) {
        const pageTitle = event.target.split("-")[0];
        props.handleTabPress(pageTitle);
    }
    
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarShowLabel: true, headerShown: false}}>
            <Tab.Screen 
                listeners={({ navigation, route }) => ({tabPress: (e) => {handlePress(e)}})} 
                initialParams={{name: 'Homes'}} name="Home" component={Summary} 
            />
            <Tab.Screen 
                listeners={({ navigation, route }) => ({tabPress: (e) => {handlePress(e)}})} 
                initialParams={{name: 'CLG'}} name="ChangeLog" component={Changelog} 
            />
        </Tab.Navigator>
    );
}

export default BottomBar;