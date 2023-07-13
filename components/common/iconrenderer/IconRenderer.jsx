import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './iconrenderer.style';

export default function({ icon, dimension, handlePress}) {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image 
                source={icon}
                resizeMode='cover'
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}