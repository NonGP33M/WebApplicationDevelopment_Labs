import './App.css';
import { VoteBox } from './component/VoteBox';

function App() {
  return (
    <div className="App">
      <h1 className='Header'>โหวตอาหาร</h1>
      <div className="votebox"><VoteBox   catagory={"อาหารคาว"} name={"ข้าวผัด"} image={"https://fit-d.com/uploads/food/93c51eb045d7079da9f7b0a660ad082c.jpg"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ut, dolore repellat nemo cumque laboriosam vitae. Quae maxime obcaecati sunt! Molestias dolor quibusdam nesciunt explicabo perferendis incidunt ad voluptatum porro.Facilis delectus sint minima quos qui vero quia."}/></div>
      <div className="votebox"><VoteBox   catagory={"อาหารหวาน"} name={"บัวลอย"} image={"https://images.deliveryhero.io/image/fd-th/LH/f5si-listing.jpg"} content={"Sunt cumque facilis quia similique quos consequatur eaque voluptas officiis dignissimos illo, nihil deserunt explicabo! Illum, perspiciatis corporis! Ut voluptatum dolor aliquid exercitationem, voluptate illo error magnam totam suscipit non?"}/></div>
    </div>
  );
}

export default App;
