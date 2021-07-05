import React, {useState, useRef} from 'react';
import {View, FlatList, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import {Metrics} from '../../theme';

const ImageSlider = props => {
  const {images, imageWidth, imageStyle} = props;

  const IMAGE_WIDTH = imageWidth;

  const [activeIndex, setActiveIndex] = useState(0);

  const topRef = useRef();

  const scrollToActiveIndex = index => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * IMAGE_WIDTH,
      animated: true,
    });
  };

  return (
    <View>
      <FlatList
        ref={topRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.toString()}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(
            Math.round(ev.nativeEvent.contentOffset.x / Metrics.screenWidth),
          );
        }}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            resizeMode={'cover'}
            style={{
              width: IMAGE_WIDTH,
              height: Metrics.screenHeight * 0.338,
              ...imageStyle,
            }}
          />
        )}
      />

      <View style={{...styles.dotsContainer}}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              ...styles.dot,
              backgroundColor:
                index === activeIndex
                  ? 'rgba(255, 255, 255, 1)'
                  : 'rgba(255, 255, 255, .5)',
            }}
          />
        ))}
      </View>
    </View>
  );
};

ImageSlider.defaultProps = {
  images: [],
  imageWidth: 0,
  imageStyle: {},
};

ImageSlider.propTypes = {
  images: PropTypes.array,
  imageWidth: PropTypes.number,
  imageStyle: PropTypes.object,
};

export default ImageSlider;
