import pic from './assets/pic.png'

function Card() {
    return (
        <>
            <div className="card">
                <img src={pic} alt="profile" />
                <h2>Heading</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi laboriosam ut autem, maiores, eveniet, ratione cupiditate mollitia soluta minima ab quam accusamus sint fuga tempora sequi sunt magni cum alias.</p>
            </div>
        </>
    );
}
export default Card