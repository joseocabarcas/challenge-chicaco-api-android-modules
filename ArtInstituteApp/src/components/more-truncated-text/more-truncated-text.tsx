import * as React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
  text: string
  linesToTruncate: number
  style: object
}

export const MoreTruncatedText = ({ text, linesToTruncate, style }: Props) => {
  const [clippedText, setClippedText] = useState<string | null>(null)
  const [more, setMore] = useState(false)

  return clippedText ? (
    <Text style={style}>
      {!more ? `${clippedText}...` : text}
      <TouchableOpacity onPress={() => setMore(!more)}>
        <Text style={styles.textShow}>{more ? 'less' : 'more'}</Text>
      </TouchableOpacity>
    </Text>
  ) : (
    <Text
      style={style}
      numberOfLines={linesToTruncate}
      ellipsizeMode={'tail'}
      onTextLayout={event => {
        //get all lines
        const { lines } = event.nativeEvent
        //get lines after it truncate
        const text = lines
          .splice(0, linesToTruncate)
          .map(line => line.text)
          .join('')
        //substring with some random digit, this might need more work here based on the font size
        //
        setClippedText(text.substring(0, text.length - 9))
      }}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  textShow: {
    fontSize: 11,
    color: '#005477',
  },
})
