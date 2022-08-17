import Button from "../../Atoms/Button";

const BannerLandingPageRoomCat = () => {
  return (
    <div className="room-category">
      <form>
        <div className="room-category-input-item">
          <label>Room Category</label>
          <select name="room" id="room" className="room">
            <option value="bad room">Bad Room</option>
            <option value="living room">Living Room</option>
            <option value="bath room">Bath Room</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </div>
        <div className="room-category-input-item">
          <label>Price Average</label>
          <select name="room" id="room" className="room">
            <option value="bad room">Rp 120.000 - 600.000</option>
            <option value="living room">Rp 120.000 - 600.000</option>
            <option value="bath room">Rp 120.000 - 600.000</option>
            <option value="kitchen">Rp 120.000 - 600.000</option>
          </select>
        </div>
        <Button type="room-category-btn">Search Product</Button>
      </form>
    </div>
  );
};

export default BannerLandingPageRoomCat;
