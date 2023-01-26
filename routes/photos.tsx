import { Handlers, PageProps } from "$fresh/server.ts";
export const handler: Handlers = {
        async GET(req, ctx) {
                
                const res = await fetch('https://jsonplaceholder.typicode.com/photos')
                const data = await res.json()
                return ctx.render(data)//cargo los datos, ahora la pagina los puede recibir
        },
      };

interface Photo {
        albumId: number
        id: number
        title: string
        url: string
        thumbnailUrl: string
}
      

//recibe los datos aca en props
export default function photos(props: PageProps) {
        console.log(props)
  return (
    <div>
        <h1>Photos</h1>
        {
                props.data.map((photo: Photo) => (
                        <div>
                                <h1>{photo.title}</h1>
                                <img src={photo.thumbnailUrl}/>
                        </div>
                ))
        }

    </div>
  )
}
