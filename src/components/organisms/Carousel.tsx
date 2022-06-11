import React, {useCallback} from 'react'
import {
  FlatList,
  FlatListProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'

interface CarouselProps<T> extends FlatListProps<T> {
  itemWidth: number
  offset: number
  gap: number
  onPageChange?: (page: number) => void | Promise<void>
}

export default function Carousel<T>({
  itemWidth,
  offset,
  gap,
  onPageChange,
  ...props
}: CarouselProps<T>) {
  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const newPage = Math.round(
        e.nativeEvent.contentOffset.x / (itemWidth + gap),
      )
      onPageChange?.(newPage)
    },
    [itemWidth, gap, onPageChange],
  )

  const getItemLayout = useCallback(
    (data: T[] | null | undefined, index: number) => ({
      length: itemWidth + gap,
      offset: (itemWidth + gap) * index,
      index,
    }),
    [],
  )

  return (
    <FlatList<T>
      automaticallyAdjustContentInsets={false}
      contentContainerStyle={{
        paddingHorizontal: offset + gap / 2,
      }}
      decelerationRate="fast"
      horizontal
      onScroll={onScroll}
      pagingEnabled
      snapToInterval={itemWidth + gap}
      snapToAlignment="start"
      showsHorizontalScrollIndicator={false}
      getItemLayout={getItemLayout}
      {...props}
    />
  )
}
