import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {
    constructor(name: string, email: string, senha: string) {
        this.name = name;
        this.email = email;
        this.senha = senha;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    senha: string

}
