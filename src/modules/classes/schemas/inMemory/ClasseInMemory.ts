import { Classe } from '../Classe';

export class ClasseInMemory implements Classe {
    _id: any;
    name: string;
    description: string;
    date_init: Date;
    date_end: Date;
    date_created: Date;
    date_updated: Date;
    total_comments: number;
}
