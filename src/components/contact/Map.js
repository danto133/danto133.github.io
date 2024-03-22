
const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height={355}
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7840.0722077274995!2d106.64992038510952!3d10.731698832739344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e41883a4f69%3A0xbfdcd6c3117f5712!2zNUUxIEjhurttIEEyLCBQaMaw4budbmcgNiwgQsOsbmggQ2jDoW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1711098425841!5m2!1svi!2sus"
          />
        </div>
      </div>
    </div>
  );
};
export default Map;
