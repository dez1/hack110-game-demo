import { Table } from "./table";
export class Restaurant {
    name: string;
    full: boolean;
    wait_time: number;
    tables: Table[];
    capacity: number;
}