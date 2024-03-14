import Image from "next/image";
import Link from "next/link";


const ProjectSlide = ({projectId, projectData}) => {
    const projectIdString = projectId ? projectId.toString(): '';
    const title = projectData ? projectData.title : '';
    const thumbUrl = projectData ? projectData.thumbUrl : '';
    const quickBlurb = projectData ? projectData.quickBlurb : '';
    return (
        <div className="w-full h-full flex items-center justify-center bg-purple-900" >
            <Link href={`/portfolio/${projectIdString}`} >
                <div className='flex flex-col items-center gap-x-8 h-full px-16'>
                {/* avatar, name, position */}
                <div className='w-full max-w-[600px] flex flex-col items-center relative mx-auto justify-center pt-4'>
                    <div className='flex flex-col justify-center text-center w-full h-full '>
                    {/* image */}
                    <div className='mb-2 mx-auto w-[50vw] h-[50vw] max-w-[350px] max-h-[350px] xl:max-w-[350px] rounded-full overflow-hidden aspect-w-1 aspect-h-1'>
                        <Image className=' w-full object-cover h-full' src={thumbUrl} width={4032} height={3022} alt='' />
                    </div>
                    {/* title */}
                    <div className='text-lg pt-4 text-redpinkAccent font-permanentMarker'>{title}</div>   
                    <div className='xl:text-lg text-center font-gothamBook text-gray-400'>
                    {quickBlurb}
                    </div>
                    </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center before:w-[1px]  relative xl:pl-20'>
                    {/* message */}
                
                </div>
                </div>
            </Link>
        </div>
    );
  };
  
  export default ProjectSlide;
  

