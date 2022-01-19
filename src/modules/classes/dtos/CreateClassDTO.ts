import { IsNotEmpty } from 'class-validator';

export class CreateClassDTO {
    @IsNotEmpty({ message: 'Name not empty!' })
    name: string;

    @IsNotEmpty({ message: 'Description not empty!' })
    description: string;

    @IsNotEmpty({ message: 'Video not empty!' })
    video: string;

    @IsNotEmpty({ message: 'Date init not empty!' })
    date_init: Date;

    @IsNotEmpty({ message: 'Date end not empty!' })
    date_end: Date;

    constructor(name: string, description: string, video: string, date_init: Date, date_end: Date) {
        this.name = name;
        this.description = description;
        this.video = video;
        this.date_init = date_init;
        this.date_end = date_end;
    }

    static create(name: string, description: string, video: string, date_init: Date, date_end: Date) {
        return new CreateClassDTO(name, description, video, date_init, date_end);
    }
}
