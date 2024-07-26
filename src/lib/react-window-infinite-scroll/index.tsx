import { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { ReactWindowInfiniteScrollProps } from "./index.types";

// Infinite scroll component
const ReactWindowInfiniteScroll = <T,>({
  currentPage,
  totalPage,
  itemLength,
  infiniteCallback,
  children,
  listHeight = 44, // Default height of each list item
}: ReactWindowInfiniteScrollProps<T>) => {
  const [itemCount, setItemCount] = useState(0);

  // Determines if the item at the given index is loaded
  const isItemLoaded = (index: number) => {
    const isLastPage = totalPage === currentPage;
    const isLastItem = itemLength - 1 === index;
    return !isLastPage && isLastItem;
  };

  // Updates item count based on current page and total pages
  useEffect(() => {
    if (totalPage === currentPage) {
      setItemCount(itemLength + 1); // Show an extra item when on the last page
    } else {
      setItemCount(itemLength);
    }
  }, [itemLength, totalPage, currentPage]);

  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={infiniteCallback}
        >
          {({ onItemsRendered, ref }) => (
            <List
              height={height}
              width={width}
              itemSize={listHeight}
              itemCount={itemCount}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {children}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default ReactWindowInfiniteScroll;
