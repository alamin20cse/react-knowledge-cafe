import PropTypes from 'prop-types'; // ES6


const Blog = ({blog}) => {
    // console.log(blog);
    const {title,cover,author_img,author,reading_time,posted_date,hashtags}=blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                   
                   <div className='ml-6'>
                   <h2  className='font-bold text-start' >{author}</h2>
                    <p>{posted_date}</p>

                   </div>

                </div>
                <div>
                    <h4>{reading_time} min red</h4>

                </div>

            </div>

            <h2 className="text-4xl">{title}</h2>
            <p className='text-start'>
                {
                    hashtags.map((has,index)=><span key={index} ><a href="">#{has}</a></span>)
                }

            </p>
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;