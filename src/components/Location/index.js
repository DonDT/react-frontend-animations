import React from "react";

const index = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="home"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10104.907552643557!2d24.932096036864586!3d60.17036256092973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x711005a064251dd4!2sHotel+K%C3%A4mp!5e0!3m2!1sen!2sfi!4v1562605926741!5m2!1sen!2sfi"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default index;
