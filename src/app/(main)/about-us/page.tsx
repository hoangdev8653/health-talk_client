import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import GoogleMapComponent from "@/components/GoogleMap";

function AboutUs() {
  return (
    <div className="w-4/5 mx-auto my-12">
      <h1
        style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
        className=" font-medium text-3xl my-4 "
      >
        Về Chúng Tôi
      </h1>
      <div className="flex w-full gap-12 tablet:block">
        <div className="w-[65%] text-sm tablet:w-full md:text-xl ">
          <p className="w-full my-4">Bạn đọc thân mến!</p>
          <p className="pb-4 leading-relaxed">
            Dù bạn là ai, sống ở thành thị hay nông thôn, trẻ hay già, đã lập
            gia đình hay còn độc thân, điều đó không quan trọng. Những khác biệt
            ấy không thể giới hạn tiềm năng hay khát khao sống khỏe mạnh và ý
            nghĩa của bạn. Sức khỏe và hạnh phúc không phải đặc quyền, mà là
            quyền cơ bản của mỗi người, bất kể bạn đang ở giai đoạn nào trong
            cuộc đời
          </p>
          <p className="pb-4 leading-relaxed">
            Tại <span className="font-semibold">H7 Life</span>, chúng tôi hiểu
            rằng ai cũng từng trải qua những giai đoạn khó khăn: có người đang
            vật lộn với áp lực cuộc sống, có người mỏi mệt trước những thử thách
            sức khỏe, và cũng có người đang loay hoay đi tìm sự cân bằng trong
            tâm trí. Nhưng chúng tôi tin rằng, chỉ cần một chút cảm hứng, một
            chút kiến thức đúng đắn, và sự hỗ trợ kịp thời, bạn hoàn toàn có thể
            viết lại câu chuyện sức khỏe của chính mình.
          </p>
          <p className="pb-4 leading-relaxed">
            Chúng tôi – những người sáng lập{" "}
            <span className="font-semibold">H7 Life</span> – đã từng đi qua
            những ngã rẽ khác nhau trong cuộc sống. Có người là chuyên gia y tế,
            khao khát lan tỏa thông tin khoa học đến cộng đồng; có người từng
            trải qua biến cố sức khỏe lớn lao, nhưng đã đứng lên mạnh mẽ hơn; có
            người là những nhà nghiên cứu tận tâm, mong muốn giúp mọi người hiểu
            rằng việc chăm sóc bản thân không phải là xa xỉ, mà là điều cần
            thiết. Và rồi, tất cả chúng tôi đã gặp nhau để tạo nên{" "}
            <span className="font-semibold">H7 Life</span>, một không gian kết
            nối, chia sẻ và truyền cảm hứng sống khỏe, sống tích cực.
          </p>
          <p className="py-4">Sứ mệnh của chúng tôi là:</p>
          <ul className="list-disc ml-5 leading-relaxed">
            <li>
              Cung cấp kiến thức sức khỏe rõ ràng, chính xác và dễ hiểu, giúp
              bạn đưa ra những lựa chọn đúng đắn cho bản thân và gia đình.
            </li>
            <li>
              Kết nối cộng đồng, tạo nên một không gian để mọi người chia sẻ,
              học hỏi và hỗ trợ lẫn nhau.
            </li>
            <li>
              Truyền cảm hứng để mỗi người có thể chủ động chăm sóc sức khỏe và
              xây dựng lối sống lành mạnh.
            </li>
          </ul>
          <p className="py-4 leading-relaxed">
            Chúng tôi tin rằng, chỉ cần bạn đồng hành, H7 Life có thể giúp bạn
            lan tỏa những giá trị tốt đẹp, đánh thức tiềm năng sống khỏe mạnh và
            hạnh phúc ẩn sâu trong bạn.
          </p>
          <p className="py-4 leading-relaxed">
            Một lần nữa, H7 Life xin gửi lời cảm ơn chân thành đến bạn đọc gần
            xa vì đã tin tưởng, ủng hộ và đồng hành cùng chúng tôi trong suốt
            thời gian qua.
          </p>
          <p className="font-bold">
            H7 Life – Vì sức khỏe và cuộc sống của bạn.
          </p>
          <p className="py-4 leading-relaxed">
            Địa chỉ: Cẩm Thanh, Hội An, Quảng Nam <br/>
            Hotline tư vấn: 0899344478
          </p>
        </div>
        <div className="flex-1 tablet:w-full ">
          <img
            className="w-[360px] h-[260px] object-cover tablet:w-full"
            src="https://www.ladiesofvietnam.net/wp-content/uploads/2021/06/Counselling-Room.jpg"
            alt="1"
          />
          <div className="my-8 text-center justify-center flex gap-4">
            <div className="p-2 bg-blue-700">
              <FaFacebookSquare className="text-4xl text-white bg-transparent  " />
            </div>
            <div className="p-2 bg-red-700">
              <FaYoutube className="text-4xl text-white" />
            </div>
          </div>
          <img
            className="w-[360px] h-[260px] object-cover tablet:w-full"
            src="https://www.ladiesofvietnam.net/wp-content/uploads/2021/06/Reception.jpg"
            alt="2"
          />
          <div className="my-8">

          <GoogleMapComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
