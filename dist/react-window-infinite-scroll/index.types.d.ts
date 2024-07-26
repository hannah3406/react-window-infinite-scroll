import { ComponentType } from "react";
import { ListChildComponentProps } from "react-window";
export interface ReactWindowInfiniteScrollProps<T> {
    totalPage: number;
    currentPage: number;
    itemLength: number;
    listHeight?: number;
    infiniteCallback: () => void;
    children: ComponentType<ListChildComponentProps<T>>;
}
