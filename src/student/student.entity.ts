import { Entity, Column, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;
    @PrimaryColumn()
    id : string;
    @Column()
    name: string;
    @Column()
    lastname : string;
};
