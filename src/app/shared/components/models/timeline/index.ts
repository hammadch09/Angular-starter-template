export interface Timeline {
    label: string;
    date: Date;
    index: number;
    divId: string;
    nodes?: Timeline[];
}
