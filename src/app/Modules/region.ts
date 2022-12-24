export class Region {
    idregion!: number;
    coderegion!: string;
    nomregion!: string;
    doactivite!: string;
    lanparle!: string;
    superficie!: string;
    description!: string;
    nbhabitant!: string;
}

export class Fichier {

    imageregion!: string;
    file!:File;
}

export class Pays {
    idpays!: number;
    nompays!: string;
}

export class Commentaire {
    idcommentaire!: number;
    contenu!: string;
}

