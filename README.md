# React Window Infinite Scroll

A React component for implementing infinite scrolling using `react-window` and `react-window-infinite-loader`. Ideal for scenarios where you need to handle a large list of items with virtualization and infinite loading.

## Installation

You can install this package via npm or yarn:

```sh
npm install react-window-infinite-scroll-simple

or

yarn add react-window-infinite-scroll-simple
```

## Usage

To use the ReactWindowInfiniteScroll component in your application, follow these steps:

Import the Component:

```jsx
import { ReactWindowInfiniteScroll } from "./lib";

function App() {
  const dummyList = new Array(40).fill(0).map((_, idx) => ({
    id: idx,
    name: `List ${idx}`,
  }));
  const totalPages = 16; // Total number of pages
  const currentPage = 10; // Current page number

  const infiniteCallback = () => {
    console.log("Loading next page...");
    // Implement the logic to fetch and append new data here
  };

  return (
    <div style={{ width: 300, height: 800, backgroundColor: "#ddd" }}>
      <ReactWindowInfiniteScroll
        totalPage={totalPages}
        currentPage={currentPage}
        itemLength={dummyList.length}
        listHeight={50}
        infiniteCallback={infiniteCallback}
      >
        {({ index, style }) => <div style={style}>{dummyList[index].name}</div>}
      </ReactWindowInfiniteScroll>
    </div>
  );
}

export default App;
```

## props

|        name        |      type       | description                                                                                                                                                                                                                                                                                   |
| :----------------: | :-------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `totalPage`     |    `number`     | The total number of pages available. This helps the component determine when it has reached the last page and adjust the item count accordingly.                                                                                                                                              |
|    `itemLength`    |    `number`     | The total number of items currently available on the current page. This prop is essential for determining the number of items to display and manage loading states.                                                                                                                           |
| `infiniteCallback` |   `function`    | A callback function that is triggered to load more items when the user scrolls near the end of the list. The function receives the range of items that need to be loaded. (e.g `(startIndex: number, stopIndex: number) => void`)                                                             |
|     `children`     | `ComponentType` | A function that returns the content to be rendered for each list item. It receives an object with `index` and `style` properties which should be applied to each item for proper rendering within the list. (e.g `(props: { index: number, style: React.CSSProperties }) => React.ReactNode`) |
|    `listHeight`    |    `number`     | The total number of items currently available on the current page. This prop is essential for determining the number of items to display and manage loading states.                                                                                                                           |
|    `itemLength`    |    `number`     | The height of each item in the list. This value is used to calculate the total height of the list and ensures proper item positioning. The default height is set to 44 pixels but can be customized as needed (`default height : 44`).                                                        |
