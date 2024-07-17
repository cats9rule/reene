import * as L from 'leaflet';

export class CustomTileLayer extends L.TileLayer {
    override getTileUrl(coords: L.Coords): string {
        const z = coords.z + 1;
        const yMax = Math.pow(2, z - 1) - 1;
        const x = coords.x;
        const y = yMax - coords.y;

        const zStr = z.toString().length == 2 ? z : `0${z}`;
        const xStr = '0'.repeat(5 - x.toString().length) + x;
        const yStr = '0'.repeat(5 - y.toString().length) + y;

        return `assets/tiles/${zStr}/X${xStr}Y${yStr}.jpg`;
    }
}