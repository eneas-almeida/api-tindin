import { Class } from '../Class';

export class ClassInMemory implements Class {
    _id: any;
    name: string;
    description: string;
    video: string;
    date_init: Date;
    date_end: Date;
    total_comments: number;
    date_created: Date;
    date_updated: Date;
}
