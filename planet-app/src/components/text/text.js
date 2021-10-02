import React from 'react'
import { Text as RNText } from 'react-native'
import {mergeAll, flatten} from 'ramda'

export default function Text({children, preset = 'default', style}) {

    const textStyle = mergeAll(
        flatten([preset[preset], style])
    )

    return (
        <RNText style={textStyle}>{children}</RNText>
    )
}
