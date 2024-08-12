// #1f285d
// #FFFFFF
// #6d6e70
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <section className="container mx-auto px-6 py-5">
          <div className="flex flex-col gap-4 lg:flex-row items-center">
            <div className="lg:ml-20 lg:w-1/2 ">
              <img
                src="https://scth.scene7.com/is/image/scth/visit-maraya-in-alula-1:crop-460x620?defaultImage=visit-maraya-in-alula-1"
                alt="Destination 4"
                className="w-96 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
 "
              />
            </div>
            {/* ===================كلمات البداية======================= */}
            <div className="flex justify-center w-full">
              <div className="  text-end lg:w-1/2 ">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  تحقق من فكرتك
                </h1>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  إختبر حلك
                </h1>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  نمي عملك
                </h1>
                <button className="bg-[#1f285d] hover:bg-[#324094] text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                  أطلب تسعيرة
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===================About us======================= */}
      <div className="bg-white">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">من نحن؟</h2>
            <p className="text-gray-600 mt-4">
              نحن شركة متخصصة في التجارة، نلتزم بتقديم أفضل الأسعار والحلول
              المناسبة لعملائنا. نسعى دائمًا لفهم احتياجات السوق وتلبية متطلبات
              عملائنا بكل احترافية ودقة، مما يضمن رضاهم المستمر ويعزز من مكانتنا
              في السوق
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://media.istockphoto.com/id/1436735031/photo/group-of-business-diversity-people.jpg?s=612x612&w=0&k=20&c=7rvMA7CVpKwK5VgYvvU9x1RDcKSwM-xQlZwkU4wVzWc="
                alt="About Us"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-12">
              <h3 className="text-end text-2xl font-semibold text-[#1f285d] mb-4">
                قصتنا
              </h3>
              <p className="text-end text-gray-600 mb-4">
                بدأت شركتنا برؤية واضحة لتقديم أفضل الحلول التجارية في السوق. من
                خلال فهمنا العميق لاحتياجات العملاء وتطلعاتهم، تمكنا من بناء
                علاقات طويلة الأمد مع شركائنا. نواصل توسيع نطاق خدماتنا وتعزيز
                مكانتنا في السوق عبر تقديم منتجات وخدمات تتسم بالجودة والتميز
                والموثوقية
              </p>
              <h3 className="text-end text-2xl font-semibold text-[#1f285d] mb-4">
                رؤيتنا
              </h3>
              <p className="text-end text-gray-600 mb-4">
                .نسعى إلى أن نكون الرواد في مجال التجارة من خلال تقديم حلول
                مبتكرة وذات جودة عالية تلبي احتياجات العملاء. نطمح إلى بناء
                شراكات قوية ومستدامة مع عملائنا تعتمد على الثقة والشفافية، بهدف
                تحقيق النمو المستمر لكافة الأطراف المعنية
              </p>
              <h3 className="text-end text-2xl font-semibold text-[#1f285d] mb-4">
                فريقنا الناجح
              </h3>
              <p className="text-end text-gray-600">
                .فريقنا يتألف من نخبة من الخبراء المتميزين في مجالاتهم. نحن نؤمن
                بأن نجاحنا ينبع من تعاوننا وتفانينا في تقديم أفضل الحلول
                لعملائنا، مما يساهم في تحقيق أهداف الشركة بكفاءة وفعالية
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Section Feuter! */}
      <div className="bg-gray-100">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1f285d] text-lg font-semibold">ماذا نقدم؟</h2>
            <h3 className="text-4xl font-bold text-gray-800">
              أفضل الخدمات لكم
            </h3>
            <p className="text-gray-600 mt-4">
              .سنقدم أفضل الميزات لأولئك منكم الذين يرغبون في طلب تسعيرات بشكل
              ممتاز
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-[#1f285d] mb-4 flex justify-center">
                <img
                  src="https://img.icons8.com/?size=100&id=23535&format=png&color=1f285d"
                  className=""
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                أفضل الأسعار
              </h4>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-[#1f285d] mb-4 flex justify-center">
                <img
                  src="https://img.icons8.com/?size=100&id=58860&format=png&color=1f285d"
                  className=""
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                أفضل الأفكار الحلول
              </h4>
            </div>
            {/* <!-- Feature 3 --> */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-[#1f285d] mb-4 flex justify-center">
                <img
                  src="https://img.icons8.com/?size=100&id=42388&format=png&color=1f285d"
                  className=""
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                خبراء ومستشارين فالمجال
              </h4>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
