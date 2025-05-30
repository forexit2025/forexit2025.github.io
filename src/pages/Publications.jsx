import { blogs, newsletters } from "../data/publicationsinfo";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PublicationsPage() {
  // "blogs" and "newsletters" will have all the info of any blogs and newsletters to post/publish ...

  const createPublicationCards = (items) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {items.map((item, index) => (
          <div key={index} className="py-4 flex flex-col">
            <img src={item.image?.[0] || ""} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-xs font-semibold mb-2">{item.title}</h3>
            {item.publishdate?.[0] && <p className="text-xs text-gray-600 mb-2">Published on {item.publishdate}</p>}
            {item.authors?.[0] && <p className="text-xs text-gray-600">By {item.authors.filter(Boolean).join(", ")}</p>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="p-20">
        <h1 className="mt-20 text-7xl font-semibold flex justify-center mb-10 bg-gradient-to-r from-[#014EB1] to-[#31C6E1] bg-clip-text text-transparent">
          Our Publications
        </h1>
        {/* Blogs */}
        <section className="mb-10">
          <h2 className="text-4xl font-bold pb-6">Blogs</h2>
          <p className="text-[#828282]">What’s on in our community and find out more about our impact!</p>
          {createPublicationCards(blogs)}
        </section>
        {/* Newsletters */}
        <section>
          <h2 className="text-4xl font-bold pb-6">Newsletters</h2>
          <p className="text-[#828282]">
            Keep up with trends in the market, what’s new in trading, find out more about foreign exchange and much
            more!
          </p>
          {createPublicationCards(newsletters)}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default PublicationsPage;
