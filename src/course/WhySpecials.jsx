import React from "react";
import { Html } from "@mui/icons-material";

const WhySpecials = () => {
  return (
    <>
      <div className="why__specials course__description">
        <div>
          <h3>বহুব্রীহির ক্যারিয়ার ট্র্যাক প্রোগ্রাম এতো স্পেশাল কেনো?</h3>
        </div>
        <div className="gutter__div"></div>

        <hr />
    <div className="gutter__div"></div>

        <div>
          <p>
            কিছু ‘অস্বাভাবিক’ সুবিধার জন্য এটি স্পেশাল – যেগুলো রেগুলার অনলাইন
            বা অফলাইন কোর্সে এতো ডেডিকেটেডভাবে দেয়া সম্ভব হয় না। এসব সুবিধা
            নিশ্চিত করতেই মূলত আমরা এই ওয়েব ডেভেলপমেন্ট ক্যারিয়ার ট্র্যাক চালু
            করেছি!
          </p>
        </div>
      </div>
    <div className="gutter__div"></div>

      <hr />
      <div className="gutter__div"></div>

      <div className="gutter__div">
        <div className="card__s">
          <div className="card__header">
            <div className="card__img">
              {" "}
              <Html
                color="white"
                sx={{
                  backgroundColor: "#ffffff",
                }}
              />{" "}
            </div>
            <div className="card__text">
              <h2>HTML5, CSS3, Bootstrap 4</h2>
            </div>
          </div>

          <div className="card__body">
            যেকোনো ধরনের ওয়েব ডেভেলপমেন্টের জন্য সবচেয়ে বেসিক লেভেলে HTML ও CSS
            জানা খুব দরকারি। Boostrap-এর মতো ফ্রেমওয়ার্ক জানা থাকলে সেটা দেয়
            বাড়তি সুবিধা। তাই এ প্রোগ্রামের শুরুতেই ফ্রন্ট-এন্ডের বেসিক বিষয়গুলো
            শিখতে পারবেন।
          </div>
        </div>
      </div>

      <div className="gutter__div">
        <div className="card__s">
          <div className="card__header">
            <div className="card__img">
              {" "}
              <Html
                color="white"
                sx={{
                  backgroundColor: "#ffffff",
                }}
              />{" "}
            </div>
            <div className="card__text">
              <h2>HTML5, CSS3, Bootstrap 4</h2>
            </div>
          </div>

          <div className="card__body">
            যেকোনো ধরনের ওয়েব ডেভেলপমেন্টের জন্য সবচেয়ে বেসিক লেভেলে HTML ও CSS
            জানা খুব দরকারি। Boostrap-এর মতো ফ্রেমওয়ার্ক জানা থাকলে সেটা দেয়
            বাড়তি সুবিধা। তাই এ প্রোগ্রামের শুরুতেই ফ্রন্ট-এন্ডের বেসিক বিষয়গুলো
            শিখতে পারবেন।
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySpecials;
