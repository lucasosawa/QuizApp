import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { tailwind } from '../../../tailwind'

const TagIcon = ({ size }) => {
  return (
    <View style={{...tailwind('flex self-center'), width: size, height: size}}>
      <Svg
        class="SVGInline-svg discover-sidebar__icon-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 18"
      >
        <Path
          fill="#FFF"
          d="M15.467 7.317h-2.745l-.69 3.141h2.72l-.534 2.78h-2.732L10.485 18H7.597l1.001-4.762H5.554L4.553 18H1.678l1.002-4.762H0l.546-2.78H3.24l.676-3.14H1.25l.546-2.756h2.68L5.437 0h2.875L7.35 4.562h3.043L11.356 0h2.888l-.963 4.562H16l-.533 2.755zm-8.82-.237l-.767 3.628h3.395l.793-3.628h-3.42z"
        />
      </Svg>
    </View>
  )
}

export default TagIcon