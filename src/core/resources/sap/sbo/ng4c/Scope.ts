module sap.sbo.ng4c {

    export interface CssProps {
        name: string;
    }

    export interface Scope extends ng.IScope{
        template: string;
        className: string;
        width: number;
        height: number;
        left: number;
        top: number;

        css: CssProps;

        data: any;//raw object
    }
} 