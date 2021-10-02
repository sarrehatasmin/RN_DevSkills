import React from 'react'
import { Text as RNText } from 'react-native'
import {mergeAll, flatten} from 'ramda'
import { presets } from './text.preset'

export default function Text({children, preset = 'default', style}) {

    const textStyle = mergeAll(
        flatten([presets[preset], style])
    )

    return (
        <RNText style={textStyle}>{children}</RNText>
    )
}
