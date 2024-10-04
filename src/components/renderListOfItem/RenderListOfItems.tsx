import * as React from 'react';

export interface IRenderListOfItemsProps <T = any> {
    listofItems: T[],
    callback: (item: T)  => React.ReactNode
}

export function RenderListOfItems (props: IRenderListOfItemsProps) {
  return Array.isArray(props.listofItems) ? props.listofItems.map(props.callback) : <></>;
}
