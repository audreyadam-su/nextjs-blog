import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

import { getAllLocationSlugs, getLocationBySlug} from '../../lib/api'


export async function getStaticPaths() {

    const allSlugs = await getAllLocationSlugs()

    const paths = allSlugs.edges.map(edge =>{
        const {slug} = edge.node
        return{
            params:{
                id:slug
            }
        }
    

})

return{
    paths, 
    fallback:false
}
}
export async function getStaticProps({params}) {

    const locationData = await getLocationBySlug(params.id)

    return {
        props: {
            locationData
        }
    }
}



 


export default function Locations({locationData}) {

    
    const {title, featuredImage, content} = locationData;

    const {sourceUrl, mediaDetails, altText} = featuredImage.node;

    const {width, height} = mediaDetails;


    return(
        
            <Layout>
    
                <Link href="/menu"> 
                <a>Back to Menu</a>
                </Link>
                <Image 
                    src={sourceUrl}
                    width={width}
                    height={height}
                    alt={altText}
                
                />
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML= {{__html: content }} />
    
               
            </Layout>
        
    )} 



