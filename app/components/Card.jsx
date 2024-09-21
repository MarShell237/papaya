const Card = ({
    videoId,
    title,
    description,
    thumbnail,
    duration,
    views,
    publishedAt,
    channelTitle,
    channelProfilePicture
  }) =>
    {
  return (
    <a href="#">
      <div className="flex flex-col w-[350px] h-auto relative">
        <img src={thumbnail} alt="" className="rounded-t-2xl"/>
            <small className="bg-black p-1 rounded absolute top-40 right-2">{duration}</small>
        <div className="card-bottom flex">
          <div className="w-auto">
            <img src={channelProfilePicture} alt="" className="w-12"/>
          </div>
          <div className="flex flex-col rounded-b-2xl">
            <p>{title}</p>
            <small className="light-color">{channelTitle}</small>
            <small className="light-color">{views} views - {publishedAt}</small>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card