module sap.sbo.ng4c.launchpad.dashboard {
    export interface TileData {
        TileId: string;
        Index: string;
        Size: string;
        Type: string;
        WidgetEntry: string;
        index?: number;
        size?: TileSize;
        left?: number;
        top?: number;
        width?: number;
        height?: number;
    }

    export interface TileSize {
        w: number;
        h: number;
    }
}  