export class Header {

    label: string
    sortable: boolean
    sortFunction?: Function

    constructor(label: string, sortable: boolean = false, sortFunction?: Function) {
        this.label = label;
        this.sortable = sortable;
        this.sortFunction = sortFunction;
    }

};