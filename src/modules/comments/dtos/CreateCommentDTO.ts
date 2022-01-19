import { IsNotEmpty } from 'class-validator';

export class CreateCommentDTO {
    @IsNotEmpty({ message: 'id_class not empty!' })
    id_class: string;

    @IsNotEmpty({ message: 'comment not empty!' })
    comment: string;

    constructor(id_class: string, comment: string) {
        this.id_class = id_class;
        this.comment = comment;
    }

    static create(id_class: string, comment: string) {
        return new CreateCommentDTO(id_class, comment);
    }
}
