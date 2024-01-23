import Slider from '@/app/components/Common/slider';

export default function Home() {
  const data = [
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      content: "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
    },
    {
      title: 'If you are going to use a passage of Lorem Ipsum.',
      content: "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"
    }
  ]
  return (
    <div className="mt-10">
      <Slider carouselItems={data} 
        slidesToShow={1} 
        itemClassName='min-h-[300px] md:min-h-[500px] xl:min-h-[700px] bg-[#AFC6BD] rounded-2xl flex flex-wrap items-center justify-center'
        itemTitleClassName='text-2xl font-bold max-w-[500px] mx-auto'
        itemContentClassName='max-w-[500px] mx-auto mt-5'
      />
    </div>
  )
}
