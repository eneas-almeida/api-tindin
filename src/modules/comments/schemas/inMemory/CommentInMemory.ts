import { Comment } from '../Comment';

export class CommentInMemory implements Comment {
    _id: any;
    id_class: string;
    comment: string;
    date_created: Date;
}
