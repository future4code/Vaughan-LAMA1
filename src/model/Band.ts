export class Band {
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string

    ) { }

    getId() {
        return this.id
    }

    getMusicGender() {
        return this.music_genre
    }

    getName() {
        return this.name
    }

    getResponsible() {
        return this.responsible

    }

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setMusicGenre(music_genre: string) {
        this.music_genre = music_genre
    }

    setResponsible(responsible: string) {
        this.responsible = responsible
    }

    static toUserModel(band: any): Band {
        return new Band(band.id, band.name, band.music_genre, band.responsible);
    }
}

export interface BandInputDTO{
    name: string;
    music_genre: string;
    responsible: string;
}