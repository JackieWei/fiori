module sap.sbo.ng4c.app.config {
    export class TileConfig {
        public getTileTemplateByName(name: string): string {
            var name: string = name.toLowerCase();
            if (name === "kpi") {
                return "Kpi";
            } else {
                return "Dynamic";
            }
        }
    }
} 