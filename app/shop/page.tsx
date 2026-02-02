import Cards from "@/components/Cards";
export default function shop() {
    const flipkartProducts = [
        { id: 1, productImageLink: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg", cost: "₹299" },
        { id: 2, productImageLink: "https://images.pexels.com/photos/1231065/pexels-photo-1231065.jpeg", cost: "₹1,499" },
        { id: 3, productImageLink: "https://images.pexels.com/photos/404320/pexels-photo-404320.jpeg", cost: "₹42,990" },
        { id: 4, productImageLink: "https://images.pexels.com/photos/13417052/pexels-photo-13417052.jpeg", cost: "₹1,299" },
        { id: 5, productImageLink: "https://images.pexels.com/photos/15874451/pexels-photo-15874451.jpeg", cost: "₹499" },
        { id: 6, productImageLink: "https://images.pexels.com/photos/6368840/pexels-photo-6368840.jpeg", cost: "₹799" },
        { id: 7, productImageLink: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg", cost: "₹11,999" },
        { id: 8, productImageLink: "https://images.pexels.com/photos/6586823/pexels-photo-6586823.jpeg", cost: "₹54,990" },
        { id: 9, productImageLink: "https://images.pexels.com/photos/5546864/pexels-photo-5546864.jpeg", cost: "₹2,499" },
        { id: 10, productImageLink: "https://images.pexels.com/photos/7814788/pexels-photo-7814788.jpeg", cost: "₹899" },
        { id: 11, productImageLink: "https://images.pexels.com/photos/9243179/pexels-photo-9243179.jpeg", cost: "₹299" }

    ];

    return (
    
        <div className="flex gap-6 flex-wrap">
            {flipkartProducts.map((item) => (
                <Cards key={item.id} productImageLink={item.productImageLink} cost={item.cost} />
            ))}
        </div>
    );



}
