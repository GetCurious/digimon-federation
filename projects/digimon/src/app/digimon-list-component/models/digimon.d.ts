export type DigimonListItem = {
    id: number;
    name: string;
    href: string;
    image: string;
}


export type DigimonList = {
    content: DigimonListItem[];
    pageable: {
        currentPage: number;
        elementsOnPage: number;
        totalElements: number;
        totalPages: number;
        previousPage: string,
        nextPage: string
    }
}
