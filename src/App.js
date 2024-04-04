// import logo from './logo.svg';
import Header from "./components/Header";
import Body from "./components/Body";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const productData = [
    {
      title: "Wireless Headphones",
      subtitle: "High-quality sound for immersive experience",
      description:
        "Experience crisp, clear sound with these wireless headphones. Bluetooth connectivity ensures hassle-free usage. Perfect for music lovers and gamers alike.",
    },
    {
      title: "Smartphone",
      subtitle: "Powerful performance in your pocket",
      description:
        "Stay connected and productive with this sleek smartphone. Packed with features like a high-resolution camera, long-lasting battery, and fast processor.",
    },
    {
      title: "Fitness Tracker",
      subtitle: "Achieve your fitness goals",
      description:
        "Monitor your activity levels, track your workouts, and stay motivated with this advanced fitness tracker. Sleek design, long battery life, and compatibility with popular fitness apps.",
    },
    {
      title: "Portable Charger",
      subtitle: "Stay charged on the go",
      description:
        "Never run out of battery again with this portable charger. Compact design, high capacity, and fast charging technology make it ideal for travelers and busy professionals.",
    },
    {
      title: "Wireless Mouse",
      subtitle: "Effortless control at your fingertips",
      description:
        "Say goodbye to tangled cords with this wireless mouse. Ergonomic design, precision tracking, and long battery life ensure smooth and comfortable usage.",
    },
    {
      title: "Bluetooth Speaker",
      subtitle: "Enhance your audio experience",
      description:
        "Enjoy your favorite music anywhere with this portable Bluetooth speaker. Crystal-clear sound, long-range connectivity, and durable construction make it perfect for outdoor adventures.",
    },
    {
      title: "Gaming Keyboard",
      subtitle: "Dominate the competition",
      description:
        "Take your gaming experience to the next level with this high-performance gaming keyboard. Customizable RGB lighting, tactile switches, and durable build ensure precision and comfort.",
    },
    {
      title: "Digital Camera",
      subtitle: "Capture memories in stunning detail",
      description:
        "Preserve life's precious moments with this advanced digital camera. High-resolution sensor, fast autofocus, and intuitive controls make it perfect for both amateurs and professionals.",
    },
    {
      title: "Laptop Backpack",
      subtitle: "Protect your tech essentials on the move",
      description:
        "Keep your laptop and accessories safe and organized with this stylish laptop backpack. Padded compartments, water-resistant fabric, and ergonomic design ensure comfort and convenience.",
    },
  ];
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
            {productData.map((p)=>{
             return <Body productObj = {p} key={p.title}/>
            })}
        </div>
      </div>
      <Faq />
      <br></br> <br></br>
      <Footer />
    </>
  );
}

export default App;
