var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
// Infinite scroll component
var ReactWindowInfiniteScroll = function (_a) {
    var currentPage = _a.currentPage, totalPage = _a.totalPage, itemLength = _a.itemLength, infiniteCallback = _a.infiniteCallback, children = _a.children, _b = _a.listHeight, listHeight = _b === void 0 ? 44 : _b;
    var _c = useState(0), itemCount = _c[0], setItemCount = _c[1];
    // Determines if the item at the given index is loaded
    var isItemLoaded = function (index) {
        var isLastPage = totalPage === currentPage;
        var isLastItem = itemLength - 1 === index;
        return !isLastPage && isLastItem;
    };
    // Updates item count based on current page and total pages
    useEffect(function () {
        if (totalPage === currentPage) {
            setItemCount(itemLength + 1); // Show an extra item when on the last page
        }
        else {
            setItemCount(itemLength);
        }
    }, [itemLength, totalPage, currentPage]);
    return (_jsx(AutoSizer, { children: function (_a) {
            var height = _a.height, width = _a.width;
            return (_jsx(InfiniteLoader, __assign({ isItemLoaded: isItemLoaded, itemCount: itemCount, loadMoreItems: infiniteCallback }, { children: function (_a) {
                    var onItemsRendered = _a.onItemsRendered, ref = _a.ref;
                    return (_jsx(List, __assign({ height: height, width: width, itemSize: listHeight, itemCount: itemCount, onItemsRendered: onItemsRendered, ref: ref }, { children: children })));
                } })));
        } }));
};
export default ReactWindowInfiniteScroll;
