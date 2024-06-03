import {getFilm} from "@/app/actions/getFilm"
import {getAllFilms} from "@/app/actions/getAllFilms"

interface Params {
    params: {
        uid: number
    }
}

export default async function Film({params: {uid}}: Params) {
    const film = await getFilm(uid)

    return (
        <div>
            <h1>{film.result.properties.title}</h1>
        </div>
    )
}

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.result.map((film) => ({
        uid: film.uid
    }))
}
