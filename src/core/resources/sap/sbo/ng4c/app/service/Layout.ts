/// <reference path="../../launchpad/dashboard/tiledata.ts" />
/**
* Control all storage including local storage, memeory storage, backend storage - persistence
*/
module sap.sbo.ng4c.app.service {
    'use strict';

    import TileData = sap.sbo.ng4c.launchpad.dashboard.TileData;
    import TileSize = sap.sbo.ng4c.launchpad.dashboard.TileSize;

    export class Layout {

        public Layout() {
            
        }

        public doLayout(tiles: TileData[], parent: HTMLElement, width: number, height: number, marginLeft: number, marginTop: number, rightToLeft: boolean): TileData[] {

            function getRemSize(): void {
                var p: HTMLElement = document.createElement("div");
                p.className = 'basicRem';
                p.innerHTML = "A";
                document.body.appendChild(p);

                console.log(p.clientHeight);

                document.body.removeChild(p);
            }

            getRemSize();

            function parseSize(size: String): TileSize {
                var sizes: string[] = size.split('x');
                return { w: parseInt(sizes[0], 10), h: parseInt(sizes[1], 10) };
            }

            function calculateTilesInRow(container: HTMLElement, width: number, marginLeft: number): number {
                var containerWidth: number = container.clientWidth;
                var tilesInRow: number = Math.floor(containerWidth / (width + marginLeft)) / 12;
                return Math.floor(tilesInRow);
            }

            function tryPlaceAt(row: number, col: number, tile: TileData): boolean {
                var w: number = tile.size.w;
                var h: number = tile.size.h;
                for (var r: number = row; r < row + h; r++) {
                    for (var c = col; c < col + w; c++) {
                        if (matrix[r][c] !== -1) {
                            return false;
                        }
                    }
                }
                return true;
            }

            function palceAt(row: number, col: number, tile: TileData): boolean {
                var w: number = tile.size.w;
                var h: number = tile.size.h;
                for (var r = row; r < row + h; r++) {
                    for (var c = col; c < col + w; c++) {
                        matrix[r][c] = tile.index;
                    }
                }
                return true;
            }

            function findFirstFitPositionAndSet(tile) {
                for (var row = 0; row < totalRows; row++) {
                    for (var col = 0; col < tilesInRow; col++) {
                        if (tryPlaceAt(row, col, tile)) {
                            palceAt(row, col, tile);
                            return true;
                        }
                    }
                }
                return false;
            }

            function trimMatrix(): void {
                var colEmpty = false, copy = matrix.concat();
                matrix = [];
                for (var row = 0; row < totalRows; row++) {
                    colEmpty = true;
                    for (var col = 0; col < tilesInRow; col++) {
                        if (copy[row][col] !== -1) {
                            colEmpty = false;
                        }
                    }
                    if (colEmpty === true) {
                        totalRows = row;
                        break;
                    } else {
                        matrix.push(copy[row]);
                    }
                }
            }

            function applyTilesPositions() {
                var positionedTiles: number[] = [], tile: TileData;
                for (var i:number = 0; i < matrix.length; i++) {
                    for (var j: number = 0; j < matrix[0].length; j++) {
                        if (matrix[i][j] !== -1 && positionedTiles.indexOf(matrix[i][j]) < 0) {
                            tile = tiles[matrix[i][j]];

                            tile.left = j * width + j * marginLeft;
                            tile.top = i * height + i * marginTop;
                            positionedTiles.push(tile.index);
                        }
                    }
                }
            }
            
            //copy of tiles array
            tiles = tiles.slice(0);
            var i: number = 0, j: number = 0, total: number = 0, totalCount: number = 0;
            var rowInit: number[] = null, tilesInRow: number = calculateTilesInRow(parent, width, marginLeft);
            var rate: number = 1.2, w: number = 0, h: number = 0, matrix: number[][] = [];

            for (i = 0, total = tiles.length; i < total; i++) {
                tiles[i].size = parseSize(tiles[i].Size);
                w = tiles[i].size.w;
                h = tiles[i].size.h;
                tiles[i].index = i;
                totalCount += w * h;
            }

            var totalRows: number = Math.ceil(totalCount * rate / tilesInRow);

            for (i = 0; i < totalRows; i++) {
                rowInit = [];
                for (j = 0; j < tilesInRow; j++) {
                    rowInit.push(-1);
                }
                matrix.push(rowInit);
            }

            for (i = 0, total = tiles.length; i < total; i++) {
                findFirstFitPositionAndSet(tiles[i]);
            }

            if (rightToLeft) {
                for (var i = 0; i < matrix.length; i++) {
                    matrix[i].reverse();
                }
            }

            trimMatrix();

            applyTilesPositions();

            var str = [], index;
            for (var row: number = 0; row < totalRows; row++) {
                str.push("Row -->" + row + ": ");
                for (var col = 0; col < tilesInRow; col++) {
                    index = matrix[row][col];
                    str.push(index < 10 ? "0" + index : index);
                    str.push(" ");
                }
                str.push("\n ");
            }
            console.log(str.join(""));

            str = [];
            for (i = 0; i < tiles.length; i++) {
                str.push("Tile -->" + i + ": ");
                str.push(tiles[i].Size + " left: " + tiles[i].left + ", top: " + tiles[i].top);
                str.push("\n ");
            }
            console.log(str.join(""));

            return tiles;
        }

    }
}